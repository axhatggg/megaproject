// import Web3 from 'web3';

// // Connect to Ganache using the Truffle-config network settings
// const web3 = new Web3('http://127.0.0.1:7545');

// // ABI and deployed contract address (replace with your deployed address)
// import contractData from '../build/contracts/Validators.json'; // Make sure the path is correct
//  // Adjust the path as needed
// const contractABI = contractData.abi;
// const contractAddress = '0x2D3Ba610F5A46d9E45E6fDE535826bffD034250a'; // Replace with your deployed contract address

// const contract = new web3.eth.Contract(contractABI, contractAddress);
// const account = '0xaF86F14725c991643D4466c530BF821041d617Ad'; // Replace with one of your Ganache accounts

// // Function to add credentials
// export const addCredentials = async (addr, name, institution, fileHash) => {
//   try {
//     await contract.methods
//       .addCredentials(addr, name, institution, web3.utils.soliditySha3(fileHash))
//       .send({ from: account, gas: 3000000 });
//     alert('Credentials added successfully.');
//   } catch (error) {
//     alert('Error adding credentials:', error);
//   }
// };

// // Function to retrieve student credentials
// export const getStudent = async (addr, setRetrievedCredentials) => {
//   try {
//     const credentials = await contract.methods.getStudent(addr).call();
//     setRetrievedCredentials(credentials);
//   } catch (error) {
//     alert('Error retrieving student credentials:', error);
//   }
// };
