import React from 'react';

const Universities = () => {
    const universities = [
        {
            name: "University A",
            course: "Computer Science",
            fees: "$10,000 per semester",
            duration: "4 years",
            admissionMode: "Online Entrance Exam",
            formLink: "https://example.com/form-a",
            image: "/images/c1.jpeg", // Replace with actual image URL
        },
        {
            name: "University B",
            course: "Mechanical Engineering",
            fees: "$8,500 per semester",
            duration: "4 years",
            admissionMode: "Merit-based",
            formLink: "https://example.com/form-b",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "University C",
            course: "Business Administration",
            fees: "$12,000 per semester",
            duration: "3 years",
            admissionMode: "Direct Admission",
            formLink: "https://example.com/form-c",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "University D",
            course: "Electrical Engineering",
            fees: "$9,000 per semester",
            duration: "4 years",
            admissionMode: "Online Entrance Exam",
            formLink: "https://example.com/form-d",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "University E",
            course: "Medicine",
            fees: "$15,000 per semester",
            duration: "5 years",
            admissionMode: "Entrance Exam",
            formLink: "https://example.com/form-e",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "University F",
            course: "Law",
            fees: "$11,000 per semester",
            duration: "3 years",
            admissionMode: "Merit-based",
            formLink: "https://example.com/form-f",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "University G",
            course: "Architecture",
            fees: "$10,000 per semester",
            duration: "5 years",
            admissionMode: "Direct Admission",
            formLink: "https://example.com/form-g",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "University H",
            course: "Civil Engineering",
            fees: "$8,000 per semester",
            duration: "4 years",
            admissionMode: "Entrance Exam",
            formLink: "https://example.com/form-h",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="bg-gray-300 py-10 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl">
                {universities.map((university, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105 ${
                            index === 0
                                ? "bg-cover bg-center text-black"
                                : "bg-white"
                        }`}
                        style={
                            index === 0
                                ? { backgroundImage: `url(${university.image})` }
                                : {}
                        }
                    >
                        <img
                            src={university.image}
                            alt={`${university.name} logo`}
                            className="w-20 h-20 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">{university.name}</h3>
                        <p className="mt-2">
                            <strong>Course:</strong> {university.course}
                        </p>
                        <p className="mt-2">
                            <strong>Fees:</strong> {university.fees}
                        </p>
                        <p className="mt-2">
                            <strong>Duration:</strong> {university.duration}
                        </p>
                        <p className="mt-2">
                            <strong>Mode of Admission:</strong> {university.admissionMode}
                        </p>
                        <a
                            href={university.formLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Universities;
