const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // ← замени на свой
const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "allowance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "needed",
                "type": "uint256"
            }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "approver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
alert("v5")
let provider;
let signer;
let contract;
let account;

const connectButton = document.getElementById('connectButton');
const transferButton = document.getElementById('transferButton');
const accountAddress = document.getElementById('accountAddress');
const balanceElem = document.getElementById('balance');
const transferTo = document.getElementById('transferTo');
const transferAmount = document.getElementById('transferAmount');
const errorMessage = document.getElementById('errorMessage');
const transferEvents = document.getElementById('transferEvents');

// Обновление баланса + информации о токене
async function updateBalanceAndInfo() {
    if (!contract || !account) return;
    try {
        const [bal, name, symbol, dec] = await Promise.all([
            contract.balanceOf(account),
            contract.name(),
            contract.symbol(),
            contract.decimals()
        ]);
        const formatted = ethers.utils.formatUnits(bal, dec);
        balanceElem.textContent = `Balance: ${formatted} ${symbol} (${name})`;
    } catch (err) {
        console.error("Ошибка при обновлении баланса/инфо:", err);
        balanceElem.textContent = "Ошибка загрузки баланса";
    }
}

// Подключение кошелька + загрузка истории + подписка на события
async function connectWallet(askPermission = false) {
    try {
        if (!window.ethereum) {
            throw new Error('MetaMask не установлен');
        }

        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        let accounts;
        if (askPermission) {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        } else {
            accounts = await window.ethereum.request({ method: 'eth_accounts' });
        }

        if (accounts && accounts.length > 0) {
            account = accounts[0];
            accountAddress.textContent = `Account: ${account}`;

            contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

            await updateBalanceAndInfo();
            transferButton.disabled = false;
            errorMessage.textContent = '';

            // ────────────────────────────────────────────────
            // 1. Загружаем историю всех Transfer событий
            // ────────────────────────────────────────────────
            transferEvents.innerHTML = ''; // очищаем список перед загрузкой

            // 1. Загружаем историю событий Transfer (все прошлые, кроме возможно самого свежего)
            try {
                const currentBlock = await provider.getBlockNumber();
                const fromBlock = 0;                    // или можно с какого-то более позднего блока, если знаешь
                const toBlock   = currentBlock - 1;     // ← ключевой момент: до предыдущего блока

                const pastTransfers = await contract.queryFilter(
                    contract.filters.Transfer(null, null),
                    fromBlock,
                    toBlock                                 // не включаем текущий блок
                );

                // Добавляем в обратном порядке (старые сверху)
                pastTransfers.reverse().forEach(event => {
                    const { from, to, value } = event.args;
                    const li = document.createElement('li');
                    li.textContent = `Transfer: ${from.slice(0,6)}... → ${to.slice(0,6)}... : ${ethers.utils.formatUnits(value, 18)} tokens`;
                    transferEvents.appendChild(li);
                });

                console.log(`Загружено прошлых трансферов: ${pastTransfers.length} (до блока ${toBlock})`);

                // Дополнительно: если есть события в текущем блоке — они придут через подписку
            } catch (err) {
                console.error("Ошибка загрузки истории событий:", err);
            }

// 2. Подписка на новые события (остаётся как было)
            contract.on('Transfer', (from, to, value, event) => {
                const li = document.createElement('li');
                li.textContent = `Transfer: ${from.slice(0,6)}... → ${to.slice(0,6)}... : ${ethers.utils.formatUnits(value, 18)} tokens`;
                transferEvents.prepend(li);

                if (from === account || to === account) {
                    updateBalance();
                }
            });

        } else {
            connectButton.textContent = 'Connect Wallet';
            transferButton.disabled = true;
        }
    } catch (err) {
        errorMessage.textContent = `Ошибка: ${err.message}`;
        console.error('Ошибка подключения:', err);
    }
}

// Кнопка подключения
connectButton.addEventListener('click', () => {
    connectWallet(true);
});

// Автоподключение при загрузке
window.addEventListener('load', () => {
    connectWallet(false);
});

// Обработка смены аккаунта / сети
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            account = null;
            accountAddress.textContent = 'Account: Not connected';
            balanceElem.textContent = 'Balance: Not connected';
            transferButton.disabled = true;
            connectButton.textContent = 'Connect Wallet';
            transferEvents.innerHTML = '';
        } else {
            account = accounts[0];
            accountAddress.textContent = `Account: ${account}`;
            connectWallet(false); // переподключаемся
        }
    });

    window.ethereum.on('chainChanged', () => {
        location.reload();
    });
}

// Кнопка перевода
transferButton.addEventListener('click', async () => {
    if (!account || !contract) {
        errorMessage.textContent = 'Сначала подключите кошелёк';
        return;
    }

    try {
        const to = transferTo.value.trim();
        const amountStr = transferAmount.value.trim();

        if (!ethers.utils.isAddress(to)) throw new Error('Неверный адрес получателя');
        if (!amountStr || parseFloat(amountStr) <= 0) throw new Error('Введите сумму больше 0');

        const amount = ethers.utils.parseUnits(amountStr, 18);

        errorMessage.textContent = 'Ожидание подтверждения в MetaMask...';
        const tx = await contract.transfer(to, amount);
        errorMessage.textContent = 'Транзакция отправлена, ждём подтверждения...';

        await tx.wait();
        errorMessage.textContent = 'Перевод успешен!';

        updateBalanceAndInfo();
        transferTo.value = '';
        transferAmount.value = '';

    } catch (err) {
        errorMessage.textContent = `Ошибка: ${err.message || err.reason || 'Неизвестная ошибка'}`;
        console.error(err);
    }
});