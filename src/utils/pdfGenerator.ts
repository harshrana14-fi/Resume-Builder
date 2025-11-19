// PDF generation function using html2pdf.js
// This function should only be called on the client side

export const generatePDF = async (element: HTMLElement, filename: string) => {
  // Check if we're in the browser environment
  if (typeof window === 'undefined') {
    console.warn('PDF generation is only available in the browser');
    return { success: false, message: "PDF generation is only available in the browser" };
  }

  try {
    // Dynamically import html2pdf.js only on the client side
    const html2pdf = (await import('html2pdf.js')).default;
    
    const options = {
      margin: 0.5,
      filename: filename,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
    };

    // Generate the PDF
    await html2pdf().set(options).from(element).save();
    return { success: true, message: `PDF "${filename}" generated successfully` };
  } catch (error) {
    console.error("Error generating PDF:", error);
    return { success: false, message: "Error generating PDF" };
  }
};

export default { generatePDF };