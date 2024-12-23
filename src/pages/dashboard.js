import React, { useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    highSchool: '',
    twelfth: '',
    secondarySchool: '',
    tenth: '',
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [applications] = useState([
    {
      company: 'Zarity Health',
      profile: 'Frontend Developer Internship',
      appliedOn: "5 Dec' 24",
      applicants: 1586,
      status: 'Applied',
      action: 'Missing skill',
    },
    {
      company: 'NayePankh Foundation',
      profile: 'Social Entrepreneurship Internship',
      appliedOn: "5 Dec' 24",
      applicants: 84,
      status: 'Not selected',
      action: '',
    },
    // Add more application data here...
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

        {!isSubmitted ? (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Section */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <div>
                <img
                  src={
                    profilePhoto
                      ? profilePhoto
                      : 'https://via.placeholder.com/150'
                  }
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="fileInput"
                  onChange={handlePhotoUpload}
                />
                <button
                  type="button"
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  Upload Photo
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full md:w-2/3">
              <form onSubmit={handleSubmit}>
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Age', name: 'age', type: 'number' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Phone Number', name: 'phone', type: 'tel' },
                  { label: 'High School', name: 'highSchool', type: 'text' },
                  {
                    label: '12th Percentage/CGPA',
                    name: 'twelfth',
                    type: 'text',
                  },
                  {
                    label: 'Secondary School',
                    name: 'secondarySchool',
                    type: 'text',
                  },
                  { label: '10th Percentage/CGPA', name: 'tenth', type: 'text' },
                ].map(({ label, name, type }) => (
                  <div key={name} className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                  </div>
                ))}

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-200"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Display Profile Photo */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <img
                src={
                  profilePhoto
                    ? profilePhoto
                    : 'https://via.placeholder.com/150'
                }
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
              />
            </div>

            {/* Display Submitted Details */}
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold mb-4">Submitted Details</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <p>
                    <span className="font-semibold">Name:</span> {formData.name}
                  </p>
                  <p>
                    <span className="font-semibold">Age:</span> {formData.age}
                  </p>
                  <p>
                    <span className="font-semibold">Gender:</span>{' '}
                    {formData.gender}
                  </p>
                </div>
                <div className="flex gap-4">
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    {formData.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{' '}
                    {formData.phone}
                  </p>
                </div>
                <div className="flex gap-4">
                  <p>
                    <span className="font-semibold">High School:</span>{' '}
                    {formData.highSchool}
                  </p>
                  <p>
                    <span className="font-semibold">12th %/CGPA:</span>{' '}
                    {formData.twelfth}
                  </p>
                </div>
                <div className="flex gap-4">
                  <p>
                    <span className="font-semibold">Secondary School:</span>{' '}
                    {formData.secondarySchool}
                  </p>
                  <p>
                    <span className="font-semibold">10th %/CGPA:</span>{' '}
                    {formData.tenth}
                  </p>
                </div>
              </div>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleEdit}
              >
                Edit Your Details
              </button>
            </div>
          </div>
        )}
        {/* My Applications */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">My Applications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-50 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                  <th className="py-2 px-4">Company</th>
                  <th className="py-2 px-4">Profile</th>
                  <th className="py-2 px-4">Applied On</th>
                  <th className="py-2 px-4">Number of Applicants</th>
                  <th className="py-2 px-4">Application Status</th>
                  <th className="py-2 px-4">Review Application</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 border-b hover:bg-gray-100"
                  >
                    <td className="py-2 px-4">{app.company}</td>
                    <td className="py-2 px-4">{app.profile}</td>
                    <td className="py-2 px-4">{app.appliedOn}</td>
                    <td className="py-2 px-4">{app.applicants}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          app.status === 'Applied'
                            ? 'bg-blue-100 text-blue-600'
                            : app.status === 'Hired'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      {app.action ? (
                        <a
                          href="#"
                          className="text-blue-500 hover:underline"
                        >
                          {app.action}
                        </a>
                      ) : (
                        '--'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
