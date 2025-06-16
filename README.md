# Invoice Processing Application

A modern web application for processing and displaying invoice data extracted from images. This application provides a clean and intuitive interface for viewing invoice details, customer information, and payment summaries.

## Features

- **Invoice Data Extraction**: Process invoice images to extract key information
- **Comprehensive Summary View**: Display detailed invoice information including:
  - Invoice Details (number, date, due date, document type)
  - Customer Information (name, ID, address)
  - Supplier Information (name, address)
  - Payment Details (totals, currency, payment date)
- **Itemized List**: View detailed line items with descriptions, quantities, and prices
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and professional interface with intuitive navigation

## Technical Stack

- **Frontend**: React.js
- **Styling**: CSS3 with modern features
- **Data Processing**: Custom invoice data extraction and processing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd invoice-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
invoice-app/
├── src/
│   ├── Components/
│   │   ├── InvoiceTable.js      # Main invoice display component
│   │   └── InvoiceTable.css     # Styling for invoice display
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
└── package.json
```

## Usage

1. Upload an invoice image through the application interface
2. The system will process the image and extract relevant information
3. View the processed invoice data in a structured format:
   - Summary section with key invoice details
   - Itemized list of products/services
   - Payment summary with totals

## Data Structure

The application processes invoice data in the following format:

```javascript
{
  summary: [
    {
      label: string,
      value: string | number | object
    }
  ],
  table: [
    {
      description: string,
      quantity: number,
      total_amount: number,
      unit_price: number
    }
  ],
  header: string[]
}
```

## Styling

The application uses modern CSS features including:
- CSS Grid for layout
- Flexbox for alignment
- CSS Variables for theming
- Responsive design patterns
- Modern box-shadow and border-radius properties

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js community for the excellent documentation and support
- Contributors and maintainers of the project 