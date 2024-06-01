// secp256k1-wrapper.js
import('@noble/secp256k1').then((module) => {
    global.secp256k1 = module;
}).catch((err) => {
    console.error('Failed to load @noble/secp256k1:', err);
});
