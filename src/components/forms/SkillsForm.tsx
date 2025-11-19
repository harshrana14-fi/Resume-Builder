"use client";

import { Skill } from "@/types/resume";

interface SkillsFormProps {
  skills: Skill[];
  onUpdate: (index: number, skill: Skill) => void;
  onRemove: (index: number) => void;
  onAdd: () => void;
}

export default function SkillsForm({
  skills,
  onUpdate,
  onRemove,
  onAdd,
}: SkillsFormProps) {
  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    
    const updatedSkill = { ...skills[index] };
    
    if (name === "level") {
      updatedSkill.level = parseInt(value, 10);
    } else {
      (updatedSkill as any)[name] = value;
    }
    
    onUpdate(index, updatedSkill);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Skills</h2>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Skill
        </button>
      </div>

      {skills.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No skills added yet</p>
          <button
            type="button"
            onClick={onAdd}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Your First Skill
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={skill.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="text-md font-medium text-gray-900">Skill {index + 1}</h3>
                {skills.length > 1 && (
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
                  <label htmlFor={`skillName-${index}`} className="block text-sm font-medium text-gray-700">
                    Skill Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id={`skillName-${index}`}
                    value={skill.name}
                    onChange={(e) => handleChange(index, e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  />
                </div>

                <div>
                  <label htmlFor={`skillLevel-${index}`} className="block text-sm font-medium text-gray-700">
                    Proficiency Level
                  </label>
                  <div className="mt-1 flex items-center">
                    <input
                      type="range"
                      name="level"
                      id={`skillLevel-${index}`}
                      min="1"
                      max="5"
                      value={skill.level}
                      onChange={(e) => handleChange(index, e)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-4 text-sm font-medium text-gray-700 w-8">
                      {skill.level}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}