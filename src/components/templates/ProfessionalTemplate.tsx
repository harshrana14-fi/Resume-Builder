"use client";

import { ResumeData } from "@/types/resume";

interface ProfessionalTemplateProps {
  data: ResumeData;
}

export default function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  return (
    <div className="bg-white p-8 font-serif">
      {/* Header */}
      <div className="text-center pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold text-gray-900">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <div className="mt-2 text-gray-700">
          {data.personalInfo.email} | {data.personalInfo.phone} | {data.personalInfo.city}, {data.personalInfo.state}
        </div>
      </div>

      {/* Professional Summary */}
      {data.personalInfo.summary && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Professional Summary</h2>
          <div className="h-0.5 bg-gray-800 w-16 mt-1"></div>
          <p className="mt-3 text-gray-700">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Work Experience</h2>
          <div className="h-0.5 bg-gray-800 w-16 mt-1"></div>
          <div className="mt-4 space-y-5">
            {data.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-gray-700">
                    {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                  </span>
                </div>
                <div className="text-gray-700 font-italic">{exp.company}</div>
                <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Education</h2>
          <div className="h-0.5 bg-gray-800 w-16 mt-1"></div>
          <div className="mt-4 space-y-4">
            {data.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-gray-700">
                    {edu.startDate} - {edu.currentlyStudying ? "Present" : edu.endDate}
                  </span>
                </div>
                <div className="text-gray-700">{edu.institution}</div>
                <div className="text-gray-700">{edu.fieldOfStudy}</div>
                <p className="mt-1 text-gray-700 whitespace-pre-line">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">Skills</h2>
          <div className="h-0.5 bg-gray-800 w-16 mt-1"></div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}