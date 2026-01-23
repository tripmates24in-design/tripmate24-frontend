import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Discover', path: '/' },
        { name: 'Trips', path: '/trips' }, // Placeholder path
        { name: 'Review', path: '/review' }, // Placeholder path
        { name: 'More', path: '/more' }, // Placeholder path
    ];

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300 border-b border-gray-100',
                scrolled || !isHome ? 'bg-white shadow-sm py-2' : 'bg-white py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                    <img src="/src/assets/logo.png" alt="TravelSide Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b absolute w-full"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-lg font-medium text-gray-900 py-3 border-b border-gray-100 hover:bg-gray-50 px-2 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
