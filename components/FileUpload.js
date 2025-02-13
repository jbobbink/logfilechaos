import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onDataProcessed }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewFiles, setPreviewFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Perform file validation here if needed
    setPreviewFiles(acceptedFiles.map(file => file.name));

    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Process file and update data
          onDataProcessed({}); // Replace with actual processing logic
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  }, [onDataProcessed]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        {isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag &amp; drop log and GSC data files here, or click to select files.</p>}
      </div>
      {previewFiles.length > 0 && (
        <div className="preview">
          <h3>Files to be uploaded:</h3>
          <ul>
            {previewFiles.map(fileName => (
              <li key={fileName}>{fileName}</li>
            ))}
          </ul>
        </div>
      )}
      {uploadProgress > 0 && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${uploadProgress}%` }}>
            {uploadProgress}%
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
