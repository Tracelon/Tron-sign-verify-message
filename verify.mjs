import TronWeb from 'tronweb';
import readline from 'readline';

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

async function verifyMessage(message, signature) {
    const base58Address = await tronWeb.trx.verifyMessageV2(message, signature);
    return base58Address;
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter the JSON: ', async (input) => {
        rl.close();
        let data;
        try {
            data = JSON.parse(input);
        } catch (error) {
            console.error('Invalid JSON input');
            return;
        }

        const { address, message, signature } = data;

        if (!address || !message || !signature) {
            console.error('JSON input must include address, message, and signature');
            return;
        }

        const recoveredAddress = await verifyMessage(message, signature);
        console.log(`Recovered Address: ${recoveredAddress}`);
        console.log(`Is the signature valid? ${recoveredAddress === address}`);
    });
}

main().catch(console.error);
