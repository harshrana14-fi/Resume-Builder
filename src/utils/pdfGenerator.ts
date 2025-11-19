// PDF generation function using html2pdf.js
import html2pdf from 'html2pdf.js';

export const generatePDF = async (element: HTMLElement, filename: string) => {
  const options = {
    margin: 0.5,
    filename: filename,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
  };

  try {
    // Generate the PDF
    await html2pdf().set(options).from(element).save();
    return { success: true, message: `PDF "${filename}" generated successfully` };
  } catch (error) {
    console.error("Error generating PDF:", error);
    return { success: false, message: "Error generating PDF" };
  }
};

export default { generatePDF };