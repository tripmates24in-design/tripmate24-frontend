import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
                            <Globe className="h-8 w-8 text-blue-500" />
                            <span>TravelSide</span>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Discover the world's most breathtaking destinations with us. Your journey begins here.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/search" className="hover:text-white transition-colors">Destinations</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-blue-500" />
                                <span>123 Travel Lane, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-500" />
                                <span>hello@travelside.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} TravelSide. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
