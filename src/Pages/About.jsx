
const About = () => {
    return (
        <div className="about-section bg-gray-100 py-10 px-5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl mt-14 font-bold text-gray-800 mb-5">About SmartShop Gadget</h2>
                <p className="text-gray-600 mb-8">
                    Welcome to <span className="font-semibold text-gray-900">SmartShop Gadget</span>, your ultimate destination for innovative, 
                    high-quality, and practical tech accessories! At SmartShop Gadget, we are passionate about bringing the latest technology closer to you. 
                    From cutting-edge gadgets to essential accessories, we aim to provide everything you need to stay ahead in today’s fast-paced digital world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us?</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><span className="font-semibold text-gray-900">Top-Notch Quality:</span> We curate only the best products from trusted brands.</li>
                            <li><span className="font-semibold text-gray-900">Wide Range of Products:</span> Everything from smart devices to essential peripherals.</li>
                            <li><span className="font-semibold text-gray-900">Customer-Centric Service:</span> Your satisfaction is our top priority.</li>
                            <li><span className="font-semibold text-gray-900">Affordable Prices:</span> Premium gadgets at competitive prices.</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                        <p className="text-gray-600">
                            To empower tech enthusiasts and everyday users with the tools they need to simplify life, enhance productivity, and stay connected in a smarter way.
                        </p>
                        <p className="mt-3 text-gray-600">
                            At <span className="font-semibold text-gray-900">SmartShop Gadget</span>, we don’t just sell gadgets—we deliver innovation, style, and convenience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;