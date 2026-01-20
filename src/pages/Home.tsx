import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Search, MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { destinations, reviews } from '../data/mockData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        destination: '',
        date: '',
        guests: 1
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`/search?destination=${searchParams.destination}`);
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900 z-0 overflow-hidden">
                    {/* Animated background elements could go here */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        Explore the World's<br />
                        <span className="text-blue-300">Hidden Gems</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
                    >
                        Discover breathtaking destinations and create unforgettable memories.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-4 rounded-2xl shadow-xl max-w-4xl mx-auto"
                    >
                        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                <MapPin className="text-blue-500" />
                                <div className="text-left flex-1">
                                    <label className="block text-xs text-gray-500 font-medium">Destination</label>
                                    <input
                                        type="text"
                                        placeholder="Where to?"
                                        className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder-gray-400"
                                        value={searchParams.destination}
                                        onChange={(e) => setSearchParams({ ...searchParams, destination: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                <Calendar className="text-blue-500" />
                                <div className="text-left flex-1">
                                    <label className="block text-xs text-gray-500 font-medium">Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-transparent outline-none text-gray-900 font-medium"
                                        value={searchParams.date}
                                        onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                                <Users className="text-blue-500" />
                                <div className="text-left flex-1">
                                    <label className="block text-xs text-gray-500 font-medium">Travelers</label>
                                    <input
                                        type="number"
                                        min="1"
                                        className="w-full bg-transparent outline-none text-gray-900 font-medium"
                                        value={searchParams.guests}
                                        onChange={(e) => setSearchParams({ ...searchParams, guests: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                                <Search className="h-5 w-5" />
                                Search
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Destinations</h2>
                            <p className="text-gray-600">Most popular places recommended by our travelers</p>
                        </div>
                        <Link to="/search" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                            View All <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {destinations.map((dest) => (
                            <SwiperSlide key={dest.id}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={dest.image}
                                            alt={dest.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 flex items-center gap-1">
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                            {dest.rating}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{dest.title}</h3>
                                            <span className="text-blue-600 font-bold">${dest.price}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 mb-4">
                                            <MapPin className="h-4 w-4" />
                                            <span className="text-sm">{dest.location}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                                            {dest.description}
                                        </p>
                                        <Link
                                            to={`/destination/${dest.id}`}
                                            className="block w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900 font-semibold text-center py-3 rounded-xl transition-colors"
                                        >
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">10k+</div>
                            <div className="text-blue-200">Happy Travelers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-blue-200">Destinations</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-blue-200">Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">4.9</div>
                            <div className="text-blue-200">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Travelers Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.concat(reviews).slice(0, 3).map((review) => (
                            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={clsx("h-4 w-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{review.comment}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <div className="font-bold text-gray-900">{review.author}</div>
                                        <div className="text-sm text-gray-500">{review.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};



export default Home;
