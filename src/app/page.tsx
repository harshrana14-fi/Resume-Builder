"use client";

import Link from "next/link";
import TemplatePreview from "@/components/templates/TemplatePreview";
import { useState, useEffect } from "react";

export default function Home() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep(prev => {
        if (prev >= 8) {
          // Reset animation after completion
          return 0;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Create a Professional</span>
                  <span className="block text-blue-600">Resume in Minutes</span>
                </h1>
                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Build beautiful, professional resumes with our easy-to-use resume builder. 
                  No design skills needed - just fill in the blanks and download your perfect resume.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/builder"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/templates"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      View Templates
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
          <div className="h-56 w-full rounded-xl sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center p-8">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full h-full max-w-md relative overflow-hidden">
              {/* Animated Resume Building */}
              <div className="relative h-full flex flex-col">
                {/* Header Animation */}
                <div className={`transition-all duration-300 ease-out ${animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    </div>
                    <div className="ml-4">
                      <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded w-48"></div>
                    </div>
                  </div>
                </div>
                
                {/* Professional Summary */}
                <div className={`transition-all duration-300 ease-out ${animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="h-5 bg-blue-100 rounded w-1/3 mb-3"></div>
                  <div className="space-y-2 mb-6">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                  </div>
                </div>
                
                {/* Work Experience */}
                <div className={`transition-all duration-300 ease-out ${animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="h-5 bg-blue-100 rounded w-1/2 mb-3"></div>
                  <div className="space-y-4 mb-6">
                    <div className={`transition-all duration-300 ease-out ${animationStep >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div className="h-3 bg-gray-100 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    </div>
                    <div className={`transition-all duration-300 ease-out delay-100 ${animationStep >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                      <div className="h-3 bg-gray-100 rounded w-5/6 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
                
                {/* Education */}
                <div className={`transition-all duration-300 ease-out ${animationStep >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="h-5 bg-blue-100 rounded w-1/3 mb-3"></div>
                  <div className="space-y-3 mb-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                  </div>
                </div>
                
                {/* Skills */}
                <div className={`transition-all duration-300 ease-out ${animationStep >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="h-5 bg-blue-100 rounded w-1/4 mb-3"></div>
                  <div className="flex flex-wrap gap-2">
                    <div className={`h-6 bg-gray-100 rounded-full w-16 transition-all duration-300 ${animationStep >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
                    <div className={`h-6 bg-gray-100 rounded-full w-20 transition-all duration-300 delay-75 ${animationStep >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
                    <div className={`h-6 bg-gray-100 rounded-full w-16 transition-all duration-300 delay-150 ${animationStep >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
                    <div className={`h-6 bg-gray-100 rounded-full w-24 transition-all duration-300 delay-200 ${animationStep >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
                    <div className={`h-6 bg-gray-100 rounded-full w-20 transition-all duration-300 delay-300 ${animationStep >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Preview Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Templates</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Professional Resume Templates
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose from our collection of professionally designed templates
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden group">
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 text-center">Professional Template</h3>
              </div>
              <div className="h-80">
                <TemplatePreview templateId={1} />
              </div>
              <div className="p-4 bg-white transition-all duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-0">
                <Link
                  href="/builder?template=1"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Use This Template
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden group">
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 text-center">Modern Template</h3>
              </div>
              <div className="h-80">
                <TemplatePreview templateId={2} />
              </div>
              <div className="p-4 bg-white transition-all duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-0">
                <Link
                  href="/builder?template=2"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Use This Template
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a perfect resume
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our resume builder makes it easy to create a professional resume that stands out.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Professional Templates</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Choose from our collection of professionally designed templates that meet industry standards.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">ATS Optimized</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Our resumes are optimized for Applicant Tracking Systems to ensure your resume gets seen.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Easy Export</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Download your resume as a PDF with one click, ready to send to employers.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Customizable</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Easily customize your resume with your own information and styling preferences.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 11-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Privacy Focused</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Your data stays on your device. We don't store or share your personal information.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Quick & Easy</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Create a professional resume in minutes, not hours. No design skills required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Creating your perfect resume is simple with our 3-step process
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center text-center mb-10 md:mb-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                  1
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Choose a Template</h3>
                <p className="mt-2 text-gray-600 max-w-xs">
                  Browse our professionally designed templates and select the one that fits your style.
                </p>
              </div>

              <div className="hidden md:block text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center mb-10 md:mb-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                  2
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Fill in Your Details</h3>
                <p className="mt-2 text-gray-600 max-w-xs">
                  Add your personal information, work experience, education, and skills using our easy forms.
                </p>
              </div>

              <div className="hidden md:block text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                  3
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Download & Apply</h3>
                <p className="mt-2 text-gray-600 max-w-xs">
                  Export your resume as a PDF and start applying for your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ATS Checker Promotion */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    <span className="block">ATS Resume Checker</span>
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Get your resume analyzed by our advanced Applicant Tracking System checker. 
                    Receive a detailed score, improvement suggestions, and identify potential issues 
                    that could prevent your resume from being seen by employers.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/ats-checker"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Check Your Resume
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4">
                      <div className="w-full h-full mx-auto rounded-2xl bg-blue-500 opacity-30 blur-lg filter"></div>
                    </div>
                    <div className="relative bg-white rounded-2xl shadow-xl p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">ATS Compatibility Score</h3>
                          <p className="text-3xl font-bold text-blue-600">85/100</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500">●</span>
                          <span className="ml-2">Good keyword match</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <span className="text-yellow-500">●</span>
                          <span className="ml-2">Formatting issues detected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to build your resume?</span>
            <span className="block text-blue-200">Start today for free.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/builder"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold">ResumeBuilder</h3>
              <p className="mt-4 text-gray-300 max-w-md">
                Create professional resumes in minutes with our easy-to-use resume builder. 
                No design skills needed - just fill in the blanks and download your perfect resume.
              </p>
              <div className="mt-6 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="/templates" className="text-base text-gray-300 hover:text-white">Templates</Link></li>
                <li><Link href="/builder" className="text-base text-gray-300 hover:text-white">Resume Builder</Link></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Cover Letters</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">CV Builder</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2023 ResumeBuilder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}