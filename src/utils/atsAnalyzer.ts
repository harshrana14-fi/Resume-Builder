import { parseResumeText, extractKeywords, analyzeFormatting, calculateScore } from "./resumeParser";

export interface ATSAnalysisResult {
  score: number;
  strengths: string[];
  improvements: string[];
  issues: string[];
  keywords: { text: string; matched: boolean }[];
  formattingIssues: string[];
  suggestions: string[];
}

const COMMON_KEYWORDS = [
  "javascript", "react", "node.js", "python", "java", "sql", "html", "css",
  "aws", "docker", "kubernetes", "mongodb", "postgresql", "mysql",
  "agile", "scrum", "project management", "leadership", "team management",
  "marketing", "seo", "social media", "analytics", "branding",
  "design", "ux", "ui", "adobe", "figma", "sketch",
  "finance", "accounting", "sales", "customer service", "hr",
  "communication", "problem solving", "time management", "critical thinking"
];

export async function analyzeResume(file: File): Promise<ATSAnalysisResult> {
  try {
    // Parse the resume text
    const text = await parseResumeText(file);
    
    // Extract keywords
    const matchedKeywords = extractKeywords(text);
    
    // Analyze formatting
    const formattingIssues = analyzeFormatting(text);
    
    // Calculate score
    const score = calculateScore(text, matchedKeywords, formattingIssues);
    
    // Generate keyword objects with match status
    const keywords = COMMON_KEYWORDS.map(keyword => ({
      text: keyword,
      matched: matchedKeywords.includes(keyword.toLowerCase())
    }));
    
    // Identify strengths based on content
    const strengths: string[] = [];
    if (text.toLowerCase().includes("summary") || text.toLowerCase().includes("objective")) {
      strengths.push("Clear professional summary");
    }
    if (text.toLowerCase().includes("experience") || text.toLowerCase().includes("work")) {
      strengths.push("Detailed work experience section");
    }
    if (text.toLowerCase().includes("education")) {
      strengths.push("Education section included");
    }
    if (text.toLowerCase().includes("skills")) {
      strengths.push("Skills section included");
    }
    if (text.includes("@") && text.includes(".")) {
      strengths.push("Contact information provided");
    }
    
    // Identify improvements
    const improvements: string[] = [];
    if (!text.toLowerCase().includes("summary") && !text.toLowerCase().includes("objective")) {
      improvements.push("Add a professional summary or objective");
    }
    if (matchedKeywords.length < 5) {
      improvements.push("Include more industry-specific keywords");
    }
    if (!text.toLowerCase().includes("achievements") && !text.toLowerCase().includes("results")) {
      improvements.push("Add quantifiable achievements and results");
    }
    
    // Identify issues
    const issues: string[] = [...formattingIssues];
    if (text.split('\n').filter(line => line.trim() !== '').length > 100) {
      issues.push("Resume may be too long - consider trimming to one page");
    }
    
    // Generate suggestions
    const suggestions: string[] = [
      "Use standard section headings (Experience, Education, Skills)",
      "Include specific metrics and achievements in job descriptions",
      "Replace graphics with text-based sections for better ATS compatibility",
      "Use standard fonts like Arial or Calibri in 10-12pt size",
      "Save PDF resumes with a professional filename (e.g., FirstName_LastName_Resume.pdf)"
    ];
    
    // Add formatting suggestions if needed
    if (formattingIssues.length > 0) {
      suggestions.push("Fix formatting issues to improve ATS compatibility");
    }
    
    return {
      score,
      strengths: strengths.length > 0 ? strengths : ["Basic resume structure"],
      improvements,
      issues: issues.length > 0 ? issues : ["No major issues detected"],
      keywords,
      formattingIssues,
      suggestions
    };
  } catch (error) {
    console.error("Error analyzing resume:", error);
    throw new Error("Failed to analyze resume. Please try again with a different file.");
  }
}