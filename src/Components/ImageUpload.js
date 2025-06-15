import React, { useState, useCallback } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onImageUpload, loading, error }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    setLocalError('');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    } else {
      setLocalError('Please upload a valid image file (JPG, PNG, or GIF)');
    }
  }, []);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        handleImageUpload(file);
        setLocalError('');
      } else {
        setLocalError('Please upload a valid image file (JPG, PNG, or GIF)');
      }
    }
  }, []);

  const handleImageUpload = (file) => {
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setLocalError('File size should be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
      if (onImageUpload) {
        onImageUpload(e.target.result);
      }
    };
    reader.onerror = () => {
      setLocalError('Error reading the file');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-upload-page">
      <h2>Upload Invoice Image</h2>
      <div 
        className={`image-upload-container ${isDragging ? 'dragging' : ''} ${loading ? 'loading' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Processing image...</p>
          </div>
        ) : selectedImage ? (
          <div className="image-preview">
            <img src={selectedImage} alt="Preview" />
            <div className="preview-actions">
              <button 
                className="remove-image"
                onClick={() => {
                  setSelectedImage(null);
                  setLocalError('');
                }}
                disabled={loading}
              >
                Remove Image
              </button>
            </div>
          </div>
        ) : (
          <div className="upload-area">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              id="file-input"
              className="file-input"
              disabled={loading}
            />
            <label htmlFor="file-input" className="upload-label">
              <div className="upload-content">
                <i className="upload-icon">📃</i>
                <p>Drag and drop an image here or click to select</p>
                <p className="upload-hint">Supports: JPG, PNG, GIF (Max 5MB)</p>
              </div>
            </label>
          </div>
        )}
      </div>
      {(error || localError) && (
        <p className="error-message">{error || localError}</p>
      )}
    </div>
  );
};

export default ImageUpload; 