"use client";

import { ResumeData } from "@/types/resume";

interface ModernTemplateProps {
  data: ResumeData;
}

export default function ModernTemplate({ data }: ModernTemplateProps) {
  return (
    <div className="bg-white p-8 font-sans">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Personal Info & Skills */}
        <div className="col-span-1 bg-gray-100 p-6 rounded-lg">
          {/* Personal Info */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {data.personalInfo.firstName} {data.personalInfo.lastName}
            </h1>
            <div className="mt-2 text-gray-700 text-sm">
              <div>{data.personalInfo.email}</div>
              <div>{data.personalInfo.phone}</div>
              <div>{data.personalInfo.city}, {data.personalInfo.state}</div>
            </div>
          </div>

          {/* Skills */}
          {data.skills.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase border-l-4 border-blue-500 pl-2">Skills</h2>
              <div className="mt-3 space-y-2">
                {data.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-700">{skill.level}/5</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-blue-600 h-1.5 rounded-full" 
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education (in sidebar) */}
          {data.education.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-900 uppercase border-l-4 border-blue-500 pl-2">Education</h2>
              <div className="mt-3 space-y-4">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <div className="text-gray-700 text-sm">{edu.institution}</div>
                    <div className="text-gray-700 text-sm">
                      {edu.startDate} - {edu.currentlyStudying ? "Present" : edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Summary & Experience */}
        <div className="col-span-2">
          {/* Professional Summary */}
          {data.personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 uppercase border-l-4 border-blue-500 pl-2">Professional Summary</h2>
              <p className="mt-3 text-gray-700">{data.personalInfo.summary}</p>
            </div>
          )}

          {/* Work Experience */}
          {data.workExperience.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase border-l-4 border-blue-500 pl-2">Work Experience</h2>
              <div className="mt-4 space-y-5">
                {data.workExperience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between">
                      <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                      <span className="text-gray-700 text-sm">
                        {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <div className="text-gray-700 font-medium">{exp.company}</div>
                    <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}