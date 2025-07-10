import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Award, BookOpen, Briefcase, Users, Star, Download, ExternalLink } from 'lucide-react';
import image from './assets/image.png'
const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'PBPK Modeling (PK-Sim)',
    'Data Analytics & Power BI',
    'Regulatory Affairs (eCTD/ACTD)',
    'Pharmaceutical R&D',
    'ICH Guidelines',
    'Literature Research',
    'Data Visualization',
    'Quality by Design (QbD)'
  ];

  const achievements = [
    { title: 'Qualified GPAT and NIPER', year: '2023', icon: '🎓' },
    { title: '1st place in Sports Competition', event: 'UIPS Sports Fest', year: '2023', icon: '🏆' },
    { title: '2nd place in Poster Competition', event: 'National Youth Day', year: '2022', icon: '🥈' },
    { title: '3rd place in Singing Competition', event: 'Azadi ka Amrit Mahotsav', year: '2022', icon: '🎵' }
  ];

  const experiences = [
    {
      title: 'R&D Formulation Intern',
      company: 'Sun Pharmaceutical Industries Limited',
      period: 'Aug 2024 – Feb 2025',
      description: 'Specialized in PK-Sim software training and pharmacokinetic research, ensuring adherence to industry standards and regulatory compliance.',
      skills: ['PK-Sim Modeling', 'Literature Research', 'Data Analysis', 'Regulatory Documentation']
    },
    {
      title: 'Placement Coordinator',
      company: 'UIPS',
      period: '2024 – Present',
      description: 'Selected from 70+ candidates, led targeted outreach achieving 15%+ increase in placement rate.',
      skills: ['Leadership', 'Communication', 'Strategic Planning']
    },
    {
      title: 'Event Management Member',
      company: 'IIC-UIPS',
      period: '2023 – Present',
      description: 'Led team of 15+ members, initiated alumni mentorship program, managed multiple committees.',
      skills: ['Team Leadership', 'Event Management', 'Program Development']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shristi Sharma
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-600'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-purple-200/20 animate-pulse"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={image} 
                alt="Shristi Sharma" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Shristi Sharma
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            M.Pharm (Pharmaceutics) | PBPK Modeling Specialist
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Dedicated pharmaceutical professional specializing in analytical research, PBPK modeling, and regulatory affairs. 
            Passionate about delivering innovative solutions in drug development and pharmacokinetic research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Briefcase size={20} />
              View Experience
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg text-blue-600">Master of Pharmacy (Pharmaceutics)</h4>
                    <p className="text-gray-600">Panjab University | 2023 – 2025</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg text-purple-600">Bachelor of Pharmacy</h4>
                    <p className="text-gray-600">Panjab University | 2019 – 2023 | CGPA: 8.34</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Career Objective</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated and ambitious professional with expertise in pharmaceutical research and development. 
                  Specializing in PBPK modeling, regulatory affairs, and data analytics. Passionate about contributing 
                  to innovative drug development solutions and ensuring global compliance standards.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800">Key Project</h4>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium text-blue-600 mb-2">Development and Validation of IVIVC Model using PK-Sim</h5>
                    <p className="text-sm text-gray-600">
                      Successfully developed Level A In Vitro-In Vivo Correlation model, demonstrating strong correlation 
                      aligned with ICH M9 guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="text-purple-600 font-medium bg-purple-100 px-4 py-2 rounded-full">
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible.skills ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-center">{skill}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <BookOpen className="text-blue-600" />
                Certifications & Training
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Data Analytics Using Power BI</h4>
                    <p className="text-gray-600 text-sm">Hands-on experience with certified trainer (2024)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-purple-600">QbD, DoE & Pharma Statistics</h4>
                    <p className="text-gray-600 text-sm">Sun Pharmaceutical Industries (2024)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-blue-600">AI & ChatGPT PowerPoint Workshop</h4>
                    <p className="text-gray-600 text-sm">AI-powered design tools expertise (2024)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <Users className="text-purple-600" />
                Volunteering
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Prashraya Welfare Foundation</h4>
                    <p className="text-gray-600 text-sm">2024 – Present</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Robin Hood Army</h4>
                    <p className="text-gray-600 text-sm">2023 – Present</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-purple-600">NSS (National Service Scheme)</h4>
                    <p className="text-gray-600 text-sm">2020 – 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Key Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible.achievements ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                      {achievement.event && (
                        <p className="text-blue-600 font-medium">{achievement.event}</p>
                      )}
                      <p className="text-gray-500">{achievement.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 mb-6">
                  Ready to collaborate on innovative pharmaceutical solutions? Let's connect!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="mailto:sharmashristi997@gmail.com"
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Mail className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600 text-sm text-center">sharmashristi997@gmail.com</p>
                </a>

                <a
                  href="tel:8580757944"
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="text-purple-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600 text-sm">+91 8580757944</p>
                </a>

                <a
                  href="https://linkedin.com/in/shristi-sharma44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="text-blue-600 mb-3" size={32} />
                  <h3 className="font-semibold text-gray-800 mb-2">LinkedIn</h3>
                  <p className="text-gray-600 text-sm text-center">shristi-sharma44</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Shristi Sharma. Crafted with passion for pharmaceutical innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;