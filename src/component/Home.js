import React from 'react';
import homeImage from '../images/home-image.jpg';

const Home = () => {
    return (
        <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-green-300 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-red-800">Welcome to Our Website</h1>
            <h2 className="mt-4 text-2xl text-gray-600">
                Muhammad Soban
                <br />
                <span className="italic">
                    Web Developer
                    <br />
                    Graphic Designer
                    <br />
                    Video Editor
                </span>
            </h2>
            <img src={homeImage} alt="home" className="w-full max-w-xs rounded-lg shadow-md mt-4" />
        </div>
    );
};

export default Home;
