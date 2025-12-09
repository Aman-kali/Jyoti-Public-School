import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, BookOpen, Heart, ArrowRight, ShieldCheck, Monitor, FlaskConical } from 'lucide-react';
import { SCHOOL_INFO, IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="bg-sky-50">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden perspective">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{ backgroundImage: `url('https://picsum.photos/id/10/1920/1080')` }}
        >
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-primaryDark/80 via-primary/60 to-primaryDark/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-6 shadow-lg animate-fade-in-up">
            <span className="text-sky-100 font-bold tracking-wider uppercase text-sm">Welcome to Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-shadow animate-fade-in-up drop-shadow-2xl">
            {SCHOOL_INFO.tagline}
          </h1>
          <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-sky-100 font-light leading-relaxed text-shadow-sm">
            Empowering students in Ayodhya with <span className="text-white font-semibold">value-based</span>, future-ready education. Join us in shaping the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/admissions" 
              className="bg-gradient-to-r from-secondary to-secondaryDark text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_6px_0_rgb(12,74,110)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgb(12,74,110)] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center group"
            >
              Admission Enquiry
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-[0_6px_0_rgb(209,213,219)] hover:-translate-y-1 hover:shadow-[0_8px_0_rgb(209,213,219)] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Decorative Curve */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sky-50"></path>
          </svg>
        </div>
      </section>

      {/* Key Highlights Strip */}
      <section className="relative z-20 -mt-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HighlightCard 
            icon={<Lightbulb className="w-12 h-12 text-secondary" />}
            title="Idea Generation"
            description="Curriculum designed to encourage creativity, critical thinking, and new innovative ideas."
          />
          <HighlightCard 
            icon={<BookOpen className="w-12 h-12 text-secondary" />}
            title="Best Curriculum"
            description="Well-researched, best-in-class curriculum fostering academic excellence and deep understanding."
          />
          <HighlightCard 
            icon={<Heart className="w-12 h-12 text-secondary" />}
            title="Value-Based"
            description="Focus on moral values, empathy, life skills, and holistic development of every child."
          />
        </div>
      </section>

      {/* About Summary */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative group">
            {/* Image Frame Effect */}
            <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
            <img 
              src="https://picsum.photos/id/20/800/600" 
              alt="School Campus" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-white"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-secondary font-extrabold uppercase tracking-widest text-sm mb-2 block">About Us</span>
            <h2 className="text-4xl font-extrabold text-primary mb-6 drop-shadow-sm">A Legacy of Excellence Since 2012</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Established by Founder Manager & Director Mr. Vijay Narayan Pandey, {SCHOOL_INFO.name} started with a humble beginning in five rooms and has grown into one of the town's leading educational institutes.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We believe in the idea that "One small step today is a giant leap tomorrow." Our students are groomed to be aesthetically rich, intellectually aware, and integrated young individuals.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-bold text-lg hover:text-secondary transition-colors group">
              Read our full story 
              <span className="ml-2 bg-primary text-white rounded-full p-1 group-hover:bg-secondary transition-colors shadow-md">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-sky-50 to-white p-10 rounded-2xl shadow-card border-l-8 border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
                <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl shadow-lg">V</span>
                Our Vision
              </h3>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "To deliver overall excellence through a professional approach, in turn empowering the better to do best."
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-card border-l-8 border-secondary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-3xl font-bold text-primary mb-4 flex items-center">
                <span className="bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl shadow-lg">M</span>
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a learning environment where students, staff, and parents work together to enable students to be innovative, value-driven, leadership-oriented, and lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-24 bg-gradient-to-br from-primaryDark to-primary text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-16 drop-shadow-md">World-Class Infrastructure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <FeatureIcon icon={<ShieldCheck className="w-12 h-12" />} title="Safe Campus" desc="Secure environment with hygiene focus" />
            <FeatureIcon icon={<Monitor className="w-12 h-12" />} title="Smart Classes" desc="Technology-enabled interactive learning" />
            <FeatureIcon icon={<FlaskConical className="w-12 h-12" />} title="Modern Labs" desc="Learning by doing in Science & Computers" />
            <FeatureIcon icon={<BookOpen className="w-12 h-12" />} title="Rich Library" desc="Vast collection of books & resources" />
          </div>
          <div className="mt-16">
            <Link to="/infrastructure" className="inline-block border-2 border-white/50 text-white hover:bg-white hover:text-primary px-10 py-3 rounded-full transition-all font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Explore Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Academics & Beyond */}
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Academics & Beyond</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We believe in holistic development. Alongside academic rigor, we offer a wide range of co-curricular activities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
             {['Dramatics', 'Debates', 'Music', 'Dance', 'Sports', 'Robotics', 'Art', 'Yoga', 'Coding', 'Social Service'].map((activity, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl text-center shadow-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                   <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">
                      <Heart className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                   </div>
                   <p className="font-bold text-gray-700 group-hover:text-primary transition-colors">{activity}</p>
                </div>
             ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/academics" className="text-primary font-bold hover:text-secondary underline decoration-2 underline-offset-4 text-lg transition-colors">View all activities</Link>
          </div>
        </div>
      </section>

      {/* Admissions Teaser */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondaryDark text-white shadow-inner">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-4xl font-extrabold mb-4 text-shadow-sm">Admissions Open (Nursery to Class 10)</h2>
            <p className="text-white/90 mb-4 text-xl font-medium">Join the Jyoti Public School family today.</p>
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 shadow-lg">
               <p className="font-bold flex items-center"><span className="text-sky-200 mr-2">★</span> Strict "No Homework Policy" for Classes I & II</p>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-end">
             <Link 
              to="/admissions" 
              className="bg-white text-secondaryDark px-10 py-5 rounded-xl font-bold text-xl shadow-[0_6px_0_rgb(12,74,110)] hover:shadow-[0_8px_0_rgb(12,74,110)] hover:-translate-y-1 active:shadow-none active:translate-y-[4px] transition-all whitespace-nowrap"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const HighlightCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.08)] border-b-4 border-transparent hover:border-secondary hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-sky-50 w-20 h-20 rounded-full flex items-center justify-center border border-sky-100 shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed font-medium">{description}</p>
  </div>
);

const FeatureIcon: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-2 hover:shadow-lg group">
    <div className="text-white/80 mb-4 drop-shadow-md group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-xl font-bold mb-2 text-shadow-sm">{title}</h4>
    <p className="text-sky-100 text-sm font-medium">{desc}</p>
  </div>
);

export default Home;