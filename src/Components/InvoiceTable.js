import React, { useState } from 'react';
import './InvoiceTable.css';

const InvoiceTable = ({ invoiceData, loading, error }) => {

  if (!invoiceData) {
    return (
      <div className="invoice-page">
        <div className="no-data-message">
          Please upload an invoice image to view the data
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Processing invoice...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const getCurrency = () => {
    return invoiceData.summary.find(item => item.label === "Locale")?.value?.currency || 'USD';
  };

  const currency = getCurrency();

  return (
    <div className="invoice-page">
      <div className="invoice-table-container">
        <div className="table-wrapper">
          <div className="invoice-summary">
            <h1>Invoice Summary</h1>
            <div className="summary-grid">
              <div className="summary-section">
                <h2>Invoice Details</h2>
                <p><strong>Invoice Number:</strong> {invoiceData.summary.find(item => item.label === "Invoice Number")?.value || 'N/A'}</p>
                <p><strong>Date:</strong> {invoiceData.summary.find(item => item.label === "Date")?.value || 'N/A'}</p>
                <p><strong>Due Date:</strong> {invoiceData.summary.find(item => item.label === "Due Date")?.value || 'N/A'}</p>
                <p><strong>Document Type:</strong> {invoiceData.summary.find(item => item.label === "Category")?.value || 'N/A'}</p>
              </div>
              
              <div className="summary-section">
                <h2>Customer Information</h2>
                <p><strong>Name:</strong> {invoiceData.summary.find(item => item.label === "Customer Name")?.value || 'N/A'}</p>
                <p><strong>ID:</strong> {invoiceData.summary.find(item => item.label === "Customer Id")?.value || 'N/A'}</p>
                <p><strong>Customer Address:</strong> {invoiceData.summary.find(item => item.label === "Customer Address")?.value || 'N/A'}</p>
                <p><strong>Billing Address:</strong> {invoiceData.summary.find(item => item.label === "Billing Address")?.value || 'N/A'}</p>
              </div>

              <div className="summary-section">
                <h2>Supplier Information</h2>
                <p><strong>Name:</strong> {invoiceData.summary.find(item => item.label === "Supplier Name")?.value || 'N/A'}</p>
                <p><strong>Address:</strong> {invoiceData.summary.find(item => item.label === "Supplier Address")?.value || 'N/A'}</p>
              </div>

              <div className="summary-section">
                <h2>Payment Details</h2>
                <p><strong>Total Net:</strong> {currency} {invoiceData.summary.find(item => item.label === "Total Net")?.value || '0'}</p>
                <p><strong>Total Amount:</strong> {currency} {invoiceData.summary.find(item => item.label === "Total Amount")?.value || '0'}</p>
                <p><strong>Currency:</strong> {currency}</p>
                <p><strong>Payment Date:</strong> {invoiceData.summary.find(item => item.label === "Payment Date")?.value || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div className="invoice-items">
            <h1>Items</h1>
            <table className="invoice-table">
              <thead>
                <tr>
                  {invoiceData.header.map(header => (
                    <th key={header}>{header.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {invoiceData.table.map((row, index) => (
                  <tr key={index}>
                    {Object.keys(row).map((value, cellIndex) => (
                      <td key={cellIndex}>{row[value]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="invoice-totals">
              <table className="totals-table">
                <tbody>
                  <tr>
                    <td>Total Net</td>
                    <td>{currency} {invoiceData.summary.find(item => item.label === "Total Net")?.value || '0'}</td>
                  </tr>
                  <tr>
                    <td>Total Tax</td>
                    <td>{currency} {invoiceData.summary.find(item => item.label === "Total Tax")?.value || '0'}</td>
                  </tr>
                  <tr className="total-amount">
                    <td>Total Amount</td>
                    <td>{currency} {invoiceData.summary.find(item => item.label === "Total Amount")?.value || '0'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;