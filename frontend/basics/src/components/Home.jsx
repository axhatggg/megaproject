import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import axios from 'axios';
// import { addCredentials } from './blockChainUtils';

const Home = () => {
  const [file, setFile] = useState("");
  const [hash, setHash] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false); 


  const [studentAddress, setStudentAddress] = useState("");
  const [studentName, setStudentName] = useState("");
  const [institutionName, setInstitutionName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const fileData = new FormData();
      fileData.append("file", file);

      const responseData = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: fileData,
        headers: {
          pinata_api_key: "89f81cf5bc1d4fb8e1a0",
          pinata_secret_api_key: "5b41afb27d07ef25a3bfa33368a820163ec1a6096c236eca90b23b286656da57",
          "Content-Type": "multipart/form-data",
        },
      });

      const hash = responseData.data.IpfsHash;
      const fileUrl = "https://gateway.pinata.cloud/ipfs/" + hash;
      // addCredentials(studentAddress,studentName,institutionName,fileUrl);
      setHash(hash);
      setFileUrl(fileUrl);
      setCopied(false); 
      setLoading(false); 
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Upload to IPFS</h1>
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleSubmit}>
        {/* New input fields for student address, name, and institution */}
        <div className="mb-4">
          <label htmlFor="studentAddress" className="block text-sm font-medium text-gray-700">Student Address</label>
          <input
            id="studentAddress"
            type="text"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
            value={studentAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
          <input
            id="studentName"
            type="text"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700">Institution Name</label>
          <input
            id="institutionName"
            type="text"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
            required
          />
        </div>

        {/* File input */}
        <div className="mb-4">
          <input
            type="file"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Upload
        </button>
      </form>

      {/* Loading text */}
      {loading && (
        <div className="mt-6 text-gray-700 font-semibold">Uploading and processing file...</div>
      )}

      {/* Display file hash and URL */}
      {hash && !loading && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-80">
          <p className="text-sm text-gray-700">Hash:</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-gray-900 font-mono text-sm truncate w-64">{hash}</span>
            <button
              onClick={handleCopy}
              className={`ml-2 py-1 px-2 text-xs rounded-lg font-medium focus:outline-none ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-sm text-gray-700 mt-4">File URL:</p>
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm truncate block mt-2 hover:underline"
          >
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
