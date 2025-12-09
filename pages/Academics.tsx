import React from 'react';
import { CO_CURRICULAR, SCHOOL_INFO } from '../constants';
import { Calendar, AlertCircle, Star } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <div className="bg-sky-50 min-h-screen">
      <div className="bg-gradient-to-r from-primaryDark to-primary py-20 text-center text-white shadow-lg">
        <h1 className="text-4xl font-extrabold mb-3 text-shadow">Academics & Student Life</h1>
        <p className="text-sky-100 text-lg">Nurturing Minds, Building Character</p>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* Attendance Policy */}
        <section className="bg-white p-8 rounded-2xl shadow-card border-l-8 border-red-500">
            <div className="flex items-center mb-8">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Attendance Policy</h2>
            </div>
            <div className="bg-red-50/50 p-6 rounded-xl">
                <ul className="space-y-4 text-gray-800 text-lg">
                    <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-3 mt-1 text-xl">•</span>
                        Attendance on the day before and first day after vacations is <strong className="ml-1 text-red-700">compulsory</strong>.
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-3 mt-1 text-xl">•</span>
                        Leave on these days is granted only with the Principal's permission and prior written application.
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-3 mt-1 text-xl">•</span>
                        After any absence, a letter from parents/guardians is required when the student returns.
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-3 mt-1 text-xl">•</span>
                        Students with less than <strong>75% attendance</strong> are not allowed to appear for the Final Examination.
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-3 mt-1 text-xl">•</span>
                        Attendance at inter-school events/tournaments counts as full attendance (EL - Education Leave).
                    </li>
                </ul>
            </div>
        </section>

        {/* Co-Curricular Activities */}
        <section>
             <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-extrabold text-primary">Co-Curricular Activities</h2>
                <div className="hidden md:block text-gray-500 italic">Holistic Development</div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                 {CO_CURRICULAR.map((item, idx) => (
                     <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
                         <div className="text-secondary mb-4 p-4 bg-sky-50 rounded-full group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                            {/* Cloning the element to pass className doesn't work easily with just {item.icon}, wrapper handles styling */}
                            <div className="transform group-hover:scale-110 transition-transform">{item.icon}</div>
                         </div>
                         <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">{item.name}</h3>
                     </div>
                 ))}
             </div>
        </section>

        {/* Faculty */}
        <section className="bg-gradient-to-br from-white to-sky-50 p-10 rounded-3xl shadow-card border border-sky-100">
             <h2 className="text-3xl font-bold text-primary mb-8">Our Faculty & Ethos</h2>
             <div className="flex flex-col md:flex-row gap-12 items-center">
                 <div className="md:w-2/3">
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        At <span className="font-bold text-primary">{SCHOOL_INFO.name}</span>, the growth of each individual student is our primary focus. We believe that a school is more than just a building; it is a community of mentors and learners.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        We use transformative programs such as the <strong>School Wide Positive Behaviour Program</strong> to challenge students and the school community to be their best versions.
                    </p>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                        <p className="text-primary leading-relaxed font-bold text-lg flex items-center">
                            <Star className="w-5 h-5 text-secondary mr-2 fill-current" />
                            Result: Students experience high learning gains and graduate as responsible, confident 21st-century learners.
                        </p>
                    </div>
                 </div>
                 <div className="md:w-1/3 w-full">
                     <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] text-center transform hover:scale-105 transition-transform duration-300">
                         <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400 border-4 border-white shadow-lg">
                             <span className="text-xs font-bold uppercase tracking-wide">Photo</span>
                         </div>
                         <h4 className="font-bold text-xl text-primary">Principal</h4>
                         <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mt-1">{SCHOOL_INFO.name}</p>
                     </div>
                 </div>
             </div>
        </section>

        {/* Word to Parents */}
        <section className="bg-secondary/10 p-10 rounded-3xl border border-secondary/20">
            <div className="flex items-center mb-6">
                <AlertCircle className="w-10 h-10 text-secondary mr-4" />
                <h2 className="text-3xl font-bold text-primary">A Word to Parents</h2>
            </div>
            <div className="prose max-w-none text-gray-800 text-lg leading-relaxed">
                <p>
                    We earnestly request parents and guardians to read the school diary and familiarize themselves with school rules regarding 
                    <strong className="text-primary"> fees, attendance, leave of absence, uniform, code of conduct, and examination policies</strong>.
                </p>
                <p className="mt-4 font-medium">
                    Your cooperation is vital. By working together, we can ensure your child receives the best possible support for their academic and personal development.
                </p>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Academics;