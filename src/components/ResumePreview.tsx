"use client";

import { ResumeData } from "@/types/resume";
import ProfessionalTemplate from "@/components/templates/ProfessionalTemplate";
import ModernTemplate from "@/components/templates/ModernTemplate";

interface ResumePreviewProps {
  data: ResumeData;
}

export default function ResumePreview({ data }: ResumePreviewProps) {
  // Render the appropriate template based on the selected templateId
  const renderTemplate = () => {
    switch (data.templateId) {
      case 2:
        return <ModernTemplate data={data} />;
      case 1:
      default:
        return <ProfessionalTemplate data={data} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <div className="border-2 border-dashed border-gray-300 rounded-xl overflow-hidden h-full">
        {renderTemplate()}
      </div>
    </div>
  );
}