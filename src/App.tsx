import React from "react";
import { CiSearch } from "react-icons/ci";
const CenteredForm = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <div className="space-y-4">
          {/* Full-width input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter contact address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <CiSearch
              className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredForm;
