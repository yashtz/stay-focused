import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed

const Summariser = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleGenerateSummary = async () => {
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/generate-summary',
        data: formData,
        responseType: 'blob', // Important for handling the binary response
      });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      // Create a temporary link to download the file
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'summary.txt'); // or extract the filename from the Content-Disposition header
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating summary:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-purple-700 text-white p-8 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Summariser</h1>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="fileInput" className="bg-purple-500 hover:bg-purple-700 text-white border-2 font-bold py-2 px-4 rounded-lg cursor-pointer">
          Choose PDF File
        </label>
        <input
          id="fileInput"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />
        {selectedFile && <p className="mt-2">Selected File: {selectedFile.name}</p>}
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white border-2 font-bold py-2 px-4 rounded-lg"
        onClick={handleGenerateSummary}
        disabled={!selectedFile}
      >
        Generate Summary
      </button>
    </div>
  );
};

export default Summariser;
