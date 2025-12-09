import React from 'react';
import { FileText, Download } from 'lucide-react';
import { DISCLOSURE_DOCUMENTS } from '../constants';

const Disclosure: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-primary py-12 text-center text-white">
        <h1 className="text-3xl font-bold mb-2">Mandatory Public Disclosure</h1>
        <p className="text-gray-300 text-sm">Appendix - X (As per CBSE guidelines)</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISCLOSURE_DOCUMENTS.map((doc, index) => (
                <DisclosureCard key={index} title={doc.title} url={doc.url} />
            ))}
        </div>
      </div>
    </div>
  );
};

const DisclosureCard: React.FC<{ title: string; url: string }> = ({ title, url }) => (
    <div className="border border-gray-500 p-6 rounded-lg hover:shadow-lg transition flex flex-col justify-between h-40 group">
        <div className="flex items-start">
            <FileText className="text-secondary w-6 h-6 mr-2 flex-shrink-0" />
            <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="self-end text-sm text-primary font-bold flex items-center hover:underline mt-4 group-hover:text-secondary transition-colors"
        >
            View Details <Download className="w-4 h-4 ml-1" />
        </a>
    </div>
);

export default Disclosure;