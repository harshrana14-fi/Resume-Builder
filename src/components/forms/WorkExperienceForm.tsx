"use client";

import { WorkExperience } from "@/types/resume";

interface WorkExperienceFormProps {
  experiences: WorkExperience[];
  onUpdate: (index: number, experience: WorkExperience) => void;
  onRemove: (index: number) => void;
  onAdd: () => void;
}

export default function WorkExperienceForm({
  experiences,
  onUpdate,
  onRemove,
  onAdd,
}: WorkExperienceFormProps) {
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    const updatedExperience = { ...experiences[index] };
    
    if (name === "currentlyWorking") {
      updatedExperience.currentlyWorking = checked || false;
    } else {
      (updatedExperience as any)[name] = value;
    }
    
    onUpdate(index, updatedExperience);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Work Experience</h2>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Experience
        </button>
      </div>

      {experiences.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No work experience added yet</p>
          <button
            type="button"
            onClick={onAdd}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Your First Experience
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="text-md font-medium text-gray-900">Experience {index + 1}</h3>
                {experiences.length > 1 && (
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
                  <label htmlFor={`company-${index}`} className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id={`company-${index}`}
                    value={experience.company}
                    onChange={(e) => handleChange(index, e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor={`position-${index}`} className="block text-sm font-medium text-gray-700">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    id={`position-${index}`}
                    value={experience.position}
                    onChange={(e) => handleChange(index, e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
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
                    value={experience.startDate}
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
                    value={experience.endDate}
                    onChange={(e) => handleChange(index, e)}
                    disabled={experience.currentlyWorking}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  name="currentlyWorking"
                  id={`currentlyWorking-${index}`}
                  checked={experience.currentlyWorking}
                  onChange={(e) => handleChange(index, e)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={`currentlyWorking-${index}`} className="ml-2 block text-sm text-gray-900">
                  I currently work here
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
                  value={experience.description}
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