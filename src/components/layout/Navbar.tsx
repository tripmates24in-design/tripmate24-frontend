import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
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
        { name: 'Home', path: '/' },
        { name: 'Destinations', path: '/search' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300',
                scrolled || !isHome ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                    <Globe className="h-8 w-8" />
                    <span className={clsx('hidden sm:block', scrolled || !isHome ? 'text-gray-900' : 'text-white')}>TravelSide</span>
                </Link>
                <div className={clsx('sm:hidden font-bold text-xl', scrolled || !isHome ? 'text-gray-900' : 'text-white')}>TravelSide</div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                'font-medium transition-colors hover:text-blue-500',
                                scrolled || !isHome ? 'text-gray-700' : 'text-white/90 hover:text-white'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20">
                        Sign In
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={clsx('md:hidden p-2', scrolled || !isHome ? 'text-gray-900' : 'text-white')}
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
                                    className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium mt-2">
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
