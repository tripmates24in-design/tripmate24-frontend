import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { destinations, reviews } from '../data/mockData';
import { Star, MapPin, Clock, Users, Wifi, Coffee, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DestinationDetail: React.FC = () => {
    const { id } = useParams();
    const destination = destinations.find(d => d.id === id);
    const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'reviews'>('overview');
    const [bookingData, setBookingData] = useState({
        guests: 1,
        date: '',
        name: '',
        email: ''
    });

    if (!destination) {
        return (
            <Layout>
                <div className="pt-32 text-center text-2xl font-bold text-gray-500">Destination not found</div>
            </Layout>
        );
    }

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(`Booking confirmed for ${destination.title}! Check your email.`);
    };

    return (
        <Layout>
            {/* Hero Gallery */}
            <div className="relative h-[60vh] bg-gray-900">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full w-full"
                >
                    {destination.gallery.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative w-full h-full">
                                <img src={img} alt={`${destination.title} ${idx + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute bottom-10 left-0 right-0 z-10 container mx-auto px-4 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{destination.title}</h1>
                    <div className="flex items-center gap-4 text-lg">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-5 w-5 text-primary" />
                            {destination.location}, {destination.country}
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            {destination.rating} ({destination.reviewsCount} reviews)
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Tabs */}
                    <div className="flex gap-8 border-b border-gray-200 mb-8">
                        {['overview', 'itinerary', 'reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`pb-4 text-lg font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        {activeTab === 'overview' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <h2 className="text-2xl font-bold mb-4">About the trip</h2>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{destination.description}</p>

                                <h3 className="text-xl font-bold mb-4">Highlights</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {destination.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl text-primary">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            {highlight}
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-4">Amenities</h3>
                                <div className="flex flex-wrap gap-4">
                                    {destination.amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-gray-600">
                                            {amenity === 'Wifi' && <Wifi className="h-4 w-4" />}
                                            {amenity === 'Breakfast' && <Coffee className="h-4 w-4" />}
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'itinerary' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <div className="space-y-8">
                                    {[1, 2, 3].map((day) => (
                                        <div key={day} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                                    {day}
                                                </div>
                                                <div className="w-0.5 h-full bg-gray-200 my-2" />
                                            </div>
                                            <div className="pb-8">
                                                <h3 className="text-xl font-bold mb-2">Day {day}: Exploration</h3>
                                                <p className="text-gray-600">
                                                    Start your day with a delicious local breakfast. Then head out to explore the landmarks and hidden gems of the area using our curated guide.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeTab === 'reviews' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <div className="space-y-6">
                                    {reviews.map((review) => (
                                        <div key={review.id} className="bg-gray-50 p-6 rounded-2xl">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex gap-4">
                                                    <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                                                    <div>
                                                        <div className="font-bold text-gray-900">{review.author}</div>
                                                        <div className="text-sm text-gray-500">{review.date}</div>
                                                    </div>
                                                </div>
                                                <div className="flex text-yellow-500">
                                                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 italic">"{review.comment}"</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Booking Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <span className="text-gray-500 text-sm">Price per person</span>
                                <div className="text-3xl font-bold text-primary">${destination.price}</div>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <Clock className="h-4 w-4" />
                                {destination.duration}
                            </div>
                        </div>

                        <form onSubmit={handleBooking} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    value={bookingData.date}
                                    onChange={e => setBookingData({ ...bookingData, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                                    <input
                                        type="number"
                                        min="1"
                                        required
                                        className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        value={bookingData.guests}
                                        onChange={e => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    value={bookingData.name}
                                    onChange={e => setBookingData({ ...bookingData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    value={bookingData.email}
                                    onChange={e => setBookingData({ ...bookingData, email: e.target.value })}
                                />
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${destination.price * bookingData.guests}</span>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                                Book Now
                            </button>
                            <p className="text-center text-xs text-gray-400">You won't be charged yet</p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DestinationDetail;
