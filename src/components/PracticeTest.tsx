import React, { useState } from 'react';
import PracticeTestItem from './PracticeTestItem';

type TestItem = {
  id: string;
  subject: string;
  date: string;
  chapterCovered?: string;
  testTime?: string;
  totalQuestions?: number;
  correctAnswers?: number;
  wrongAnswers?: number;
  unanswered?: number;
  duration?: string;
  timeTaken?: string;
  score?: string;
  code?: string;
};

const PracticeTestApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Class test' | 'Practice Test' | 'Worksheet'>('Practice Test');
  const [expandedTest, setExpandedTest] = useState<string | null>(null);

  const practiceTests: TestItem[] = [
    {
      id: '1',
      subject: 'Mathematics',
      date: '25th Apr 2025',
      chapterCovered: '3',
      testTime: '10:00 AM - 11:00 AM',
      totalQuestions: 30,
      correctAnswers: 18,
      wrongAnswers: 10,
      unanswered: 2,
      duration: '60 Min',
      timeTaken: '52 Min',
      score: '60%',
      code: '105'
    },
    {
      id: '2',
      subject: 'English',
      date: '22nd Apr 2025',
      chapterCovered: '1',
      testTime: '11:00 AM - 10:00 PM',
      totalQuestions: 30,
      correctAnswers: 10,
      wrongAnswers: 20,
      unanswered: 0,
      duration: '60 Min',
      timeTaken: '45 Min',
      score: '70%',
      code: '110'
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedTest(expandedTest === id ? null : id);
  };

  const renderTestItem = (test: TestItem) => {
    const isExpanded = expandedTest === test.id;
    
    return (
      <div key={test.id} className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
        <div 
          className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50"
          onClick={() => toggleExpand(test.id)}
        >
          <div>
            <span className="font-medium text-blue-950">{test.subject}</span>
            <span className="text-blue-950 ml-2">&gt; {test.date}</span>
          </div>
          <svg 
            className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isExpanded && <PracticeTestItem />}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 min-h-screen bg-white border border-gray-300 rounded-lg">
      {/* Tabs */}
      <div className="flex bg-white justify-between border border-gray-300 rounded-md p-1 px-2 mb-4">
        <div
          className={`py-2 px-4 font-medium text-sm rounded-md cursor-pointer transition-all ${
            activeTab === 'Class test'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('Class test')}
        >
          Class Test
        </div>
        <div
          className={`py-2 px-4 font-medium text-sm rounded-md cursor-pointer transition-all ${
            activeTab === 'Practice Test'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('Practice Test')}
        >
          Practice Test
        </div>
        <div
          className={`py-2 px-4 font-medium text-sm rounded-md cursor-pointer transition-all ${
            activeTab === 'Worksheet'
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => setActiveTab('Worksheet')}
        >
          Worksheet
        </div>
      </div>

      {/* Heading */}
      <h3 className="flex items-center justify-between bg-blue-700 px-4 py-4 text-md font-semibold text-white rounded-md mb-4">
        <span>Assessment &gt; {activeTab}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
      </h3>

      {/* Action Buttons */}
      {activeTab === 'Practice Test' && (
        <div className="flex items-center justify-between mb-6 bg-white">
          <h3 className="text-blue-950">{activeTab} List</h3>
          <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Start New Practice Test
          </div>
        </div>
      )}

      {/* Test List or No Content Found */}
      <div className="space-y-3">
        {activeTab === 'Practice Test' && practiceTests.map(renderTestItem)}
        {(activeTab === 'Class test' || activeTab === 'Worksheet') && (
          <div className="mt-6 pt-4 border-t border-gray-200 text-center text-gray-600">
            No Content Found
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeTestApp;
