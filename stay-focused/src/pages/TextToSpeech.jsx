import React, { useState } from 'react';

const TextToSpeech = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleGenerateSpeech = () => {
    
    //You can place your stuff here guys
    
    console.log('Generating speech for file:', selectedFile.name);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-purple-700 text-white p-8 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Text To Speech</h1>
      <div className="mb-4 flex flex-col items-center">
        <label htmlFor="fileInput" className="bg-purple-500 hover:bg-white text-white hover:text-purple-500 border-2 hover:border-purple-500 font-bold py-2 px-4 rounded-lg cursor-pointer focus:outline-none focus:ring focus:border-purple-500">
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
        className="bg-purple-500 hover:bg-white text-white hover:text-purple-500 border-2 hover:border-purple-500 font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-purple-500"
        onClick={handleGenerateSpeech}
        disabled={!selectedFile}
      >
        Generate Speech
      </button>
    </div>
  );
};

export default TextToSpeech;
