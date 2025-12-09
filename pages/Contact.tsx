import React, { useState } from 'react';
import { SCHOOL_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enquiry = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        type: 'Contact',
        parentName: formData.name, // Mapping for consistency
        ...formData
    };

    const existingData = JSON.parse(localStorage.getItem('school_enquiries') || '[]');
    localStorage.setItem('school_enquiries', JSON.stringify([enquiry, ...existingData]));
    
    alert("Message Sent Successfully!");
    setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
  };

  return (
    <div className="bg-sky-50 min-h-screen">
       <div className="bg-gradient-to-r from-secondary to-secondaryDark py-20 text-center text-white shadow-lg">
        <h1 className="text-5xl font-extrabold mb-3 text-shadow">Contact Us</h1>
        <p className="text-white/90 text-xl">We'd Love to Hear From You</p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
                <h2 className="text-3xl font-extrabold text-primary mb-10 border-b pb-4">Get In Touch</h2>
                
                <div className="space-y-8">
                    <ContactItem 
                        icon={<MapPin className="w-6 h-6 text-white" />}
                        title="Our Location"
                        content={SCHOOL_INFO.address}
                    />
                    <ContactItem 
                        icon={<Phone className="w-6 h-6 text-white" />}
                        title="Phone Numbers"
                        content={
                            <div className="flex flex-col">
                                {SCHOOL_INFO.phone.map(p => <span key={p} className="hover:text-secondary transition-colors">{p}</span>)}
                            </div>
                        }
                    />
                    <ContactItem 
                        icon={<Mail className="w-6 h-6 text-white" />}
                        title="Email Address"
                        content={SCHOOL_INFO.email}
                    />
                    <ContactItem 
                        icon={<Clock className="w-6 h-6 text-white" />}
                        title="School Hours"
                        content="Monday to Saturday: 8:00 AM - 2:00 PM"
                    />
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 bg-gray-200 h-72 rounded-2xl flex items-center justify-center text-gray-500 shadow-inner border border-gray-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" style={{backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Ayodhya&zoom=10&size=400x400&sensor=false')"}}></div>
                    <div className="text-center relative z-10 bg-white/80 p-6 rounded-xl backdrop-blur-sm shadow-lg">
                        <MapPin className="w-10 h-10 mx-auto mb-2 text-primary animate-bounce" />
                        <p className="font-bold text-gray-800">Google Map Integration</p>
                        <p className="text-xs text-gray-500 mt-1">Station Road, Bikapur (Faizabad)</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <h2 className="text-3xl font-bold text-primary mb-8 relative z-10">Send us a Message</h2>
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="relative">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-500" 
                            required 
                            placeholder="John Doe" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-500" 
                            required 
                            placeholder="john@example.com" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                        <input 
                            type="tel" 
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-500" 
                            required 
                            placeholder="+91 99999 99999" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-500" 
                            placeholder="Admission Enquiry" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all h-32 resize-none text-gray-900 placeholder-gray-500" 
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-primary to-primaryDark text-white font-bold py-4 rounded-xl shadow-[0_5px_0_rgb(12,74,110)] hover:shadow-[0_7px_0_rgb(12,74,110)] hover:-translate-y-1 active:translate-y-[3px] active:shadow-none transition-all uppercase tracking-wide flex items-center justify-center text-lg">
                        <Send className="w-5 h-5 mr-2" /> Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode }> = ({ icon, title, content }) => (
    <div className="flex items-start group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
        <div className="w-14 h-14 bg-gradient-to-br from-secondary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div className="ml-5">
            <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
            <div className="text-gray-600 mt-1 font-medium">{content}</div>
        </div>
    </div>
);

export default Contact;