import React from 'react';
import Layout from '../components/layout/Layout';

import { Shield, Users, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gray-900 text-white py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About TravelSide</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We are passionate about connecting travelers with the world's most incredible experiences.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Founded in 2024, TravelSide started with a simple mission: to make travel planning as enjoyable as the trip itself. Bypassing the clutter of traditional booking sites, we focus on curated quality and authentic experiences.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, we help thousands of travelers explore hidden gems across the globe, backed by 24/7 support and a community of passionate explorers.
                        </p>
                    </div>
                    <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                            alt="Team working"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: 'Secure Booking', desc: 'Your payments and data are always protected with bank-level security.' },
                            { icon: Heart, title: 'Curated Trips', desc: 'We hand-pick every hotel and activity to ensure quality.' },
                            { icon: Users, title: '24/7 Support', desc: 'Our team is always just a click away to help you.' },
                            { icon: Award, title: 'Best Prices', desc: 'We guarantee the best rates for our exclusive packages.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                                <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How do I cancel a booking?', a: 'You can cancel any booking up to 48 hours before the trip date for a full refund through your account dashboard.' },
                            { q: 'Are flights included?', a: 'Our packages currently focus on accommodation and experiences. Flights must be booked separately.' },
                            { q: 'Do you offer travel insurance?', a: 'Yes, we partner with top insurers to offer optional coverage during the checkout process.' }
                        ].map((item, i) => (
                            <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                                <summary className="flex justify-between items-center p-6 font-medium cursor-pointer list-none">
                                    <span>{item.q}</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <div className="text-gray-600 px-6 pb-6">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
