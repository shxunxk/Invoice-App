import React, { useState, useEffect } from 'react';
import './InvoiceTable.css';

const InvoiceTable = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Simulated API call to get invoices
  useEffect(() => {
    // This would be replaced with your actual API call
    const fetchInvoices = async () => {
      try {
        setLoading(true);
        // Simulate API call
        const response = await new Promise(resolve => 
          setTimeout(() => resolve({
            data: [
              { id: 1, date: '2024-03-20', customer: 'John Doe', amount: 1500.00, status: 'Paid' },
              { id: 2, date: '2024-03-19', customer: 'Jane Smith', amount: 2300.50, status: 'Pending' },
              { id: 3, date: '2024-03-18', customer: 'Bob Johnson', amount: 950.75, status: 'Overdue' },
            ]
          }), 1000)
        );
        setInvoices(response.data);
      } catch (err) {
        setError('Failed to fetch invoices');
      } finally {
        setLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInvoices = invoices.filter(invoice => 
    invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.id.toString().includes(searchTerm) ||
    invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading invoices...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="invoice-page">
      
      <div className="invoice-table-container">
        <div className="table-controls">
          <input 
            type="text" 
            placeholder="Search invoices..." 
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="add-invoice-btn">Add New Invoice</button>
        </div>
        <div className="table-wrapper">
          <table className="invoice-table">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>#{invoice.id}</td>
                  <td>{invoice.date}</td>
                  <td>{invoice.customer}</td>
                  <td>${invoice.amount.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge ${invoice.status.toLowerCase()}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn view">View</button>
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable; 