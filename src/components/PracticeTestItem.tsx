import React from 'react';

const PracticeTestItem: React.FC = () => {
  const data = [
    { label: 'Subject', value: 'English' },
    { label: 'Chapter Covered', value: '5' },
    { label: 'Date', value: '22nd Apr 2025' },
    { label: 'Time', value: '11:00 AM - 12:00 PM' },
    { label: 'Question', value: '30' },
    { label: 'Correct', value: '20' },
    { label: 'Wrong', value: '10' },
    { label: 'Not Answered', value: '0' },
    { label: 'Time Allotted', value: '60 Min' },
    { label: 'Time Taken', value: '45 Min' },
    { label: 'Score', value: '70%' },
  ];

  return (
    <div className="border border-gray-300 rounded-lg  overflow-hidden">
      <div className="text-sm text-left">
        {/* Row Items */}
        {data.map((item, index) => (
          <div
            key={index}
            className="px-3 py-2 border-b border-gray-200"
          >
            <span className="font-medium text-black">{item.label}: </span>
            <span className="font-semibold" style={{ color: '#003092' }}>
              {item.value}
            </span>
          </div>
        ))}

        {/* Challenge Section */}
        <div className="flex items-center px-3 py-2 border-b border-gray-200 space-x-2">
          <span className="font-medium text-black">Challenge:</span>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            <div
              className="w-6 h-6 rounded-full border-2 border-white"
              style={{ backgroundColor: '#003092' }}
            ></div>
            <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
        </div>

        {/* Result Button */}
        <div className="py-4 px-20 flex justify-center">
          <div
            className="w-full text-white font-semibold py-2 rounded-md transition-all duration-200 text-center"
            style={{ backgroundColor: '#003092' }}
          >
            Result
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTestItem;
