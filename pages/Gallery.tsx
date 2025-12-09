import React, { useState } from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Campus', 'Events', 'Sports', 'Classroom'];

  // Mock images array repeated for demo
  const galleryImages = [
    { src: IMAGES.classroom, category: 'Classroom' },
    { src: IMAGES.sports, category: 'Sports' },
    { src: IMAGES.lab, category: 'Campus' },
    { src: IMAGES.music, category: 'Events' },
    { src: 'https://picsum.photos/id/1/800/600', category: 'Campus' },
    { src: 'https://picsum.photos/id/10/800/600', category: 'Campus' },
    { src: 'https://picsum.photos/id/20/800/600', category: 'Classroom' },
    { src: 'https://picsum.photos/id/73/800/600', category: 'Events' },
  ];

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Photo Gallery</h1>
        <p className="text-gray-300">Glimpses of Life at Jyoti Public School</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full font-semibold transition ${
                        activeTab === tab 
                        ? 'bg-secondary text-white shadow-md' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-lg shadow-sm cursor-pointer aspect-square">
                    <img 
                        src={img.src} 
                        alt="Gallery Item" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold tracking-widest uppercase text-sm border-b-2 border-secondary pb-1">View</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
