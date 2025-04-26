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
      { label: 'Time', value: '60 Min' },
      { label: 'Time Taken', value: '45 Min' },
      { label: 'Score', value: '70%' },
    ];
  
    return (
      <div className="border border-gray-300 rounded-lg mb-3 overflow-hidden">
        <div className="bg-white text-sm">
          {/* Row Items */}
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-6 py-3 border-b border-gray-200"
            >
              <span className="font-medium w-48 text-black">{item.label} :</span>
              <span className="ml-2 text-blue-600">{item.value}</span>
            </div>
          ))}
  
          {/* Challenge Section */}
          <div className="flex items-center px-6 py-3 border-b border-gray-200">
            <span className="font-medium w-48 text-black ">Challenge :</span>
            <div className="flex space-x-2 ml-2">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            </div>
          </div>
  
          {/* Result Button */}
          <div className="p-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md">
              Result
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PracticeTestItem;
  