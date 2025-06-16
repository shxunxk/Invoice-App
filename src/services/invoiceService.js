
async function processInvoiceImage(imageFile) {
const MINDEE_API_KEY = process.env.REACT_APP_MINDEE_API_KEY;

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

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
    
  } catch (error) {
    console.error('Processing Error:', error);
    throw error;
  }
}

export { processInvoiceImage };
