import React from 'react';
import AtmTextField from '../../components/atoms/AtmTextField';

type Props = {
  name: string;
  link: string;
  description: string;
  setName: (name: string) => void;
  setLink: (link: string) => void;
  setDescription: (description: string) => void;
  addResource: () => void;
};

const AddResourcesForm = ({ name, link, description, setName, setLink, setDescription, addResource }: Props) => {
  return (
    <div className="p-4">
      <div className="flex items-end gap-4">
        {/* Name input field */}
        <div className="w-1/3">
          <AtmTextField
            className="p-2 w-full"
            label="Name"
            name="name"
            placeholder="Enter resource name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Link input field */}
        <div className="w-1/3">
          <AtmTextField
            className="p-2 w-full"
            label="Add link"
            name="link"
            placeholder="Enter resource link"
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>

      {/* Description textarea field */}
      <div className="mt-4">
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          className="p-2 border border-gray-300 rounded w-full"
          name="description"
          placeholder="Enter resource description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}  // Adjust this value for more or fewer rows
        ></textarea>
      </div>

      {/* Save button */}
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          onClick={addResource}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddResourcesForm;
