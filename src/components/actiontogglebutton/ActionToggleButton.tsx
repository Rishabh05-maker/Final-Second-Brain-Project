
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; 
import AddCategoryFormWrapper from '../../category/Add/AddCategoryFormWrapper';

const ActionToggleButton = () => {
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  return (
    <div className="relative">
      {/* Plus icon button to toggle action buttons */}
      <button 
        type="button" 
        onClick={toggleActions} 
        className="flex items-center m-5 justify-center w-10 h-10 rounded-full bg-pink-400 text-white hover:bg-pink-500 focus:outline-none"
      >
        <AiOutlinePlus className="text-2xl" />
      </button>

      {/* Action buttons (show only when showActions is true) */}
      {showActions && (
        <div className="absolute top-12 left-0 z-10 bg-white shadow-lg rounded-lg p-4">
          <AddCategoryFormWrapper />
        </div>
      )}
    </div>
  );
};

export default ActionToggleButton;

