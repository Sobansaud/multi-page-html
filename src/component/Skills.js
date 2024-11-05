import React from 'react';

const Skills = () => {
    return (
        <div className="flex flex-col items-center p-20 max-w-2xl mx-auto bg-yellow-200 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-800">Technologies I Work With</h1>
            <h3 className="mt-4 text-lg font-semibold text-gray-600">
                <b>I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.<br />
                I also work with frameworks like React.js and Next.js.</b>
            </h3>
            <div className="flex flex-wrap justify-center mt-4">
                {['TypeScript', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Python', 'Adobe Photoshop', 'Adobe Illustrator', 'Video Editing'].map(skill => (
                    <h3 key={skill} className="bg-red-600 text-white p-2 m-2 rounded">{skill}</h3>
                ))}
            </div>
        </div>
    );
};

export default Skills;
