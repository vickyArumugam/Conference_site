import React, { useState } from 'react';

const PaperSubmissionForm = (props) => {
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [paperTitle, setPaperTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [category, setCategory] = useState('Academicians');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('paper_title', paperTitle);
    formData.append('author_name', authorName);
    formData.append('mobile_no', mobileNo);
    formData.append('email', email);
    formData.append('institution', institution);
    formData.append('category', category);

    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const response = await fetch('http://localhost/mailapp/mail.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage('Form submitted successfully!');

        // Reset form fields
        setPaperTitle('');
        setAuthorName('');
        setMobileNo('');
        setEmail('');
        setInstitution('');
        setCategory('Academicians');
        setSelectedFile(null);
        setFileName(null);

        // Clear file input field
        document.getElementById('fileInput').value = '';
      } else {
        setSuccessMessage('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <div className='w-full flex items-center justify-center bg-gray-100 p-4 md:p-8'>
        <form
          className='bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-lg md:max-w-2xl w-full space-y-6 my-10 md:my-20'
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h2 className='text-xl md:text-2xl font-semibold text-center text-blue-600'>
            Submit Your Paper
          </h2>

          <div>
            <label className='block font-medium'>Enter Paper Title</label>
            <input
              type='text'
              required
              value={paperTitle}
              onChange={(e) => setPaperTitle(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium'>Enter First Author Full Name</label>
            <input
              type='text'
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium'>Enter First Author Mobile Number</label>
            <input
              type='text'
              required
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium'>Enter First Author Email Address</label>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium'>Enter First Author Institution Name</label>
            <input
              type='text'
              required
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className='mt-1 w-full px-3 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <div>
            <label className='block font-medium'>Select First Author Category</label>
            <select
              className='appearance-none mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='Academicians'>Academicians</option>
              <option value='Students & PG/Ph.D Scholar'>Students & PG/Ph.D Scholar</option>
              <option value='Industry Delegates'>Industry Delegates</option>
              <option value='Overseas Delegates'>Overseas Delegates</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className='block font-medium'>Upload Paper</label>
            <div className='flex items-center mt-1'>
              <label className={`flex-grow px-4 py-2 border border-gray-300 rounded-lg ${fileName ? 'text-gray-700' : 'text-red-500'}`}>
                {fileName || 'No file chosen'}
              </label>
              <input
                type='file'
                required
                className='hidden'
                id='fileInput'
                onChange={handleFileChange}
              />
              <label htmlFor='fileInput' className='ml-4 px-4 py-2 rounded-lg cursor-pointer bg-amber-200'>
                Choose File
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full py-2 rounded-lg transition duration-200 bg-blue-600 text-white hover:bg-blue-700'
          >
            Submit Paper
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-center text-green-600 font-medium mt-4">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PaperSubmissionForm;
