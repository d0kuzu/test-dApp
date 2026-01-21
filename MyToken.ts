import { expect } from "chai";
import hre from "hardhat";
import MyTokenModule from "../ignition/modules/MyToken.js";

describe("MyToken Unit Tests", function () {

    // Общая фикстура для инициализации инструментов и деплоя
    async function deployTokenFixture() {
        const network = (hre as any).network;
        const { ethers, ignition } = await network.connect();

        const [owner, otherAccount] = await ethers.getSigners();

        // Деплой через модуль Ignition
        const { myToken } = await ignition.deploy(MyTokenModule);

        const decimals = await myToken.decimals();
        const initialSupply = 1000000n * 10n ** decimals;

        return { myToken, owner, otherAccount, initialSupply, ethers };
    }

    describe("Basic balance checks & Storage verification", function () {
        it("Should have the correct name and symbol", async function () {
            const { myToken } = await deployTokenFixture();
            expect(await myToken.name()).to.equal("MyToken");
            expect(await myToken.symbol()).to.equal("MTK");
        });

        it("Should assign the total supply to the owner", async function () {
            const { myToken, owner, initialSupply } = await deployTokenFixture();
            expect(await myToken.balanceOf(owner.address)).to.equal(initialSupply);
        });
    });

    describe("Transfer tests", function () {
        it("Should fail if sender doesn't have enough tokens", async function () {
            const { myToken, otherAccount, owner, ethers } = await deployTokenFixture();
            const amount = ethers.parseUnits("1", 18);

            // Вместо передачи аргументов внутрь revertedWithCustomError,
            // используем проверку только типа ошибки
            await expect(
                myToken.connect(otherAccount).transfer(owner.address, amount)
            ).to.be.revertedWithCustomError(myToken, "ERC20InsufficientBalance");
        });

        it("Should emit Transfer events", async function () {
            const { myToken, owner, otherAccount, ethers } = await deployTokenFixture();
            const amount = ethers.parseUnits("50", 18);

            await expect(myToken.transfer(otherAccount.address, amount))
                .to.emit(myToken, "Transfer")
                .withArgs(owner.address, otherAccount.address, amount);
        });

        it("Edge case: transferring to yourself", async function () {
            const { myToken, owner, ethers } = await deployTokenFixture();
            const amount = ethers.parseUnits("10", 18);
            const initialBalance = await myToken.balanceOf(owner.address);

            await myToken.transfer(owner.address, amount);
            expect(await myToken.balanceOf(owner.address)).to.equal(initialBalance);
        });
    });

    describe("Negative tests (reverts)", function () {
        it("Should fail if sender doesn't have enough tokens", async function () {
            const { myToken, otherAccount, owner, ethers } = await deployTokenFixture();
            // У otherAccount изначально 0 токенов, пробуем перевести 1
            const amount = ethers.parseUnits("1", 18);

            await expect(
                myToken.connect(otherAccount).transfer(owner.address, amount)
            ).to.be.revertedWithCustomError(myToken, "ERC20InsufficientBalance");
        });

        it("Should fail when transferring to the zero address", async function () {
            const { myToken, ethers } = await deployTokenFixture();
            const amount = ethers.parseUnits("1", 18);

            await expect(
                myToken.transfer(ethers.ZeroAddress, amount)
            ).to.be.revertedWithCustomError(myToken, "ERC20InvalidReceiver");
        });
    });

    describe("Gas estimation tests", function () {
        it("Should estimate gas for a transfer correctly", async function () {
            const { myToken, otherAccount, ethers } = await deployTokenFixture();
            const amount = ethers.parseUnits("1", 18);

            const gasEstimate = await myToken.transfer.estimateGas(otherAccount.address, amount);

            // Стандартный перевод обычно требует больше 21,000 газа
            expect(gasEstimate).to.be.gt(21000n);
            console.log(`      Gas Estimate: ${gasEstimate.toString()}`);
        });
    });
});