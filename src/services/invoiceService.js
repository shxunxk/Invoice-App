const API_URL = 'YOUR_AI_API_ENDPOINT'; // Replace with your actual API endpoint

export const processInvoiceImage = async (imageData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageData }),
    });

    if (!response.ok) {
      throw new Error('Failed to process invoice');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error processing invoice:', error);
    throw error;
  }
}; 