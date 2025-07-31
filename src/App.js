import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, BookOpen, Briefcase, User, Code, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "AI Tutor | Chatbot",
      description: "Intelligent tutoring system for reading chapters, explaining content, answering questions, and generating practice questions.",
      tech: ["Python", "NLP (spaCy, NLTK)", "React.js", "Flask/FastAPI", "OpenAI API", "MongoDB"],
      category: "AI/ML"
    },
    {
      title: "Drag and Drop Website Generator",
      description: "Web application to build websites by dragging and dropping elements, supporting addition of functionalities.",
      tech: ["React.js", "DnD libraries", "Node.js", "Express", "HTML/CSS", "JavaScript", "MongoDB"],
      category: "Web Development"
    },
    {
      title: "WebRTC Peer Communication App",
      description: "Real-time communication tool using WebRTC, analyzed to be faster than FTP for peer-to-peer file transfer or chat.",
      tech: ["JavaScript", "WebRTC", "Node.js", "Socket.io", "Express.js"],
      category: "Networking"
    },
    {
      title: "NLP Weather Predictor (Markov Model GUI)",
      description: "GUI application that predicts weather using a Markov model based on previous input data.",
      tech: ["Python", "Tkinter/PyQt", "scikit-learn", "NumPy", "Matplotlib"],
      category: "AI/ML"
    },
    {
      title: "No-Code CI/CD Pipeline Builder",
      description: "Drag-and-drop builder for CI/CD pipelines in AWS, automating deployments without code.",
      tech: ["AWS CodePipeline", "AWS Lambda", "AWS CodeBuild", "React.js", "Node.js"],
      category: "DevOps"
    },
    {
      title: "Find It - Online Multiplayer Game",
      description: "Online multiplayer Spot It game with AI (robot) functionality.",
      tech: ["React.js", "Node.js", "Socket.io", "WebSockets", "Python", "MongoDB"],
      category: "Game Development"
    }
  ];

  const experience = [
    {
      title: "Research Scholar",
      company: "Indian Institute of Technology Madras",
      location: "Chennai, India",
      period: "Jan 2023 - Current",
      highlights: [
        "Specialized in programmable data planes with Tofino switch and eXpress Data Path (XDP)",
        "Developed and patented anomaly detection algorithm for programmable switches",
        "Achieved 99% accuracy in predicting anomalies with few hundred nanoseconds latency",
        "Reduced false positive rate by ~20% in imbalanced network traffic",
        "Published paper in IEEE NetSoft 2025"
      ]
    },
    {
      title: "Infrastructure Consultant",
      company: "Thoughtworks",
      location: "Bangalore, India", 
      period: "Jun 2022 - Dec 2022",
      highlights: [
        "Designed secure, scalable cloud infrastructure on Google Cloud Platform (GCP)",
        "Deployed Landing Zone Accelerators for enterprise cloud adoption",
        "Implemented CI/CD pipelines using Terraform and Cloud Deployment Manager",
        "Managed code repositories with GitHub and GitLab"
      ]
    },
    {
      title: "Big Data Engineer Intern",
      company: "Cognizant Technology Solutions",
      location: "Chennai, India",
      period: "Mar 2022 - May 2022",
      highlights: [
        "Developed Twitter analysis using PySpark for sentiment analysis",
        "Built movie recommendation system using Matrix factorization",
        "Integrated ML feature pipelines for real-time personalization"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript"],
    "Cloud & DevOps": ["AWS", "GCP", "CI/CD Pipeline", "Terraform", "Docker"],
    "Big Data & ML": ["Hadoop", "Spark", "Hive", "scikit-learn", "TensorFlow"],
    "Web Technologies": ["React.js", "Node.js", "Express", "Flask", "FastAPI"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
    "Networking": ["P4", "WebRTC", "Socket.io", "Network Programming"],
    "Tools & Others": ["Git", "Linux", "Scapy", "NLP", "OpenAI API"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saithivyah R
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4 mt-4">
                {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-left py-2 transition-colors duration-300 hover:text-blue-400"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Saithivyah R
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Research Scholar & Full-Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Researcher with hands-on experience in data optimization, network programming, and machine learning. 
              Proficient in P4 and performance tuning for real-world systems with proven ability to solve complex technical problems.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:saithivyah@gmail.com" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/saithivyah-15b30b150/" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/saithivyah" className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="tel:+91-9385516450" className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-300">
              <Phone size={24} />
            </a>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award className="text-yellow-400 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Indian Patent Holder</h3>
              <p className="text-sm text-gray-300">Anomaly detection algorithm for programmable switches</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <BookOpen className="text-blue-400 mb-2" size={32} />
              <h3 className="font-semibold mb-2">IEEE Publication</h3>
              <p className="text-sm text-gray-300">Published paper in IEEE NetSoft 2025</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Award className="text-purple-400 mb-2" size={32} />
              <h3 className="font-semibold mb-2">Academic Excellence</h3>
              <p className="text-sm text-gray-300">97 percentile in IIT-JEE, First Class Distinction</p>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('experience')}
            className="animate-bounce bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-1">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-blue-400 text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                  <Code className="mr-2" size={20} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white px-3 py-1 rounded-full text-sm border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">MS By Research: Computer Science & Engineering</h3>
                  <p className="text-xl text-gray-300 mb-1">Indian Institute of Technology Madras</p>
                  <p className="text-gray-400">Chennai, India • 2025</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-green-600/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                    CGPA: 8.5
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">B.Tech Information Technology</h3>
                  <p className="text-xl text-gray-300 mb-1">SASTRA Deemed To Be University</p>
                  <p className="text-gray-400">Thanjavur • 2022</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-green-600/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                    CGPA: 8.6 | First Class with Distinction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Always interested in discussing new opportunities, research collaborations, or innovative projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:saithivyah@gmail.com"
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center justify-center space-x-4"
            >
              <Mail className="text-blue-400" size={32} />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">saithivyah@gmail.com</p>
              </div>
            </a>
            
            <a
              href="tel:+91-9385516450"
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center justify-center space-x-4"
            >
              <Phone className="text-green-400" size={32} />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+91-9385516450</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/saithivyah-15b30b150/"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors duration-300 flex items-center space-x-2"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/saithivyah"
              className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-colors duration-300 flex items-center space-x-2"
            >
              <Github size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Saithivyah R. Crafted with passion for technology and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;