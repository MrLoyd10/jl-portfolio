import { Button } from '@/components/ui/button';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import React, { useState } from 'react';

interface ContactInfoProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const contactInfo: ContactInfoProps[] = [
        {
            icon: <Mail className="w-6 h-6 text-gray-300" />,
            label: 'Email',
            value: 'purnankjadhav195@gmail.com',
        },
        {
            icon: <Phone className="w-6 h-6 text-gray-300" />,
            label: 'Phone',
            value: '+91 9099987195',
        },
        {
            icon: <MapPin className="w-6 h-6 text-gray-300" />,
            label: 'Location',
            value: 'CMR University, Banglore, India',
        },
    ];

    const handleSubmit = () => {
        // Handle form submission
        console.log('Form submitted:', formData);
        // You can add your email service integration here
        alert('Message sent successfully!');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section
            id="contact"
            className="mx-auto px-6 py-10 w-full max-w-6xl min-h-screen"
        >
            <div>
                {/* Section Header */}
                <div className="mb-4">
                    <h2 className="flex items-center gap-2 mb-2 font-bold text-2xl text-primary/80">
                        <MessageSquare className="w-6 h-6" />
                        Get In Touch
                    </h2>
                    <p className="text-gray-800 text-lg">
                        Let's connect and discuss opportunities
                    </p>
                </div>

                {/* Content Grid */}
                <div className="gap-8 grid md:grid-cols-2 mt-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h3 className="mb-6 font-bold text-2xl">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <ContactInfoItem key={index} {...info} />
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <h3 className="mb-6 font-bold text-2xl">
                            Send Me a Message
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 font-medium text-gray-800 text-sm"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        handleChange('name', e.target.value)
                                    }
                                    placeholder="What's your name?"
                                    className="bg-gray-50 px-4 py-3 border border-gray-300 focus:border-primary rounded-lg focus:ring-2 focus:ring-primary/20 w-full text-gray-800 transition-colors focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 font-medium text-gray-800 text-sm"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        handleChange('email', e.target.value)
                                    }
                                    placeholder="What's your email?"
                                    className="bg-gray-50 px-4 py-3 border border-gray-300 focus:border-primary rounded-lg focus:ring-2 focus:ring-primary/20 w-full text-gray-800 transition-colors focus:outline-none"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 font-medium text-gray-800 text-sm"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) =>
                                        handleChange('message', e.target.value)
                                    }
                                    placeholder="What would you like to say?"
                                    rows={6}
                                    className="bg-gray-50 px-4 py-3 border border-gray-300 focus:border-primary rounded-lg focus:ring-2 focus:ring-primary/20 w-full text-gray-800 transition-colors resize-none focus:outline-none"
                                />
                            </div>

                            <Button
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-blue-500 hover:from-blue-600 via-purple-500 to-purple-600 hover:to-purple-700 px-8 py-6 rounded-lg w-full font-semibold text-lg text-white uppercase transition-all"
                            >
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactInfoItem = ({ icon, label, value }: ContactInfoProps) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
                <div className="flex justify-center items-center bg-gray-700 rounded-lg w-14 h-14">
                    {icon}
                </div>
            </div>
            <div className="flex-1">
                <p className="mb-1 text-gray-600 text-sm">{label}</p>
                <p className="font-semibold text-gray-800 text-lg">{value}</p>
            </div>
        </div>
    );
};
