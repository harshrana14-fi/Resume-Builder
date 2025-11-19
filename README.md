# Professional Resume Builder

A modern, responsive resume builder application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Professional Templates**: Choose from multiple professionally designed resume templates
- **Easy Editing**: Intuitive form-based interface for filling in your resume information
- **Real-time Preview**: See changes to your resume as you make them
- **PDF Export**: Download your resume as a PDF with one click
- **Responsive Design**: Works on all devices from mobile to desktop

## Tech Stack

- **Next.js 16** - React framework for production
- **TypeScript** - Strongly typed programming language
- **Tailwind CSS** - Utility-first CSS framework
- **html2pdf.js** - Client-side PDF generation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── builder/         # Resume builder page
│   ├── templates/       # Template selection page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
│   ├── forms/           # Form components
│   ├── templates/       # Resume templates
│   ├── Navbar.tsx       # Navigation component
│   └── ResumePreview.tsx # Resume preview component
├── types/               # TypeScript types
│   └── resume.ts        # Resume data types
└── utils/               # Utility functions
    └── pdfGenerator.ts  # PDF generation utility
```

## Components

### Pages

1. **Homepage** (`/`) - Landing page with call-to-action
2. **Templates** (`/templates`) - Template selection page
3. **Builder** (`/builder`) - Main resume builder interface

### Forms

- Personal Information Form
- Work Experience Form
- Education Form
- Skills Form

### Templates

1. **Professional Template** - Clean, traditional design
2. **Modern Template** - Contemporary layout with sidebar

## Functionality

### Resume Sections

- Personal Information (Name, Contact Details, Summary)
- Work Experience (Companies, Positions, Dates, Descriptions)
- Education (Institutions, Degrees, Dates, Descriptions)
- Skills (Skill Names, Proficiency Levels)

### Features

- Add/remove multiple entries for work experience, education, and skills
- Real-time preview updates
- Template switching
- PDF export functionality

## Customization

To customize the application:

1. Add new templates in `src/components/templates/`
2. Modify form fields in the form components
3. Update styling in Tailwind CSS classes
4. Extend the resume data types in `src/types/resume.ts`

## Deployment

The application can be deployed to any platform that supports Next.js, such as:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Google Cloud Platform

To build for production:
```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.