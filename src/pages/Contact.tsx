import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Message sent! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Layout>
            <section className="bg-gray-900 text-white py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a question? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
                        {/* Contact Info & Map placeholder */}
                        <div className="bg-blue-600 p-12 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                                <p className="text-blue-100 mb-12 leading-relaxed">
                                    Fill out the form and our team will try to get back to you within 24 hours.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-lg">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-lg">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <span>hello@travelside.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-lg">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <span>123 Travel Lane, New York, NY</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2" />
                        </div>

                        {/* Form */}
                        <div className="p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-32 resize-none"
                                        placeholder="Tell us what you need help with..."
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                    Send Message <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
