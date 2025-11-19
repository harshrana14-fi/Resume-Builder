// Utility functions for parsing resume content
// This is a simplified version - a production implementation would use more robust libraries

export async function parseResumeText(file: File): Promise<string> {
  // In a real implementation, this would use libraries like:
  // - pdfjs-dist for PDF parsing
  // - mammoth for DOCX parsing
  // - docxtemplater for DOC parsing
  
  // For demonstration, we'll simulate text extraction
  return new Promise((resolve) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      // Simulate parsing delay
      setTimeout(() => {
        const content = reader.result as string;
        // In a real implementation, we would extract text from the file
        // For now, we'll return mock content based on file type
        const fileName = file.name.toLowerCase();
        
        if (fileName.endsWith('.pdf')) {
          resolve(`
            John Doe
            Senior Software Engineer
            john.doe@email.com | (555) 123-4567 | LinkedIn: linkedin.com/in/johndoe
            
            PROFESSIONAL SUMMARY
            Experienced software engineer with 5+ years in full-stack development, specializing in JavaScript frameworks and cloud technologies.
            
            WORK EXPERIENCE
            Lead Developer, TechCorp — San Francisco, CA
            2020 - Present
            - Led a team of 8 developers in building scalable web applications
            - Implemented CI/CD pipelines that reduced deployment time by 60%
            - Improved application performance by 40% through code optimization
            
            Software Engineer, InnovateX — New York, NY
            2018 - 2020
            - Developed and maintained multiple client-facing applications
            - Collaborated with UX designers to implement responsive interfaces
            - Mentored junior developers on best practices
            
            EDUCATION
            M.S. Computer Science, Stanford University — 2018
            B.S. Computer Engineering, UC Berkeley — 2016
            
            SKILLS
            JavaScript, React, Node.js, Python, AWS, Docker, Kubernetes, MongoDB, PostgreSQL
          `);
        } else if (fileName.endsWith('.docx') || fileName.endsWith('.doc')) {
          resolve(`
            Jane Smith
            Product Manager
            jane.smith@email.com | (555) 987-6543
            
            SUMMARY
            Product manager with 4+ years of experience driving product development from concept to launch.
            
            EXPERIENCE
            Product Manager, GrowthCo — Seattle, WA
            2019 - Present
            - Managed product roadmap for SaaS platform serving 100K+ users
            - Increased user engagement by 35% through feature enhancements
            - Led cross-functional teams of engineers, designers, and marketers
            
            Associate Product Manager, StartUp Inc — Austin, TX
            2017 - 2019
            - Conducted market research and user interviews to inform product decisions
            - Collaborated with engineering to deliver features on time and within budget
            
            EDUCATION
            B.A. Business Administration, University of Texas — 2017
            
            SKILLS
            Product Strategy, User Research, Agile Methodologies, Data Analysis, Stakeholder Management
          `);
        } else {
          // Default mock content
          resolve(`
            Alex Johnson
            Marketing Specialist
            alex.johnson@email.com | (555) 456-7890
            
            PROFESSIONAL SUMMARY
            Creative marketing professional with 3+ years of experience in digital marketing and brand management.
            
            WORK HISTORY
            Marketing Specialist, BrandCo — Chicago, IL
            2020 - Present
            - Developed and executed digital marketing campaigns that increased brand awareness by 50%
            - Managed social media accounts with a combined following of 100K+
            - Coordinated with design team to create compelling visual content
            
            Marketing Coordinator, AdAgency — Denver, CO
            2018 - 2020
            - Supported campaign execution across multiple channels
            - Analyzed campaign performance and prepared reports for clients
            - Assisted in the planning and execution of events
            
            EDUCATION
            B.A. Marketing, University of Denver — 2018
            
            TECHNICAL SKILLS
            Google Analytics, Adobe Creative Suite, Social Media Management, Email Marketing, SEO
          `);
        }
      }, 1000);
    };
    
    // For demonstration, we'll read as text
    // In a real implementation, we would handle binary files appropriately
    reader.readAsText(file);
  });
}

export function extractKeywords(text: string): string[] {
  // Simple keyword extraction - in a real implementation, this would be more sophisticated
  const commonKeywords = [
    "javascript", "react", "node.js", "python", "java", "sql", "html", "css",
    "aws", "docker", "kubernetes", "mongodb", "postgresql", "mysql",
    "agile", "scrum", "project management", "leadership", "team management",
    "marketing", "seo", "social media", "analytics", "branding",
    "design", "ux", "ui", "adobe", "figma", "sketch",
    "finance", "accounting", "sales", "customer service", "hr"
  ];
  
  const lowerText = text.toLowerCase();
  return commonKeywords.filter(keyword => lowerText.includes(keyword));
}

export function analyzeFormatting(text: string): string[] {
  const issues: string[] = [];
  
  // Check for common formatting issues
  if (text.split('\n').filter(line => line.trim() !== '').length < 10) {
    issues.push("Resume appears too short - may be missing important sections");
  }
  
  if (!text.toLowerCase().includes("experience") && !text.toLowerCase().includes("work")) {
    issues.push("Missing work experience section");
  }
  
  if (!text.toLowerCase().includes("education")) {
    issues.push("Missing education section");
  }
  
  if (!text.toLowerCase().includes("skills")) {
    issues.push("Missing skills section");
  }
  
  if (!text.includes("@") || !text.includes(".") || text.match(/\d{3}-\d{3}-\d{4}/) === null) {
    issues.push("Contact information may be incomplete");
  }
  
  return issues;
}

export function calculateScore(text: string, keywords: string[], formattingIssues: string[]): number {
  let score = 100;
  
  // Deduct points for formatting issues
  score -= formattingIssues.length * 5;
  
  // Add points for good keyword matches
  score += Math.min(keywords.length * 2, 20);
  
  // Deduct points for missing sections
  if (!text.toLowerCase().includes("summary") && !text.toLowerCase().includes("objective")) {
    score -= 5;
  }
  
  if (!text.toLowerCase().includes("experience") && !text.toLowerCase().includes("work")) {
    score -= 10;
  }
  
  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, score));
}