import React from 'react';

type Props = {
  data: Array<{
    _id: string;
    name: string;
    link: string;
    description: string;
    isDeleted: boolean;
    subcategoryId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }>
};

const ResourcesList = ({ data }: Props) => {
  console.log(data.data.resources, "hemangt")
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Resources List</h2>

      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border border-gray-300 text-left">Name</th>
            <th className="p-2 border border-gray-300 text-left">Link</th>
            <th className="p-2 border border-gray-300 text-left">Description</th>
            <th className="p-2 border border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>

          {data?.data.resources.map((resources) => (
            <tr key={resources._id} className="even:bg-gray-100">
              <td className="p-2 border border-gray-300">{resources.name}</td>
              <td className="p-2 border border-gray-300">
                <a
                  href={resources.link}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resources.link}
                </a>
              </td>
              <td className="p-2 border border-gray-300">{resources.description}</td>
              <td className="p-2 border border-gray-300">
                <button className="bg-yellow-300 text-gray-800 px-3 py-1 mr-2 rounded hover:bg-yellow-400 transition">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourcesList;
