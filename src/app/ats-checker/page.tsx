import ATSResumeChecker from "@/components/ATSResumeChecker";
import Link from "next/link";

export default function ATSCheckerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Home
            </Link>
            <h1 className="ml-4 text-2xl font-bold text-gray-900">ATS Resume Checker</h1>
          </div>
        </div>
      </div>
      
      <main className="py-8">
        <ATSResumeChecker />
      </main>
    </div>
  );
}