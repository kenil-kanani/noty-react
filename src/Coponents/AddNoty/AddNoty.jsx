import React, { useContext } from 'react';
import NotyContext from '../../context/NotyContext';

const AddNoty = ({ options, setOptions }) => {
    const { notyDispatch } = useContext(NotyContext);

    return (
        <div className="w-[600px] flex flex-col items-start space-y-4 p-4 border border-gray-300 rounded shadow-md">
            <input
                type="text"
                value={options.text}
                onChange={(e) => setOptions({ ...options, text: e.target.value })}
                placeholder="Short Description"
                className="p-2 border border-gray-300 rounded"
            />
            <label htmlFor="type" className="text-sm text-gray-700">Choose a type:</label>
            <select
                value={options.type}
                onChange={(e) => setOptions({ ...options, type: e.target.value })}
                name="type"
                id="cars"
                className="p-2 border border-gray-300 rounded"
            >
                <option value="success">Success</option>
                <option value="alert">Alert</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
            </select>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={(e) => {
                    e.preventDefault();
                    notyDispatch({
                        type: 'ADD_NOTY',
                        payload: { ...options, text: options.text }
                    });
                    setOptions({
                        ...options,
                        text: '',
                    });
                }}
            >
                Add
            </button>
        </div>
    );
};

export default AddNoty;
