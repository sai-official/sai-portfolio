import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ChevronDown,
  Network,
  Database,
  Cloud,
  Terminal,
  FileText,
  Trophy,
  BookOpen,
  Cpu,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">SR</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">SAITHIVYAH</span>
              <span className="text-blue-400 ml-4">R</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Research Scholar & Infrastructure Consultant
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Researcher with hands-on experience in data optimization, network programming, and machine learning. 
              Specialized in programmable data planes, cutting-edge technologies in Tofino switch and XDP. 
              Proven ability to work independently and in collaborative teams to solve complex technical problems.
            </p>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="mr-2">Learn More</span>
            <ChevronDown className="animate-bounce" />
          </button>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Background & Expertise</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently pursuing MS by Research in Computer Science & Engineering at IIT Madras, 
                I specialize in programmable data planes with focus on Tofino switch and eXpress Data Path (XDP) 
                technologies. My research has culminated in published papers and patent applications in network optimization.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With experience as an Infrastructure Consultant at Thoughtworks, I've designed scalable cloud 
                infrastructure on GCP and implemented DevOps methodologies. My technical expertise spans from 
                low-level network programming to high-level system architecture.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <GraduationCap className="text-blue-400 mb-3" size={32} />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <div className="space-y-2 text-gray-300">
                  <div>MS by Research, CSE - IIT Madras (2025) - CGPA: 8.5</div>
                  <div>B.Tech IT - SASTRA University (2022) - CGPA: 8.6</div>
                </div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Award className="text-blue-400 mb-3" size={32} />
                <h4 className="text-xl font-semibold mb-2">Achievements</h4>
                <div className="space-y-1 text-gray-300 text-sm">
                  <div>• Indian Patent & IEEE NetSoft 2025 Publication</div>
                  <div>• 97 percentile in IIT-JEE</div>
                  <div>• First Class Distinction in B.Tech</div>
                  <div>• Gold Medalist in Calligraphy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Programming Languages",
                skills: ["Python", "Java", "C", "C++", "JavaScript", "P4", "Shell Script"]
              },
              {
                icon: <Network size={32} />,
                title: "Networking & Infrastructure",
                skills: ["SDN", "XDP", "Tofino Switch", "WebRTC", "AWS", "GCP", "Terraform"]
              },
              {
                icon: <Database size={32} />,
                title: "Data & ML",
                skills: ["Hadoop", "Spark", "Hive", "MongoDB", "MySQL", "scikit-learn", "NLP"]
              },
              {
                icon: <Cloud size={32} />,
                title: "DevOps & Tools",
                skills: ["CI/CD Pipeline", "Git", "Docker", "AWS CodePipeline", "GitHub Actions"]
              },
              {
                icon: <Globe size={32} />,
                title: "Web Technologies",
                skills: ["React.js", "Node.js", "Express", "Flask", "Django", "Socket.io"]
              },
              {
                icon: <Cpu size={32} />,
                title: "Specialized Tools",
                skills: ["Scapy", "NLTK", "spaCy", "OpenAI API", "BMv2 Switches", "PyQt/Tkinter"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-700/50 transition-colors">
                <div className="text-blue-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Research Scholar",
                company: "Indian Institute of Technology Madras",
                period: "Jan 2023 - Current",
                location: "Chennai, India",
                achievements: [
                  "Specialized in programmable data planes with focus on Tofino switch and XDP technologies",
                  "Published paper in IEEE NetSoft 2025 and developed patented anomaly detection algorithm",
                  "Achieved 99% accuracy in predicting anomalies with ML models for flow-level and packet-level detection",
                  "Reduced false positive rate by ~20% and achieved latency of few hundred nanoseconds on Tofino switch"
                ]
              },
              {
                role: "Infrastructure Consultant",
                company: "Thoughtworks",
                period: "Jun 2022 - Dec 2022",
                location: "Bangalore, India",
                achievements: [
                  "Designed secure, scalable cloud infrastructure on Google Cloud Platform (GCP)",
                  "Deployed Landing Zone Accelerators for streamlined enterprise cloud adoption",
                  "Implemented CI/CD pipelines and automated workflows using Terraform and Cloud Deployment Manager",
                  "Managed code repositories with GitHub and GitLab including actions and runners"
                ]
              },
              {
                role: "Big Data Engineer Intern",
                company: "Cognizant Technology Solutions",
                period: "Mar 2022 - May 2022",
                location: "Chennai, India",
                achievements: [
                  "Conducted Twitter analysis using PySpark for sentiment analysis and behavioral insights",
                  "Built movie recommendation system using Matrix factorization method",
                  "Integrated ML feature pipelines for recommendation systems enabling near real-time personalization"
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="bg-slate-700/30 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                    <h4 className="text-lg text-gray-300">{exp.company}</h4>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Tutor Chatbot",
                tech: "Python, NLP, React.js, OpenAI API",
                description: "Intelligent chatbot for reading chapters, explaining content, and generating practice questions."
              },
              {
                title: "No-Code CI/CD Pipeline Builder",
                tech: "AWS CodePipeline, React.js, Node.js",
                description: "Drag-and-drop builder for CI/CD pipelines in AWS, automating deployments without code."
              },
              {
                title: "WebRTC Peer Communication App",
                tech: "JavaScript, WebRTC, Node.js, Socket.io",
                description: "Real-time communication tool analyzed to be faster than FTP for peer-to-peer transfers."
              },
              {
                title: "Drag & Drop Website Generator",
                tech: "React.js, Node.js, MongoDB",
                description: "Web app to build websites by dragging and dropping elements with functionality support."
              },
              {
                title: "NLP Weather Predictor",
                tech: "Python, Tkinter, scikit-learn",
                description: "GUI application predicting weather using Markov model based on historical data."
              },
              {
                title: "Find It - Multiplayer Game",
                tech: "React.js, Node.js, Socket.io, Python AI",
                description: "Online multiplayer Spot It game with AI robot player implementation."
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-600/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing research opportunities, collaboration on innovative projects, 
                or potential consulting engagements in networking technologies and cloud infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={20} />
                  <a href="mailto:saithivyah@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    saithivyah@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-blue-400" size={20} />
                  <a 
                    href="https://linkedin.com/in/saithivyah-15b30b150/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="text-blue-400" size={20} />
                  <a 
                    href="https://github.com/saithivyah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg">
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full p-3 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  onClick={() => alert('Thank you for your interest! Please reach out via email: saithivyah@gmail.com')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-400">
            © 2025 Saithivyah R. All rights reserved. | Research Scholar & Infrastructure Consultant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
