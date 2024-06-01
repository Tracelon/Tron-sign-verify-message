# Tron Sign and Verify Message

This project provides scripts to sign and verify messages using TronWeb. The scripts are designed to be executed in a Node.js environment.

## Prerequisites

- Node.js (v6 and above)
- npm (Node Package Manager)
- Git

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Tracelon/tron-sign-verify-message.git
   cd tron-sign-verify-message

2. **Install Dependencies**:
    Install the required Node.js packages:
   ```bash
    npm install

3. **Environment Variables (optional)**:
    You only need to follow this step if you want to sign a message with your Tron address.
    Please note that manipulating a private key has security concerns, and if not done properly, it might compromise your address.
    For those interested in signature verification only, this step can be skipped.
    
    Create a .env file in the root directory of the project and add your private key:
   ```bash
    PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE

## Usage

### Signing a Message

To sign a message, run the sign.mjs script. This script will output the address, message, and signature in JSON format.

1. **Run the Sign Script**:
   ```bash
   node sign.mjs

2. **Output**:
    The script will output the signed message in both formatted and single-line JSON formats. For example:
   ```json
    {
        "address": "T...",
        "message": "Hello, Tron!",
        "signature": "..."
    }
    {"address":"T...","message":"Hello, Tron!","signature":"..."}

### Verify a Message

To verify a message, run the verify.mjs script. This script will prompt you to paste the JSON output from the sign.mjs script.

1. **Run the Verify Script**:
   ```bash
   node verify.mjs

2. **Input**:
    When prompted, paste the JSON output (single-line format) from the sign.mjs script and press enter. For example:
   ```bash
    Please enter the JSON:
    {"address":"T...","message":"Hello, Tron!","signature":"..."}

3. **Output**:
    The script will verify the signature and indicate whether the signature is valid or not:
   ```bash
    Recovered Address: T...
    Is the signature valid? true

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## Contact

If you have any questions or issues, please open an issue on GitHub.


