import React, { useState } from 'react';
import './App.css';
import ImageUpload from './Components/ImageUpload';
import InvoiceTable from './Components/InvoiceTable';

function App() {
  const [currentPage, setCurrentPage] = useState('upload');
  const [uploadedImage, setUploadedImage] = useState(null);

  return (
    <div className="App">
      <nav className='navbar'>
        <ul>
          <li>
            <button 
              className={`nav-button ${currentPage === 'upload' ? 'active' : ''}`}
              onClick={() => setCurrentPage('upload')}
            >
              Upload Image
            </button>
          </li>
          <li>
            <button 
              className={`nav-button ${currentPage === 'invoices' ? 'active' : ''}`}
              onClick={() => setCurrentPage('invoices')}
            >
              Invoices
            </button>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <ImageUpload/>
        <InvoiceTable/>
      </main>
    </div>
  );
}

export default App;

