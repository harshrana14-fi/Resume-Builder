"use client";

import { Education } from "@/types/resume";

interface EducationFormProps {
  educations: Education[];
  onUpdate: (index: number, education: Education) => void;
  onRemove: (index: number) => void;
  onAdd: () => void;
}

export default function EducationForm({
  educations,
  onUpdate,
  onRemove,
  onAdd,
}: EducationFormProps) {
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    const updatedEducation = { ...educations[index] };
    
    if (name === "currentlyStudying") {
      updatedEducation.currentlyStudying = checked || false;
    } else {
      (updatedEducation as any)[name] = value;
    }
    
    onUpdate(index, updatedEducation);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Education</h2>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Education
        </button>
      </div>

      {educations.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No education added yet</p>
          <button
            type="button"
            onClick={onAdd}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Your First Education
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {educations.map((education, index) => (
            <div key={education.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="text-md font-medium text-gray-900">Education {index + 1}</h3>
                {educations.length > 1 && (
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor={`institution-${index}`} className="block text-sm font-medium text-gray-700">
                    Institution
                  </label>
                  <input
                    type="text"
                    name="institution"
                    id={`institution-${index}`}
                    value={education.institution}
                    onChange={(e) => handleChange(index, e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  <input
                    type="text"
                    name="degree"
                    id={`degree-${index}`}
                    value={education.degree}
                    onChange={(e) => handleChange(index, e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor={`fieldOfStudy-${index}`} className="block text-sm font-medium text-gray-700">
                  Field of Study
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  id={`fieldOfStudy-${index}`}
                  value={education.fieldOfStudy}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor={`startDate-${index}`} className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="month"
                    name="startDate"
                    id={`startDate-${index}`}
                    value={education.startDate}
                    onChange={(e) => handleChange(index, e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor={`endDate-${index}`} className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="month"
                    name="endDate"
                    id={`endDate-${index}`}
                    value={education.endDate}
                    onChange={(e) => handleChange(index, e)}
                    disabled={education.currentlyStudying}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="currentlyStudying"
                  id={`currentlyStudying-${index}`}
                  checked={education.currentlyStudying}
                  onChange={(e) => handleChange(index, e)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`currentlyStudying-${index}`} className="ml-2 block text-sm text-gray-900">
                  I am currently studying here
                </label>
              </div>

              <div className="mt-4">
                <label htmlFor={`description-${index}`} className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  rows={3}
                  value={education.description}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}