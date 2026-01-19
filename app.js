const CONTRACT_ADDRESS = '0xb5465ED8EcD4F79dD4BE10A7C8e7a50664e5eeEB'; // ← замени на свой
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
alert(CONTRACT_ADDRESS)
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

// Функция обновления баланса
async function updateBalance() {
    if (!contract || !account) return;
    try {
        const bal = await contract.balanceOf(account);
        balanceElem.textContent = `Balance: ${ethers.utils.formatUnits(bal, 18)} tokens`;
    } catch (err) {
        console.error("Ошибка при обновлении баланса:", err);
        balanceElem.textContent = "Ошибка загрузки баланса";
    }
}

// Функция подключения и инициализации
async function connectWallet(askPermission = false) {
    try {
        if (!window.ethereum) {
            console.log('MetaMask не обнаружен');
            throw new Error('MetaMask не установлен');
        }

        console.log('MetaMask обнаружен, создаём провайдер...');
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();

        let accounts;

        if (askPermission) {
            console.log('Запрашиваем разрешение на аккаунты...');
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        } else {
            console.log('Проверяем существующие аккаунты...');
            accounts = await window.ethereum.request({ method: 'eth_accounts' });
        }

        console.log('Полученные аккаунты:', accounts);

        if (accounts && accounts.length > 0) {
            account = accounts[0];
            accountAddress.textContent = `Account: ${account}`;
            console.log('Аккаунт получен:', account);

            contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
            console.log('Контракт инициализирован');

            await updateBalance();
            transferButton.disabled = false;

            // Подписываемся на события Transfer
            contract.on('Transfer', (from, to, value) => {
                const li = document.createElement('li');
                li.textContent = `Transfer: ${from.slice(0,6)}... → ${to.slice(0,6)}... : ${ethers.utils.formatUnits(value, 18)} tokens`;
                transferEvents.prepend(li);
                if (from === account || to === account) {
                    updateBalance();
                }
            });

            errorMessage.textContent = '';
        } else {
            console.log('Нет доступных аккаунтов');
            connectButton.textContent = 'Connect Wallet';
            transferButton.disabled = true;
        }
    } catch (err) {
        errorMessage.textContent = `Ошибка: ${err.message}`;
        console.error('Ошибка в connectWallet:', err);
    }
}

// Кнопка Connect Wallet
connectButton.addEventListener('click', () => {
    connectWallet(true); // с запросом разрешения
});

// Автоматическое подключение при загрузке страницы
window.addEventListener('load', () => {
    connectWallet(false); // без запроса, проверяем только существующий доступ
});

// Обработка смены аккаунта и сети
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            // Пользователь отключил кошелёк
            account = null;
            accountAddress.textContent = 'Account: Not connected';
            balanceElem.textContent = 'Balance: Not connected';
            transferButton.disabled = true;
            connectButton.textContent = 'Connect Wallet';
        } else {
            account = accounts[0];
            accountAddress.textContent = `Account: ${account}`;
            updateBalance();
        }
    });

    window.ethereum.on('chainChanged', () => {
        location.reload(); // проще всего — перезагрузка при смене сети
    });
}

// Кнопка Transfer
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
        updateBalance();

        transferTo.value = '';
        transferAmount.value = '';
    } catch (err) {
        errorMessage.textContent = `Ошибка: ${err.message || err.reason || 'Неизвестная ошибка'}`;
        console.error(err);
    }
});