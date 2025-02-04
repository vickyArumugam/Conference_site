import React, { useState } from 'react';

export default function PaperSubmissionForm() {
    const [formData, setFormData] = useState({
        title: '',
        fullName: '',
        mobileNumber: '',
        email: '',
        institution: '',
        firstAuthorCategory: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., sending data to a server)
        alert('Paper submitted successfully!');
    };

    return (
        <div className="py-10 px-4 my-10">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">New Paper Submission</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Paper Title */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="title">Paper Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Author Full Name */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="fullName">Author Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Author Mobile Number */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="mobileNumber">Author Mobile Number</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Author Email Address */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="email">Author Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Author Institution Name */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="institution">Author Institution Name</label>
                        <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* First Author Category (Dropdown) */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="firstAuthorCategory">Select First Author Category</label>
                        <select
                            id="firstAuthorCategory"
                            name="firstAuthorCategory"
                            value={formData.firstAuthorCategory}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="primary">Primary Author</option>
                            <option value="secondary">Secondary Author</option>
                            <option value="corresponding">Corresponding Author</option>
                        </select>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700" htmlFor="file">Upload Paper</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full p-3 mt-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Submit Paper
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}