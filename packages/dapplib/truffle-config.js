require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain huge include arctic swift solar'; 
let testAccounts = [
"0x55a13f41c48bb61a32bb25c218aa07e3724abfc35a9b4c385253125c6910b403",
"0x6dd9ccf9a05e01e857dfafba4c247e24ce3b7e94b61a41c1246eb1a594d0fec7",
"0x62ddbce4ce500ee39bbdf336b72d9781cf51987f380a64a47f9ab4ad28cd65ce",
"0x1720af666a339e4a4ef036bf8dd694bba631f75ebee53b35f3ac7e8dae349ccb",
"0xd75a0580488ff1c69092c1be1a678632ae2a75c923cb178eb200cb668f58ee43",
"0x2dd9c8c76d2219ef12a8617a678844709cab5df8bfa20378e8a3ade7414b6e3e",
"0xfb7bd7473edb8f77948dfe2366c839c5547a3830045ed2e7241fcf75a54a4fee",
"0x00fa09dc8f665ee7ee3623facf12c8f46c7508cd35fee58f9c97134d3b8bc760",
"0x9e6bebff5d0098e3fb0ad5425e264075702ace0d54bacf2fad986089baad322a",
"0x8bef080c3fce1f0ced932fdcacd2b906dccd31a3c967186711d7f535a5ce0c5c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

