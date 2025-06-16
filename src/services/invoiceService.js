
async function processInvoiceImage(imageFile) {
const MINDEE_API_KEY = ;

  console.log(MINDEE_API_KEY)
  if (!MINDEE_API_KEY) throw new Error("Missing Mindee API key");
  if (!imageFile) throw new Error("No file provided");

  const formData = new FormData();
  // Mindee expects field name 'document'
  formData.append('document', imageFile, imageFile.name || 'invoice.jpg');

  try {
    const formData = new FormData();

    formData.append('document', imageFile, imageFile.name || 'invoice.jpg');

    const response = await fetch(
      'https://api.mindee.net/v1/products/mindee/invoices/v4/predict',
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${MINDEE_API_KEY}`,
        },
        body: formData,
      }
    );

  //   const response = {
  //     "extras": {},
  //     "finished_at": "2025-06-16T04:22:37.947381",
  //     "is_rotation_applied": true,
  //     "pages": [
  //         {
  //             "extras": {},
  //             "id": 0,
  //             "orientation": {"value": 0},
  //             "prediction": {
  //                 "billing_address": {
  //                     "address_complement": null,
  //                     "city": "Aucland",
  //                     "confidence": 0.99,
  //                     "country": "New Zealand",
  //                     "po_box": null,
  //                     "polygon": [
  //                         [0.037, 0.306],
  //                         [0.162, 0.306],
  //                         [0.162, 0.354],
  //                         [0.037, 0.354]
  //                     ],
  //                     "postal_code": "1060",
  //                     "state": null,
  //                     "street_name": "Hamlin Road",
  //                     "street_number": "75",
  //                     "value": "75 Hamlin Road Aucland 1060 New Zealand"
  //                 },
  //                 "category": {
  //                     "confidence": 0.96,
  //                     "value": "software"
  //                 },
  //                 "customer_address": {
  //                     "address_complement": null,
  //                     "city": "Aucland",
  //                     "confidence": 0.99,
  //                     "country": "New Zealand",
  //                     "po_box": null,
  //                     "polygon": [
  //                         [0.037, 0.306],
  //                         [0.162, 0.306],
  //                         [0.162, 0.354],
  //                         [0.037, 0.354]
  //                     ],
  //                     "postal_code": "1060",
  //                     "state": null,
  //                     "street_name": "Hamlin Road",
  //                     "street_number": "75",
  //                     "value": "75 Hamlin Road Aucland 1060 New Zealand"
  //                 },
  //                 "customer_company_registrations": [],
  //                 "customer_id": {
  //                     "confidence": 0,
  //                     "polygon": [],
  //                     "value": null
  //                 },
  //                 "customer_name": {
  //                     "confidence": 0.99,
  //                     "polygon": [
  //                         [0.039, 0.289],
  //                         [0.18, 0.289],
  //                         [0.18, 0.304],
  //                         [0.039, 0.304]
  //                     ],
  //                     "raw_value": "Your client's name",
  //                     "value": "YOUR CLIENT'S NAME"
  //                 },
  //                 "date": {
  //                     "confidence": 0.99,
  //                     "polygon": [
  //                         [0.285, 0.394],
  //                         [0.405, 0.394],
  //                         [0.405, 0.412],
  //                         [0.285, 0.412]
  //                     ],
  //                     "value": "2022-06-30"
  //                 },
  //                 "document_type": {
  //                     "value": "INVOICE"
  //                 },
  //                 "document_type_extended": {
  //                     "confidence": 1,
  //                     "value": "INVOICE"
  //                 },
  //                 "due_date": {
  //                     "confidence": 0.99,
  //                     "is_computed": false,
  //                     "polygon": [
  //                         [0.451, 0.392],
  //                         [0.569, 0.392],
  //                         [0.569, 0.41],
  //                         [0.451, 0.41]
  //                     ],
  //                     "value": "2022-07-14"
  //                 },
  //                 "invoice_number": {
  //                     "confidence": 0.99,
  //                     "polygon": [
  //                         [0.038, 0.394],
  //                         [0.126, 0.394],
  //                         [0.126, 0.411],
  //                         [0.038, 0.411]
  //                     ],
  //                     "value": "2022006"
  //                 },
  //                 "line_items": [
  //                     {
  //                         "confidence": 0.99,
  //                         "description": "Sample Service",
  //                         "polygon": [
  //                             [
  //                                 0.037,
  //                                 0.461
  //                             ],
  //                             [
  //                                 0.926,
  //                                 0.461
  //                             ],
  //                             [
  //                                 0.926,
  //                                 0.482
  //                             ],
  //                             [
  //                                 0.037,
  //                                 0.482
  //                             ]
  //                         ],
  //                         "product_code": null,
  //                         "quantity": 1,
  //                         "tax_amount": null,
  //                         "tax_rate": null,
  //                         "total_amount": 100,
  //                         "unit_measure": null,
  //                         "unit_price": 100
  //                     }
  //                 ],
  //                 "locale": {
  //                     "confidence": 0.86,
  //                     "country": null,
  //                     "currency": "NZD",
  //                     "language": "en",
  //                     "value": null
  //                 },
  //                 "orientation": {
  //                     "confidence": 0.99,
  //                     "degrees": 0
  //                 },
  //                 "payment_date": {
  //                     "confidence": 0.99,
  //                     "polygon": [
  //                         [0.451, 0.392],
  //                         [0.569, 0.392],
  //                         [0.569, 0.41],
  //                         [0.451, 0.41]
  //                     ],
  //                     "value": "2022-07-14"
  //                 },
  //                 "po_number": {
  //                     "confidence": 0,
  //                     "polygon": [],
  //                     "value": null
  //                 },
  //                 "reference_numbers": [
  //                     {
  //                         "confidence": 0.99,
  //                         "polygon": [
  //                             [
  //                                 0.857,
  //                                 0.34
  //                             ],
  //                             [
  //                                 0.926,
  //                                 0.34
  //                             ],
  //                             [
  //                                 0.926,
  //                                 0.353
  //                             ],
  //                             [
  //                                 0.857,
  //                                 0.353
  //                             ]
  //                         ],
  //                         "value": "2022006"
  //                     }
  //                 ],
  //                 "shipping_address": {
  //                     "address_complement": null,
  //                     "city": null,
  //                     "confidence": 0,
  //                     "country": null,
  //                     "po_box": null,
  //                     "polygon": [],
  //                     "postal_code": null,
  //                     "state": null,
  //                     "street_name": null,
  //                     "street_number": null,
  //                     "value": null
  //                 },
  //                 "subcategory": {
  //                     "confidence": 0.96,
  //                     "value": null
  //                 },
  //                 "supplier_address": {
  //                     "address_complement": null,
  //                     "city": "Auckland",
  //                     "confidence": 0.99,
  //                     "country": "New Zealand",
  //                     "po_box": null,
  //                     "polygon": [
  //                         [0.033, 0.925],
  //                         [0.175, 0.925],
  //                         [0.175, 0.972],
  //                         [0.033, 0.972]
  //                     ],
  //                     "postal_code": "1061",
  //                     "state": null,
  //                     "street_name": "Industry Road",
  //                     "street_number": "126",
  //                     "value": "126 Industry Road Auckland 1061 New Zealand"
  //                 },
  //                 "supplier_company_registrations": [],
  //                 "supplier_email": {
  //                     "confidence": 0,
  //                     "polygon": [],
  //                     "value": null
  //                 },
  //                 "supplier_name": {
  //                     "confidence": 0.98,
  //                     "polygon": [
  //                         [0.801, 0.107],
  //                         [0.922, 0.107],
  //                         [0.922, 0.153],
  //                         [0.801, 0.153]
  //                     ],
  //                     "raw_value": "Garden repairs",
  //                     "value": "GARDEN REPAIRS"
  //                 },
  //                 "supplier_payment_details": [],
  //                 "supplier_phone_number": {
  //                     "confidence": 0,
  //                     "polygon": [],
  //                     "value": null
  //                 },
  //                 "supplier_website": {
  //                     "confidence": 0,
  //                     "polygon": [],
  //                     "value": null
  //                 },
  //                 "taxes": [],
  //                 "total_amount": {
  //                     "confidence": 0.99,
  //                     "polygon": [
  //                         [0.859, 0.492],
  //                         [0.928, 0.492],
  //                         [0.928, 0.509],
  //                         [0.859, 0.509]
  //                     ],
  //                     "value": 100
  //                 },
  //                 "total_net": {
  //                     "confidence": 0.99,
  //                     "polygon": [
  //                         [0.861, 0.489],
  //                         [0.93, 0.489],
  //                         [0.93, 0.51],
  //                         [0.861, 0.51]
  //                     ],
  //                     "value": 100
  //                 },
  //                 "total_tax": {
  //                     "confidence": 0,
  //                     "polygon": [],
  //                     "value": null
  //                 }
  //             }
  //         }
  //     ],
  //     "prediction": {
  //         "billing_address": {
  //             "address_complement": null,
  //             "city": "Aucland",
  //             "confidence": 0.99,
  //             "country": "New Zealand",
  //             "page_id": 0,
  //             "po_box": null,
  //             "polygon": [
  //                 [0.037, 0.306],
  //                 [0.162, 0.306],
  //                 [0.162, 0.354],
  //                 [0.037, 0.354]
  //             ],
  //             "postal_code": "1060",
  //             "state": null,
  //             "street_name": "Hamlin Road",
  //             "street_number": "75",
  //             "value": "75 Hamlin Road Aucland 1060 New Zealand"
  //         },
  //         "category": {
  //             "confidence": 0.96,
  //             "value": "software"
  //         },
  //         "customer_address": {
  //             "address_complement": null,
  //             "city": "Aucland",
  //             "confidence": 0.99,
  //             "country": "New Zealand",
  //             "page_id": 0,
  //             "po_box": null,
  //             "polygon": [
  //                 [0.037, 0.306],
  //                 [0.162, 0.306],
  //                 [0.162, 0.354],
  //                 [0.037, 0.354]
  //             ],
  //             "postal_code": "1060",
  //             "state": null,
  //             "street_name": "Hamlin Road",
  //             "street_number": "75",
  //             "value": "75 Hamlin Road Aucland 1060 New Zealand"
  //         },
  //         "customer_company_registrations": [],
  //         "customer_id": {
  //             "confidence": 0,
  //             "page_id": null,
  //             "polygon": [],
  //             "value": null
  //         },
  //         "customer_name": {
  //             "confidence": 0.99,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.039, 0.289],
  //                 [0.18, 0.289],
  //                 [0.18, 0.304],
  //                 [0.039, 0.304]
  //             ],
  //             "raw_value": "Your client's name",
  //             "value": "YOUR CLIENT'S NAME"
  //         },
  //         "date": {
  //             "confidence": 0.99,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.285, 0.394],
  //                 [0.405, 0.394],
  //                 [0.405, 0.412],
  //                 [0.285, 0.412]
  //             ],
  //             "value": "2022-06-30"
  //         },
  //         "document_type": {
  //             "value": "INVOICE"
  //         },
  //         "document_type_extended": {
  //             "confidence": 1,
  //             "value": "INVOICE"
  //         },
  //         "due_date": {
  //             "confidence": 0.99,
  //             "is_computed": false,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.451, 0.392],
  //                 [0.569, 0.392],
  //                 [0.569, 0.41],
  //                 [0.451, 0.41]
  //             ],
  //             "value": "2022-07-14"
  //         },
  //         "invoice_number": {
  //             "confidence": 0.99,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.038, 0.394],
  //                 [0.126, 0.394],
  //                 [0.126, 0.411],
  //                 [0.038, 0.411]
  //             ],
  //             "value": "2022006"
  //         },
  //         "line_items": [
  //             {
  //                 "confidence": 0.99,
  //                 "description": "Sample Service",
  //                 "page_id": 0,
  //                 "polygon": [
  //                     [0.037, 0.461],
  //                     [0.926, 0.461],
  //                     [0.926, 0.482],
  //                     [0.037, 0.482]
  //                 ],
  //                 "product_code": null,
  //                 "quantity": 1,
  //                 "tax_amount": null,
  //                 "tax_rate": null,
  //                 "total_amount": 100,
  //                 "unit_measure": null,
  //                 "unit_price": 100
  //             }
  //         ],
  //         "locale": {
  //             "confidence": 0.86,
  //             "country": null,
  //             "currency": "NZD",
  //             "language": "en",
  //             "value": null
  //         },
  //         "payment_date": {
  //             "confidence": 0.99,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.451, 0.392],
  //                 [0.569, 0.392],
  //                 [0.569, 0.41],
  //                 [0.451, 0.41]
  //             ],
  //             "value": "2022-07-14"
  //         },
  //         "po_number": {
  //             "confidence": 0,
  //             "page_id": null,
  //             "polygon": [],
  //             "value": null
  //         },
  //         "reference_numbers": [
  //             {
  //                 "confidence": 0.99,
  //                 "page_id": 0,
  //                 "polygon": [
  //                     [0.857, 0.34],
  //                     [0.926, 0.34],
  //                     [0.926, 0.353],
  //                     [0.857, 0.353]
  //                 ],
  //                 "value": "2022006"
  //             }
  //         ],
  //         "shipping_address": {
  //             "address_complement": null,
  //             "city": null,
  //             "confidence": 0,
  //             "country": null,
  //             "page_id": null,
  //             "po_box": null,
  //             "polygon": [],
  //             "postal_code": null,
  //             "state": null,
  //             "street_name": null,
  //             "street_number": null,
  //             "value": null
  //         },
  //         "subcategory": {
  //             "confidence": 0.96,
  //             "value": null
  //         },
  //         "supplier_address": {
  //             "address_complement": null,
  //             "city": "Auckland",
  //             "confidence": 0.99,
  //             "country": "New Zealand",
  //             "page_id": 0,
  //             "po_box": null,
  //             "polygon": [
  //                 [0.033, 0.925],
  //                 [0.175, 0.925],
  //                 [0.175, 0.972],
  //                 [0.033, 0.972]
  //             ],
  //             "postal_code": "1061",
  //             "state": null,
  //             "street_name": "Industry Road",
  //             "street_number": "126",
  //             "value": "126 Industry Road Auckland 1061 New Zealand"
  //         },
  //         "supplier_company_registrations": [],
  //         "supplier_email": {
  //             "confidence": 0,
  //             "page_id": null,
  //             "polygon": [],
  //             "value": null
  //         },
  //         "supplier_name": {
  //             "confidence": 0.98,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.801, 0.107],
  //                 [0.922, 0.107],
  //                 [0.922, 0.153],
  //                 [0.801, 0.153]
  //             ],
  //             "raw_value": "Garden repairs",
  //             "value": "GARDEN REPAIRS"
  //         },
  //         "supplier_payment_details": [],
  //         "supplier_phone_number": {
  //             "confidence": 0,
  //             "page_id": null,
  //             "polygon": [],
  //             "value": null
  //         },
  //         "supplier_website": {
  //             "confidence": 0,
  //             "page_id": null,
  //             "polygon": [],
  //             "value": null
  //         },
  //         "taxes": [],
  //         "total_amount": {
  //             "confidence": 0.99,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.859, 0.492],
  //                 [0.928, 0.492],
  //                 [0.928, 0.509],
  //                 [0.859, 0.509]
  //             ],
  //             "value": 100
  //         },
  //         "total_net": {
  //             "confidence": 0.99,
  //             "page_id": 0,
  //             "polygon": [
  //                 [0.861, 0.489],
  //                 [0.93, 0.489],
  //                 [0.93, 0.51],
  //                 [0.861, 0.51]
  //             ],
  //             "value": 100
  //         },
  //         "total_tax": {
  //             "confidence": 0,
  //             "page_id": 0,
  //             "polygon": [],
  //             "value": null
  //         }
  //     },
  //     "processing_time": 0.609,
  //     "product": {
  //         "features": [
  //             "locale",
  //             "invoice_number",
  //             "po_number",
  //             "reference_numbers",
  //             "date",
  //             "due_date",
  //             "payment_date",
  //             "total_net",
  //             "total_amount",
  //             "total_tax",
  //             "taxes",
  //             "supplier_payment_details",
  //             "supplier_name",
  //             "supplier_company_registrations",
  //             "supplier_address",
  //             "supplier_phone_number",
  //             "supplier_website",
  //             "supplier_email",
  //             "customer_name",
  //             "customer_company_registrations",
  //             "customer_address",
  //             "customer_id",
  //             "shipping_address",
  //             "billing_address",
  //             "document_type",
  //             "document_type_extended",
  //             "subcategory",
  //             "category",
  //             "orientation",
  //             "line_items"
  //         ],
  //         "name": "mindee/invoices",
  //         "type": "standard",
  //         "version": "4.11"
  //     },
  //     "started_at": "2025-06-16T04:22:37.338669"
  // }

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    console.log(response)
    return await response.json();
    
  } catch (error) {
    console.error('Processing Error:', error);
    throw error;
  }
}

export { processInvoiceImage };
