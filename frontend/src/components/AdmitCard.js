import React, { useState } from 'react';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdmitCard = () => {
    const [selectedSemester, setSelectedSemester] = useState('1');
    const [selectedExamType, setSelectedExamType] = useState('Mid Semester');

    const studentInfo = {
        name: 'John Doe',
        rollNo: '2020BTCSE001',
        program: 'B.Tech Computer Science and Engineering',
        branch: 'Computer Science',
        photo: 'path/to/photo.jpg', // You can add a default photo path
    };

    const examSchedules = {
        '1': [
            { subject: 'CS101: Introduction to Programming', date: '2024-03-15', time: '10:00 AM - 12:00 PM', venue: 'Room 101', type: 'Mid Semester' },
            { subject: 'MA101: Engineering Mathematics I', date: '2024-03-17', time: '10:00 AM - 12:00 PM', venue: 'Room 102', type: 'Mid Semester' },
            { subject: 'PH101: Engineering Physics', date: '2024-03-19', time: '10:00 AM - 12:00 PM', venue: 'Room 103', type: 'Mid Semester' },
            { subject: 'CS101: Introduction to Programming', date: '2024-05-10', time: '09:00 AM - 12:00 PM', venue: 'Hall 1', type: 'End Semester' },
            { subject: 'MA101: Engineering Mathematics I', date: '2024-05-12', time: '09:00 AM - 12:00 PM', venue: 'Hall 2', type: 'End Semester' },
            { subject: 'PH101: Engineering Physics', date: '2024-05-14', time: '09:00 AM - 12:00 PM', venue: 'Hall 3', type: 'End Semester' },
        ],
        '2': [
            { subject: 'CS201: Data Structures', date: '2024-03-16', time: '10:00 AM - 12:00 PM', venue: 'Room 201', type: 'Mid Semester' },
            { subject: 'MA201: Engineering Mathematics II', date: '2024-03-18', time: '10:00 AM - 12:00 PM', venue: 'Room 202', type: 'Mid Semester' },
            { subject: 'EC201: Digital Electronics', date: '2024-03-20', time: '10:00 AM - 12:00 PM', venue: 'Room 203', type: 'Mid Semester' },
            { subject: 'CS201: Data Structures', date: '2024-05-11', time: '09:00 AM - 12:00 PM', venue: 'Hall 1', type: 'End Semester' },
            { subject: 'MA201: Engineering Mathematics II', date: '2024-05-13', time: '09:00 AM - 12:00 PM', venue: 'Hall 2', type: 'End Semester' },
            { subject: 'EC201: Digital Electronics', date: '2024-05-15', time: '09:00 AM - 12:00 PM', venue: 'Hall 3', type: 'End Semester' },
        ],
    };

    const filteredExams = examSchedules[selectedSemester].filter(exam => exam.type === selectedExamType);

    const downloadAdmitCard = () => {
        const pdf = new jsPDF();
        
        // Add header
        pdf.setFontSize(16);
        pdf.text('ABC INSTITUIONS', 105, 15, { align: 'center' });
        pdf.setFontSize(14);
        pdf.text('ADMIT CARD', 105, 25, { align: 'center' });
        pdf.setFontSize(12);
        pdf.text(`${selectedExamType} Examination ${new Date().getFullYear()}`, 105, 35, { align: 'center' });

        // Add student details
        pdf.setFontSize(10);
        pdf.text(`Name: ${studentInfo.name}`, 15, 50);
        pdf.text(`Roll Number: ${studentInfo.rollNo}`, 15, 57);
        pdf.text(`Program: ${studentInfo.program}`, 15, 64);
        pdf.text(`Branch: ${studentInfo.branch}`, 15, 71);
        pdf.text(`Semester: ${selectedSemester}`, 15, 78);

        // Add exam schedule table
        pdf.autoTable({
            head: [['Subject', 'Date', 'Time', 'Venue']],
            body: filteredExams.map(exam => [exam.subject, exam.date, exam.time, exam.venue]),
            startY: 90,
            theme: 'grid',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [44, 62, 80], textColor: 255 },
            alternateRowStyles: { fillColor: [241, 245, 249] },
        });

        // Add footer
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.setFontSize(8);
            pdf.text('Controller of Examinations', 150, pdf.internal.pageSize.height - 10);
            pdf.text('(This is a computer generated document)', 105, pdf.internal.pageSize.height - 5, { align: 'center' });
        }

        pdf.save(`admit_card_${studentInfo.rollNo}_${selectedSemester}_${selectedExamType}.pdf`);
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Admit Card</h1>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Select Semester:</label>
                <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                >
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Select Exam Type:</label>
                <select
                    value={selectedExamType}
                    onChange={(e) => setSelectedExamType(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                >
                    <option value="Mid Semester">Mid Semester</option>
                    <option value="End Semester">End Semester</option>
                </select>
            </div>
            <button
                onClick={downloadAdmitCard}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
                Download Admit Card
            </button>
        </div>
    );
};
export default AdmitCard;