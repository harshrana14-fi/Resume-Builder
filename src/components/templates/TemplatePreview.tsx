"use client";

import { ResumeData } from "@/types/resume";
import ProfessionalTemplate from "@/components/templates/ProfessionalTemplate";
import ModernTemplate from "@/components/templates/ModernTemplate";

interface TemplatePreviewProps {
  templateId: number;
  data?: ResumeData;
}

export default function TemplatePreview({ templateId, data }: TemplatePreviewProps) {
  // Sample data for template previews
  const sampleData: ResumeData = data || {
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "(555) 123-4567",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      summary: "Experienced professional with over 5 years of industry experience in software development and project management."
    },
    workExperience: [
      {
        id: "1",
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        startDate: "2020-01",
        endDate: "2023-05",
        currentlyWorking: false,
        description: "Led development of multiple web applications using React and Node.js. Improved application performance by 40%."
      },
      {
        id: "2",
        company: "Innovate Startups",
        position: "Software Engineer",
        startDate: "2018-03",
        endDate: "2019-12",
        currentlyWorking: false,
        description: "Developed customer-facing web applications. Collaborated with UX designers to implement responsive interfaces."
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of Technology",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Science",
        startDate: "2014-09",
        endDate: "2018-05",
        currentlyStudying: false,
        description: "Graduated with honors. Relevant coursework: Data Structures, Algorithms, Database Systems."
      }
    ],
    skills: [
      { id: "1", name: "JavaScript", level: 5 },
      { id: "2", name: "React", level: 5 },
      { id: "3", name: "Node.js", level: 4 },
      { id: "4", name: "TypeScript", level: 4 }
    ],
    templateId: templateId
  };

  // Render the appropriate template based on the selected templateId
  const renderTemplate = () => {
    switch (templateId) {
      case 2:
        return <ModernTemplate data={sampleData} />;
      case 1:
      default:
        return <ProfessionalTemplate data={sampleData} />;
    }
  };

  return (
    <div className="h-80 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="scale-75 origin-top-left w-[133%] h-[133%]">
        {renderTemplate()}
      </div>
    </div>
  );
}