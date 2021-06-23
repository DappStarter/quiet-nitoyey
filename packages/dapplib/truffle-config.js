require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe street cruise spider upset grace sister army gather'; 
let testAccounts = [
"0x08d2bea4aad21be8c182b24cc09d2f616a3547cdcf8ecf735c17d44f1ab258d6",
"0xc1b1175c1a84a8bb21aa28fd94a93bea8d6ca971e8686830daeb6ea8b6138890",
"0xd8f8541fb57fcee433e78a71edf7f3def1e1d9454bc4941e7cf4dcbae026d0b4",
"0x12887d6036b4d1b998cd2daced3ca59f10ea18ccbd020ba7d3ef252080f40483",
"0x246475ba454a5fcac53ff53926d7bfbc970b2b65c62bef1a5ad327ca51ea44e4",
"0x98e568356e097db3063b9b7edc4afb45b5669d027bf27a5022d259bde7b8b329",
"0x6b374a407da6d48de23f22cc2a2f8f1777c9cec4de3c14906ddc1bd444805994",
"0xf07b5732c7b6105f88ba7aa1deaddcc46371e8ac00a0b5b63f684f61ede86924",
"0xbe1a6c0e799efb23ab322afc4653cc6fb58454bb9885435002f167690e41453a",
"0x1a5992c97fef05e4faa74a6ba325b4b7d5c1aa36e9849f5e1794c4007d006b63"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

