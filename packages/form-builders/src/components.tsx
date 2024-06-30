import React = require('react');
import { Field } from './FormBuilder';

export const TextInput: React.FC<{ name: string; label: string }> = ({ name, label }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label}
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            type="text"
            placeholder={label}
        />
    </div>
);

export const NumberInput: React.FC<{ name: string; label: string }> = ({ name, label }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label}
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
            type="number"
            placeholder={label}
        />
    </div>
);

export const SelectInput: React.FC<{ name: string; label: string; options: string[] }> = ({ name, label, options }) => (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label}
        </label>
        <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={name}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export const FormComponent: React.FC<{ fields: Field[] }> = ({ fields }) => {
    const renderField = (field: Field) => {
        switch (field.type) {
            case 'text':
                return <TextInput key={field.name} name={field.name} label={field.label} />;
            case 'number':
                return <NumberInput key={field.name} name={field.name} label={field.label} />;
            case 'select':
                return <SelectInput key={field.name} name={field.name} label={field.label} options={field.options || []} />;
            default:
                return null;
        }
    };

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {fields.map(renderField)}
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};