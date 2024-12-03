const Footer = () => {
    return (
        <div className="bg-[#172337] py-8 w-full text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">About</h3>
                        <ul className="text-sm text-gray-300">
                            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-500">Flipkart Stories</a></li>
                        </ul>
                    </div>

                    {/* Customer Care Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Customer Care</h3>
                        <ul className="text-sm text-gray-300">
                            <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-500">Track Orders</a></li>
                            <li><a href="#" className="hover:text-blue-500">Return Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="text-sm text-gray-300">
                            <li><a href="#" className="hover:text-blue-500">Sell on Flipkart</a></li>
                            <li><a href="#" className="hover:text-blue-500">Advertise with Us</a></li>
                            <li><a href="#" className="hover:text-blue-500">Flipkart Wholesale</a></li>
                            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <ul className="flex space-x-6 text-gray-300">
                            <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
                            <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-500">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-300 pt-6 mt-6 text-center text-sm text-gray-300">
                    <p>&copy; 2024 Flipkart Clone. All Rights Reserved.</p>
                    <div className="mt-2">
                        <a href="#" className="hover:text-blue-500">Terms of Use</a> |
                        <a href="#" className="hover:text-blue-500"> Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
