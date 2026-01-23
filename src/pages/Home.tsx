
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, Star, Bed, Utensils, Camera, Plane, Home as HomeIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { destinations } from '../data/mockData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/search?destination=${searchQuery}`);
    };

    const categories = [
        { name: 'Hotels', icon: Bed },
        { name: 'Things to Do', icon: Camera },
        { name: 'Restaurants', icon: Utensils },
        { name: 'Flights', icon: Plane },
        { name: 'Vacation Rentals', icon: HomeIcon },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 md:px-0 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-12"
                    >
                        India's first AI-human hybrid travel consultant platform
                    </motion.h1>

                    {/* Category Tabs */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-8 overflow-x-auto pb-4">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center gap-2 min-w-[80px] group"
                            >
                                <div className="p-3 rounded-full border border-gray-200 group-hover:border-black transition-colors">
                                    <cat.icon className="h-6 w-6 text-gray-700" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{cat.name}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-3xl mx-auto shadow-xl rounded-full"
                    >
                        <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full border border-gray-300 hover:shadow-2xl transition-shadow p-2 pl-6">
                            <Search className="h-6 w-6 text-gray-500 mr-4" />
                            <input
                                type="text"
                                placeholder="Places to go, things to do, hotels..."
                                className="flex-1 outline-none text-lg text-gray-900 placeholder-gray-500 bg-transparent h-12"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all"
                            >
                                Search
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2024's Award Winning Destinations</h2>
                        <p className="text-gray-600 mt-2">Travelers' Choice Best of the Best</p>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="pb-12 !pl-1" // minimal padding for shadow clipping
                    >
                        {destinations.map((dest) => (
                            <SwiperSlide key={dest.id}>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                                        <img
                                            src={dest.image}
                                            alt={dest.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-900 flex items-center gap-1">
                                            <Star className="h-3 w-3 text-accent fill-accent" /> {/* Gold Accent */}
                                            {dest.rating}
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <h3 className="text-white font-bold text-xl text-shadow-lg">{dest.title}</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 line-clamp-2">{dest.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* "Ways to tour" Section - replacing Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Ways to tour {destinations[0]?.location || 'Europe'}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Private Tours</h3>
                            <p className="text-gray-600 text-sm">Explore at your own pace with a dedicated guide.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Group Adventures</h3>
                            <p className="text-gray-600 text-sm">Join like-minded travelers on curated experiences.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Calendar className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Day Trips</h3>
                            <p className="text-gray-600 text-sm">Perfect excursions to complement your stay.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* More to explore - Horizontal Scroll */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">More to explore</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {destinations.slice(0, 6).map((dest, idx) => (
                            <Link to={`/destination/${dest.id}`} key={idx} className="group flex gap-4 items-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                                    <img src={dest.image} alt={dest.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{dest.title}</h4>
                                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`h-2 w-2 rounded-full ${i < Math.floor(dest.rating) ? 'bg-primary' : 'bg-gray-300'}`} />
                                        ))}
                                        <span className="ml-1">{dest.reviewsCount} reviews</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};



export default Home;
