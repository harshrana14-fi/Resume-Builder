"use client";

import Link from "next/link";
import TemplatePreview from "@/components/templates/TemplatePreview";

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "Professional",
      description: "A clean, professional design suitable for most industries",
    },
    {
      id: 2,
      name: "Modern",
      description: "A contemporary design with bold typography and layout",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Resume Template
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Select from our professionally designed templates to create your perfect resume
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <TemplatePreview templateId={template.id} />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
                <p className="mt-2 text-gray-500">{template.description}</p>
                <div className="mt-4">
                  <Link
                    href={`/builder?template=${template.id}`}
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Use Template
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}