import React, { useState } from 'react';
import './App.css';
import ImageUpload from './Components/ImageUpload';
import InvoiceTable from './Components/InvoiceTable';
import { processInvoiceImage } from './services/invoiceService';

function App() {

  const [currentPage, setCurrentPage] = useState('upload');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const structureData = (data) => {
    if (!data?.line_items || data.line_items.length === 0) {
      return { summary: [], table: [], header: [] };
    }

    const ignoreKeys = [
      'line_items'
    ];
  
    const summary = Object.entries(data)
      .filter(([key]) => !ignoreKeys.includes(key))
      .map(([key, value]) => {
        console.log(key, value)
        const displayValue = value?.value ?? null;
        return {
          label: key.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
          value: displayValue
        };
      })
  
    const table = data.line_items;

    const header = Object.keys(data.line_items[0]).filter(
      key => data.line_items[0][key] != null && key !== 'confidence' && key !== 'polygon' && key !== 'page_id'
    );
  
    const filteredTable = table.map(item =>
      Object.fromEntries(
        Object.entries(item).filter(
          ([key, value]) => header.includes(key)
        )
      )
    );
  
    return { summary, table: filteredTable, header };
  };  

  const handleImageUpload = async (imageFile) => {
    try {
      setLoading(true);
      setError('');
      setUploadedImage(URL.createObjectURL(imageFile));
  
      const processedData = await processInvoiceImage(imageFile);

      console.log(processedData)

      setInvoiceData(structureData(processedData?.document?.inference?.prediction));

      setCurrentPage('invoice')
    } catch (err) {
      setError('Failed to process invoice image');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(invoiceData)

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
        </ul>
      </nav>



      <main className="main-content">
        {currentPage === 'upload' ? (
          <ImageUpload 
            onImageUpload={handleImageUpload}
            loading={loading}
            error={error}
          />
        ) : (
          <InvoiceTable 
            invoiceData={invoiceData}
            loading={loading}
            error={error}
          />
        )}
      </main>



    </div>
  );
}

export default App;