import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { destinations } from '../data/mockData';
import { Star, MapPin, Filter, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

const Search: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialQuery = searchParams.get('destination') || '';

    const [filters, setFilters] = useState({
        priceRange: [0, 5000],
        minRating: 0,
        categories: [] as string[]
    });

    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const filteredDestinations = useMemo(() => {
        return destinations.filter(dest => {
            const matchesQuery = dest.title.toLowerCase().includes(initialQuery.toLowerCase()) ||
                dest.location.toLowerCase().includes(initialQuery.toLowerCase());
            const matchesPrice = dest.price >= filters.priceRange[0] && dest.price <= filters.priceRange[1];
            const matchesRating = dest.rating >= filters.minRating;
            const matchesCategory = filters.categories.length === 0 || filters.categories.includes(dest.category);

            return matchesQuery && matchesPrice && matchesRating && matchesCategory;
        });
    }, [initialQuery, filters]);

    const categories = ['beach', 'mountain', 'city', 'adventure', 'cultural'];

    const toggleCategory = (cat: string) => {
        setFilters(prev => ({
            ...prev,
            categories: prev.categories.includes(cat)
                ? prev.categories.filter(c => c !== cat)
                : [...prev.categories, cat]
        }));
    };

    return (
        <Layout>
            <div className="bg-gray-900 pt-28 pb-12 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2">Find Your Perfect Trip</h1>
                    <p className="text-gray-400">Showing {filteredDestinations.length} results</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 flex gap-8">
                {/* Desktop Filters Sidebar */}
                <div className="hidden lg:block w-64 flex-shrink-0 space-y-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Price Range</h3>
                        <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            className="w-full accent-blue-600"
                            value={filters.priceRange[1]}
                            onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>$0</span>
                            <span>${filters.priceRange[1]}+</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.categories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                        className="rounded text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="capitalize text-gray-700">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Rating</h3>
                        {[5, 4, 3].map(star => (
                            <label key={star} className="flex items-center gap-2 mb-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="rating"
                                    checked={filters.minRating === star}
                                    onChange={() => setFilters({ ...filters, minRating: star })}
                                    className="text-blue-600 focus:ring-blue-500"
                                />
                                <div className="flex text-yellow-500">
                                    {[...Array(star)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                </div>
                                <span className="text-sm text-gray-500">& Up</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Mobile Filters Toggle */}
                <button
                    className="lg:hidden fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg"
                    onClick={() => setShowMobileFilters(true)}
                >
                    <Filter className="h-6 w-6" />
                </button>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredDestinations.map(dest => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={dest.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="relative h-48">
                                    <img src={dest.image} alt={dest.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                        {dest.rating}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{dest.title}</h3>
                                        <span className="text-blue-600 font-bold">${dest.price}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                                        <MapPin className="h-3 w-3" />
                                        {dest.location}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {dest.amenities.slice(0, 3).map((amenity, i) => (
                                            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/destination/${dest.id}`}
                                        className="block w-full text-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 rounded-xl transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {filteredDestinations.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-gray-400">No destinations found</h3>
                            <p className="text-gray-400">Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Filters Modal */}
            <AnimatePresence>
                {showMobileFilters && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 lg:hidden flex justify-end"
                        onClick={() => setShowMobileFilters(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            className="bg-white w-80 h-full p-6 overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-bold">Filters</h2>
                                <button onClick={() => setShowMobileFilters(false)}>
                                    <X className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>
                            {/* Mobile sidebar content same as desktop - simplified for brevity */}
                            <div>
                                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                                <input
                                    type="range"
                                    min="0"
                                    max="5000"
                                    step="100"
                                    className="w-full accent-blue-600"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-2 mb-8">
                                    <span>$0</span>
                                    <span>${filters.priceRange[1]}+</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-bold text-lg mb-4">Categories</h3>
                                <div className="space-y-3">
                                    {categories.map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={filters.categories.includes(cat)}
                                                onChange={() => toggleCategory(cat)}
                                                className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="capitalize text-gray-700 text-lg">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-8">
                                <h3 className="font-bold text-lg mb-4">Rating</h3>
                                {[5, 4, 3].map(star => (
                                    <label key={star} className="flex items-center gap-3 mb-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating-mobile"
                                            checked={filters.minRating === star}
                                            onChange={() => setFilters({ ...filters, minRating: star })}
                                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                        />
                                        <div className="flex text-yellow-500">
                                            {[...Array(star)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowMobileFilters(false)}
                                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg"
                            >
                                Show Results
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default Search;
