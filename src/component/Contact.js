import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center p-6 max-w-2xl mx-auto bg-blue-300 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-black">Contact Us</h1>
            <section className="mt-4">
                <h2 className="text-2xl">Get In Touch</h2>
                <p className="mt-2 italic"><b>Drop me a line, give me a call, or send me a message.</b></p>
                <ul className="mt-4">
                    <li className="flex items-center mt-2">
                        <span className="mr-2 text-blue-600"><i className="fa fa-phone" aria-hidden="true"></i></span>
                        <span>0336-3538877</span>
                    </li>
                    <li className="flex items-center mt-2">
                        <span className="mr-2 text-blue-600"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        <span>sobansaud3@gmail.com</span>
                    </li>
                    <li className="flex items-center mt-2">
                        <span className="mr-2 text-blue-600"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span>https://www.linkedin.com/in/soban-saud</span>
                    </li>
                    <li className="flex items-center mt-2">
                        <span className="mr-2 text-blue-600"><i className="fa fa-youtube" aria-hidden="true"></i></span>
                        <span>http://www.youtube.com/@all-rounder-lifewithmemons2700</span>
                    </li>
                    <li className="flex items-center mt-2">
                        <span className="mr-2 text-blue-600"><i className="fa fa-globe" aria-hidden="true"></i></span>
                        <span>Karachi, Pakistan</span>
                    </li>
                </ul>
                <form className="mt-4 flex flex-col">
                    <input type="text" placeholder="Name" required className="p-2 mb-2 border rounded" />
                    <input type="email" placeholder="Email" required className="p-2 mb-2 border rounded" />
                    <textarea placeholder="Message" required className="p-2 mb-2 border rounded" />
                    <button type="submit" className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
