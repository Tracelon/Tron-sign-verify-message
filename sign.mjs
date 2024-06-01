import TronWeb from 'tronweb';
import dotenv from 'dotenv';

dotenv.config();

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: process.env.PRIVATE_KEY
});

async function signMessage(message) {
    const signedMessage = await tronWeb.trx.signMessageV2(message);
    return signedMessage;
}

async function main() {
    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey) {
        console.error('Private key not found in .env file');
        return;
    }
    const address = tronWeb.address.fromPrivateKey(privateKey);
    const message = 'Hello, Tron!';

    const signature = await signMessage(message);

    const result = {
        address: address,
        message: message,
        signature: signature
    };

    const formattedResult = JSON.stringify(result, null, 2);
    const singleLineResult = JSON.stringify(result);

    console.log(formattedResult);
    console.log(singleLineResult);
}

main().catch(console.error);
