
async function processInvoiceImage(imageFile) {
  if (!imageFile) throw new Error('No file provided');

  const apiBaseUrl = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/$/, '');
  const url = `${apiBaseUrl}/api/invoice`;

  const formData = new FormData();
  formData.append('file', imageFile, imageFile.name || 'invoice.jpg');

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(text || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Processing Error:', error);
    throw error;
  }
}

export { processInvoiceImage };
