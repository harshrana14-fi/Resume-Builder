# Resume Data Structure Documentation

## Overview

This document describes the data structure used for storing resume information in the resume builder application.

## Main Interface

### ResumeData

The main interface that contains all resume information:

```typescript
interface ResumeData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  templateId: number;
}
```

## Personal Information

### PersonalInfo

Contains the user's personal details:

```typescript
interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  summary: string;
}
```

## Work Experience

### WorkExperience

Represents a single work experience entry:

```typescript
interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string;   // Format: "YYYY-MM"
  currentlyWorking: boolean;
  description: string;
}
```

## Education

### Education

Represents a single education entry:

```typescript
interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string;   // Format: "YYYY-MM"
  currentlyStudying: boolean;
  description: string;
}
```

## Skills

### Skill

Represents a single skill with proficiency level:

```typescript
interface Skill {
  id: string;
  name: string;
  level: number; // Scale from 1-5
}
```

## Template System

### Template IDs

- `1`: Professional Template
- `2`: Modern Template

## Usage Examples

### Creating a New Resume

```typescript
const newResume: ResumeData = {
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
  templateId: 1,
};
```

### Adding Work Experience

```typescript
const newExperience: WorkExperience = {
  id: Date.now().toString(),
  company: "Tech Solutions Inc.",
  position: "Senior Developer",
  startDate: "2020-01",
  endDate: "2023-05",
  currentlyWorking: false,
  description: "Led development of multiple web applications...",
};
```

### Adding Education

```typescript
const newEducation: Education = {
  id: Date.now().toString(),
  institution: "University of Technology",
  degree: "Bachelor of Science",
  fieldOfStudy: "Computer Science",
  startDate: "2016-09",
  endDate: "2020-05",
  currentlyStudying: false,
  description: "Graduated with honors...",
};
```

### Adding Skills

```typescript
const newSkill: Skill = {
  id: Date.now().toString(),
  name: "JavaScript",
  level: 5,
};
```

## Data Flow

1. User fills out forms which update the ResumeData state
2. ResumeData is passed to the ResumePreview component
3. ResumePreview selects the appropriate template based on templateId
4. Template components render the resume data in their specific layouts
5. PDF generation uses the same ResumeData to create a printable version

## Validation

The application performs basic validation on form inputs:
- Required fields are marked with visual indicators
- Date formats are enforced through input types
- Skill levels are constrained to 1-5 range
- Email and phone number formats are validated

## Extensibility

The data structure is designed to be easily extensible:
- New fields can be added to existing interfaces
- Additional arrays can be added for new sections (e.g., certifications, projects)
- Template system can be extended with new template IDs