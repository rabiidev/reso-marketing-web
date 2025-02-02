import React from 'react';

const AutoScroll = () => {
  return (
    <div className="overflow-hidden bg-gray-800 py-4">
      <div className="flex w-full animate-scroll space-x-10">
        {/* Example Content */}
        <div className="flex-shrink-0 text-white px-8 py-4 bg-blue-600 rounded-md">Item 1</div>
        <div className="flex-shrink-0 text-white px-8 py-4 bg-red-600 rounded-md">Item 2</div>
        <div className="flex-shrink-0 text-white px-8 py-4 bg-green-600 rounded-md">Item 3</div>
        <div className="flex-shrink-0 text-white px-8 py-4 bg-purple-600 rounded-md">Item 4</div>
        <div className="flex-shrink-0 text-white px-8 py-4 bg-yellow-600 rounded-md">Item 5</div>
      </div>
    </div>
  );
};

export default AutoScroll;
