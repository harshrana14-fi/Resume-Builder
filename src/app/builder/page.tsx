"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import WorkExperienceForm from "@/components/forms/WorkExperienceForm";
import EducationForm from "@/components/forms/EducationForm";
import SkillsForm from "@/components/forms/SkillsForm";
import ResumePreview from "@/components/ResumePreview";
import { generatePDF } from "@/utils/pdfGenerator";
import { ResumeData, PersonalInfo, WorkExperience, Education, Skill } from "@/types/resume";

export default function BuilderPage() {
  const searchParams = useSearchParams();
  const templateId = parseInt(searchParams.get("template") || "1", 10);
  const resumePreviewRef = useRef<HTMLDivElement>(null);
  
  const [activeSection, setActiveSection] = useState("personal");
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      summary: "",
    },
    workExperience: [],
    education: [],
    skills: [],
    templateId: templateId,
  });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Update templateId when URL changes
  useEffect(() => {
    setResumeData(prev => ({
      ...prev,
      templateId: templateId
    }));
  }, [templateId]);

  const updatePersonalInfo = (info: PersonalInfo) => {
    setResumeData({ ...resumeData, personalInfo: info });
  };

  const addWorkExperience = () => {
    const newExperience: WorkExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    };
    setResumeData({
      ...resumeData,
      workExperience: [...resumeData.workExperience, newExperience],
    });
  };

  const updateWorkExperience = (index: number, experience: WorkExperience) => {
    const updatedExperience = [...resumeData.workExperience];
    updatedExperience[index] = experience;
    setResumeData({ ...resumeData, workExperience: updatedExperience });
  };

  const removeWorkExperience = (index: number) => {
    const updatedExperience = [...resumeData.workExperience];
    updatedExperience.splice(index, 1);
    setResumeData({ ...resumeData, workExperience: updatedExperience });
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      description: "",
    };
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
  };

  const updateEducation = (index: number, education: Education) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = education;
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      level: 3,
    };
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill],
    });
  };

  const updateSkill = (index: number, skill: Skill) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = skill;
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills.splice(index, 1);
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const handleDownloadPDF = async () => {
    if (!resumePreviewRef.current) {
      alert("Resume preview not found");
      return;
    }

    setIsGeneratingPDF(true);
    
    try {
      const filename = `${resumeData.personalInfo.firstName}-${resumeData.personalInfo.lastName}-resume.pdf`;
      const result = await generatePDF(resumePreviewRef.current, filename);
      console.log("PDF generation result:", result);
      
      if (!result.success) {
        alert("Error generating PDF. Check the console for details.");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Check the console for details.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
          <p className="mt-2 text-lg text-gray-600">
            Fill in your information to create a professional resume
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex space-x-4 mb-6 border-b">
                <button
                  onClick={() => setActiveSection("personal")}
                  className={`py-2 px-4 font-medium ${
                    activeSection === "personal"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Personal Info
                </button>
                <button
                  onClick={() => setActiveSection("experience")}
                  className={`py-2 px-4 font-medium ${
                    activeSection === "experience"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => setActiveSection("education")}
                  className={`py-2 px-4 font-medium ${
                    activeSection === "education"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveSection("skills")}
                  className={`py-2 px-4 font-medium ${
                    activeSection === "skills"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Skills
                </button>
              </div>

              <div className="mt-6">
                {activeSection === "personal" && (
                  <PersonalInfoForm
                    data={resumeData.personalInfo}
                    onChange={updatePersonalInfo}
                  />
                )}

                {activeSection === "experience" && (
                  <WorkExperienceForm
                    experiences={resumeData.workExperience}
                    onUpdate={updateWorkExperience}
                    onRemove={removeWorkExperience}
                    onAdd={addWorkExperience}
                  />
                )}

                {activeSection === "education" && (
                  <EducationForm
                    educations={resumeData.education}
                    onUpdate={updateEducation}
                    onRemove={removeEducation}
                    onAdd={addEducation}
                  />
                )}

                {activeSection === "skills" && (
                  <SkillsForm
                    skills={resumeData.skills}
                    onUpdate={updateSkill}
                    onRemove={removeSkill}
                    onAdd={addSkill}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-8">
              <div ref={resumePreviewRef}>
                <ResumePreview data={resumeData} />
              </div>
              <div className="mt-6 flex justify-center">
                <button 
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50"
                >
                  {isGeneratingPDF ? "Generating PDF..." : "Download as PDF"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}