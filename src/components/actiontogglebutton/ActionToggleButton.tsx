
import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs"; 

const ActionToggleButton = () => {

  const [showActions, setShowActions] = useState(false);


  const toggleActions = () => {
    setShowActions(!showActions);
  };

  return (
    <div className="relative">
      {/* Three dots button to toggle action buttons */}
      <button type="button" onClick={toggleActions} className="text-xl">
        <BsThreeDots className="text-slate-600" />
      </button>

      {/* Action buttons (show only when showActions is true) */}
      {showActions && (
        <div className="absolute bg-white border rounded-lg shadow-lg p-2 mt-2 z-10">
 
          <button className="block text-gray-700 hover:text-gray-900 mt-2">
            Rename
          </button>
          <button className="block text-gray-700 hover:text-gray-900 mt-2">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionToggleButton;
