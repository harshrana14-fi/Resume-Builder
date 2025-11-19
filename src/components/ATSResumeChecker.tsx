"use client";

import { useState, useRef } from "react";
import { analyzeResume } from "@/utils/atsAnalyzer";

export default function ATSResumeChecker() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please select a resume file");
      return;
    }

    // Check file type
    if (!file.name.match(/\.(pdf|docx|doc|txt)$/i)) {
      setError("Please upload a valid resume file (PDF, DOCX, DOC, TXT)");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await analyzeResume(file);
      setAnalysis(result);
    } catch (err: any) {
      setError(err.message || "Failed to analyze resume. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setAnalysis(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">ATS Resume Checker</h2>
        <p className="text-gray-600 mb-6">
          Upload your resume to get an ATS (Applicant Tracking System) compatibility score, 
          improvement suggestions, and identify potential issues.
        </p>

        {!analysis ? (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 mb-4">Upload your resume file</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.doc,.txt"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Choose File
                </label>
                {file && (
                  <p className="mt-2 text-gray-700">{file.name}</p>
                )}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-md">
                {error}
              </div>
            )}

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleAnalyze}
                disabled={loading || !file}
                className={`px-6 py-3 rounded-md font-medium ${
                  loading || !file
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {loading ? "Analyzing..." : "Analyze Resume"}
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Analysis Results</h3>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Analyze Another Resume
              </button>
            </div>

            {/* Score Display */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
              <div className="text-center">
                <h4 className="text-lg font-medium mb-2">ATS Compatibility Score</h4>
                <div className="text-5xl font-bold">{analysis.score}/100</div>
                <p className="mt-2">
                  {analysis.score >= 80
                    ? "Excellent! Your resume is highly ATS-friendly"
                    : analysis.score >= 60
                    ? "Good, but there's room for improvement"
                    : "Needs significant improvements for ATS compatibility"}
                </p>
              </div>
            </div>

            {/* Key Findings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">Strengths</h4>
                <ul className="space-y-2">
                  {analysis.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-2">Improvements</h4>
                <ul className="space-y-2">
                  {analysis.improvements.map((improvement: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 mb-2">Issues</h4>
                <ul className="space-y-2">
                  {analysis.issues.map((issue: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Detailed Analysis</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Keywords Match</h5>
                  <div className="flex flex-wrap gap-2">
                    {analysis.keywords.slice(0, 20).map((keyword: {text: string, matched: boolean}, index: number) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          keyword.matched 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {keyword.text}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Formatting Issues</h5>
                  {analysis.formattingIssues.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {analysis.formattingIssues.map((issue: string, index: number) => (
                        <li key={index} className="text-gray-800">{issue}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-green-600">No formatting issues detected!</p>
                  )}
                </div>

                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Suggestions</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {analysis.suggestions.map((suggestion: string, index: number) => (
                      <li key={index} className="text-gray-800">{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}