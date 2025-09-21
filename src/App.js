import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase, Code, Award, BookOpen, ExternalLink, Brain, Network, Database, Cloud, Cpu, Users, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Add Tailwind CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.tailwindcss.com';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      document.head.removeChild(link);
    };
  }, []);

  const skills = {
    languages: ['C/C++', 'Python', 'Java', 'JavaScript', 'P4', 'SQL'],
    technologies: ['Hadoop', 'PySpark', 'AWS', 'GCP', 'ReactJS', 'Django', 'WebRTC', 'LLMs'],
    tools: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'Scapy', 'CI/CD']
  };

  const experiences = [
    {
      role: 'Research Scholar',
      company: 'IIT Madras',
      period: 'Jan 2023 – Current',
      icon: <Brain className="w-6 h-6" />,
      highlights: [
        'Developed patented anomaly detection algorithm for programmable switches',
        '99% accuracy in predicting network anomalies with nanosecond latency',
        'Reduced false positive rate by 20% in imbalanced network traffic'
      ]
    },
    {
      role: 'Infrastructure Consultant',
      company: 'Thoughtworks',
      period: 'Jun 2022 – Dec 2022',
      icon: <Cloud className="w-6 h-6" />,
      highlights: [
        'Designed secure, scalable cloud infrastructure on GCP',
        'Implemented CI/CD pipelines and automated workflows',
        'Deployed Landing Zone Accelerators for enterprise adoption'
      ]
    },
    {
      role: 'Big Data Engineer Intern',
      company: 'Cognizant',
      period: 'Mar 2022 – May 2022',
      icon: <Database className="w-6 h-6" />,
      highlights: [
        'Twitter sentiment analysis using PySpark',
        'Movie recommendation system with Matrix factorization',
        'Large-scale data processing and machine learning'
      ]
    }
  ];

  const projects = [
    {
      title: 'AI Tutor',
      description: 'Intelligent study assistant that reads textbooks, explains content, and generates quizzes',
      tech: ['Python', 'spaCy', 'NLTK', 'Streamlit', 'MongoDB'],
      link:'https://github.com/sai-official/AITutor-',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'WebRTC Peer Communication',
      description: 'Real-time P2P communication platform with file transfer and chat',
      tech: ['JavaScript', 'WebRTC', 'Socket.io'],
      link: 'https://github.com/saithivyah/webrtc',
      icon: <Network className="w-8 h-8" />
    },
    {
      title: 'No-Code CI/CD Builder',
      description: 'Drag-and-drop builder for automated cloud deployments',
      tech: ['AWS Lambda', 'CodePipeline', 'React.js'],
      link:'https://github.com/sai-official/No-code-CICD',
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
    color: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const navStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50,
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #22d3ee, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #06b6d4, #8b5cf6)',
    border: 'none',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '9999px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <div style={containerStyle}>
      {/* Navigation */}
      <nav style={navStyle}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', ...gradientTextStyle }}>
              Saithivyah R
            </div>
            <div style={{ display: 'none', gap: '32px' }} className="md:flex">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: activeSection === item.toLowerCase() ? '#22d3ee' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#22d3ee'}
                  onMouseOut={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#22d3ee' : 'rgba(255, 255, 255, 0.7)'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))' }}></div>
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 24px' }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ 
              width: '128px', 
              height: '128px', 
              margin: '0 auto 24px', 
              background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '36px', 
              fontWeight: 'bold' 
            }}>
              SR
            </div>
            <h1 style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '16px', ...gradientTextStyle }}>
              Saithivyah R
            </h1>
            <p style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '8px' }}>Research Scholar & Infrastructure Engineer</p>
            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '32px' }}>MS by Research (CSE) • IIT Madras</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.7)' }}>
                <MapPin style={{ width: '20px', height: '20px' }} />
                <span>Chennai, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.7)' }}>
                <GraduationCap style={{ width: '20px', height: '20px' }} />
                <span>CGPA: 8.5/10</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button style={buttonStyle}>
                <Mail style={{ width: '20px', height: '20px' }} />
                <span>Contact Me</span>
              </button>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '#';
                  link.download = 'Saithivyah_R_Resume.pdf';
                  link.click();
                }}
                style={{
                  ...buttonStyle,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <Download style={{ width: '20px', height: '20px' }} />
                <span>Download Resume</span>
              </button>
              <button style={{ ...buttonStyle, background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <Github style={{ width: '20px', height: '20px' }} />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        </div>
        
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
          <ChevronDown style={{ width: '32px', height: '32px', color: 'rgba(255, 255, 255, 0.6)' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', ...gradientTextStyle }}>
            About Me
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '24px' }}>
                I'm a passionate Research Scholar at IIT Madras specializing in network security and programmable switches. 
                With expertise in machine learning, Data Center Topologies, Low latency and High throughput network optimisation, I bridge the gap 
                between cutting-edge research and practical applications.
              </p>
              <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', marginBottom: '32px' }}>
                My work focuses on developing intelligent systems for network anomaly detection, achieving 99% accuracy 
                with nanosecond latency. I hold an Indian patent for my anomaly detection architecture and have publications 
                in IEEE conferences for fast packet processing in hundreds of nanosecond.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#22d3ee' }}>99%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>ML Model Accuracy</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#a855f7' }}>20%</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>False Positive Reduction</div>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ ...cardStyle, padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#22d3ee' }}>Education</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>MS by Research (CSE)</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>IIT Madras • 2025 • CGPA: 8.5</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: '500' }}>B.Tech (IT)</div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>SASTRA University • 2022 • CGPA: 8.6</div>
                  </div>
                </div>
              </div>
              
              <div style={{ ...cardStyle, padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#a855f7' }}>Research Focus</h3>
                <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Network Security • Programmable Switches • AI/Machine Learning • 
                  Anomaly Detection • Low latency & High throughput systems • Python DES for Network Simulations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '80px 24px', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', ...gradientTextStyle }}>
            Experience
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{ ...cardStyle, padding: '32px' }}
              >
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', padding: '12px', borderRadius: '8px' }}>
                    {exp.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
                      <div>
                        <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>{exp.role}</h3>
                        <p style={{ fontSize: '18px', color: '#22d3ee' }}>{exp.company}</p>
                      </div>
                      <span style={{ color: 'rgba(255, 255, 255, 0.6)', background: 'rgba(255, 255, 255, 0.1)', padding: '4px 12px', borderRadius: '9999px', fontSize: '14px' }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#22d3ee', marginTop: '8px', fontSize: '12px' }}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', ...gradientTextStyle }}>
            Featured Projects
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{ 
                  ...cardStyle, 
                  padding: '24px',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.5)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{ color: '#22d3ee', marginBottom: '16px' }}>{project.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>{project.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px', lineHeight: '1.6' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '12px',
                        background: 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
                        color: '#67e8f9',
                        padding: '4px 8px',
                        borderRadius: '9999px',
                        border: '1px solid rgba(6, 182, 212, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#22d3ee', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px'
                }}>
                  <ExternalLink style={{ width: '16px', height: '16px' }} />
                  
                  <span onClick={() => window.location.href =project.link}>View Project</span> 
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '80px 24px', background: 'rgba(0, 0, 0, 0.2)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', ...gradientTextStyle }}>
            Technical Skills
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ ...cardStyle, padding: '32px' }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <Code style={{ width: '48px', height: '48px', color: '#22d3ee', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Languages</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {skills.languages.map((lang, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{lang}</span>
                    <div style={{ width: '80px', height: '8px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          background: 'linear-gradient(to right, #22d3ee, #a855f7)',
                          borderRadius: '4px',
                          width: `${90 - index * 5}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...cardStyle, padding: '32px' }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <Cpu style={{ width: '48px', height: '48px', color: '#a855f7', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Technologies</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '14px',
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                      color: '#c084fc',
                      padding: '6px 12px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ ...cardStyle, padding: '32px' }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <Users style={{ width: '48px', height: '48px', color: '#ec4899', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Tools & DevOps</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: '14px',
                      background: 'linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(34, 211, 238, 0.2))',
                      color: '#f472b6',
                      padding: '6px 12px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(236, 72, 153, 0.3)'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', ...gradientTextStyle }}>
            Achievements & Certifications
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Award style={{ width: '32px', height: '32px' }} />, title: 'Indian Patent Holder', desc: 'Anomaly Detection Algorithm' },
              { icon: <BookOpen style={{ width: '32px', height: '32px' }} />, title: 'IEEE NetSoft 2025', desc: 'Published Research Paper' },
              { icon: <GraduationCap style={{ width: '32px', height: '32px' }} />, title: 'First Class Distinction', desc: 'B.Tech Degree' },
              { icon: <Cloud style={{ width: '32px', height: '32px' }} />, title: 'GCP Certified', desc: '6 Qwiklabs Badges' },
              { icon: <Award style={{ width: '32px', height: '32px' }} />, title: 'AWS Certified', desc: 'Multiple Certifications' },
              { icon: <Users style={{ width: '32px', height: '32px' }} />, title: 'Gold Medalist', desc: 'Calligraphy Competition' }
            ].map((achievement, index) => (
              <div
                key={index}
                style={{
                  ...cardStyle,
                  padding: '24px',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.5)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <div style={{ color: '#22d3ee', marginBottom: '16px' }}>{achievement.icon}</div>
                <h3 style={{ fontWeight: '600', color: 'white', marginBottom: '8px' }}>{achievement.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '48px 24px', background: 'rgba(0, 0, 0, 0.4)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', ...gradientTextStyle }}>
              Let's Connect
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '24px' }}>
              Open to research collaborations, consulting opportunities, and exciting projects
            </p>
            
            {/* Resume Download Section */}
            <div style={{ 
              marginBottom: '32px', 
              padding: '24px', 
              ...cardStyle, 
              maxWidth: '400px', 
              margin: '0 auto 32px' 
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>📄 Get My Resume</h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', marginBottom: '16px' }}>
                Download my complete resume with detailed project information and achievements
              </p>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '#';
                  link.download = 'Saithivyah_R_Resume.pdf';
                  link.click();
                }}
                style={{
                  ...buttonStyle,
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                <Download style={{ width: '20px', height: '20px' }} />
                <span>Download Resume (PDF)</span>
              </button>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '8px', textAlign: 'center' }}>
                Last updated: September 2025
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}>
                <Mail style={{ width: '24px', height: '24px', color: 'white' }} />
              </button>
              <button style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}>
                <Github style={{ width: '24px', height: '24px', color: 'white' }} />
              </button>
              <button style={{ background: 'rgba(255, 255, 255, 0.1)', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}>
                <Linkedin style={{ width: '24px', height: '24px', color: 'white' }} />
              </button>
            </div>
          </div>
          <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>
            © 2025 Saithivyah R. Built with React & Custom CSS
          </div>
        </div>
      </footer>

      {/* Add bounce animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) translateX(-50%);
            }
            40% {
              transform: translateY(-30px) translateX(-50%);
            }
            60% {
              transform: translateY(-15px) translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;