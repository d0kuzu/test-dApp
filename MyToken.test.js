const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
    let MyToken, token, owner, addr1, addr2;

    beforeEach(async function () {
        MyToken = await ethers.getContractFactory("MyToken"); // Replace with your contract name
        [owner, addr1, addr2] = await ethers.getSigners();
        token = await MyToken.deploy(); // Assuming constructor with no args or adjust
    });

    it("Basic balance checks", async function () {
        const balance = await token.balanceOf(owner.address);
        expect(balance).to.equal(ethers.utils.parseEther("1000000")); // Adjust to your initial supply
    });

    it("Transfer tests", async function () {
        await token.transfer(addr1.address, ethers.utils.parseEther("100"));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("100"));
    });

    it("Failing transfer tests (insufficient balance)", async function () {
        await expect(
            token.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("1"))
        ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
    });

    it("Edge case: transferring to yourself", async function () {
        const initialBalance = await token.balanceOf(owner.address);
        await token.transfer(owner.address, ethers.utils.parseEther("10"));
        expect(await token.balanceOf(owner.address)).to.equal(initialBalance);
    });

    it("Gas estimation tests", async function () {
        const tx = await token.transfer(addr1.address, ethers.utils.parseEther("100"));
        const receipt = await tx.wait();
        expect(receipt.gasUsed).to.be.lt(100000); // Example threshold; adjust based on your contract
    });

    it("Event emission tests", async function () {
        await expect(token.transfer(addr1.address, ethers.utils.parseEther("100")))
            .to.emit(token, "Transfer")
            .withArgs(owner.address, addr1.address, ethers.utils.parseEther("100"));
    });

    it("Storage verification", async function () {
        // Example: Check total supply storage
        const totalSupply = await token.totalSupply();
        expect(totalSupply).to.equal(ethers.utils.parseEther("1000000")); // Adjust
    });

    it("Negative tests (reverts, asserts, incorrect parameters)", async function () {
        await expect(token.transfer(ethers.constants.AddressZero, 1)).to.be.revertedWith("ERC20: transfer to the zero address");
        await expect(token.transfer(addr1.address, 0)).to.not.be.reverted; // Zero transfer might be allowed
    });
});