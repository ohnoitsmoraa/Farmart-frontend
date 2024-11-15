import React from 'react'
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center p-4 min-h-[80vh]">
      <div className="mb-4 md:mb-0 md:flex-1 md:mr-4 flex items-center justify-center">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src="https://media.istockphoto.com/id/1390689392/photo/white-paper-written-with-text-contact-us.jpg?s=612x612&w=0&k=20&c=fiLfi5gPqklkKrjFG7Raf8zdpFY48o2N3KUV1YGkXyI="
          alt="Contact"
        />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="font-extrabold text-2xl mb-4 text-center">Get in touch with FarmArt</h1>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-lg mb-1" htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-1" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-1" htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded-lg h-32 resize-none"
              placeholder="Your message"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[100px] bg-gradient-to-r from-green-800 to-green-900 text-white p-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;