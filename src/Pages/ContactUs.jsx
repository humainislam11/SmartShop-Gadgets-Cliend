
const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mt-9 font-bold text-center text-gray-800 mb-6">SmartShop-Gadgets Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Have any questions or need assistance? We'd love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="bg-white shadow-md rounded px-8 py-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> support@example.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +9 (123) 936-7090
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> 123 Main Street, Anytown, USA
            </p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="text-red-500 hover:text-red-700">
                Instagram
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
