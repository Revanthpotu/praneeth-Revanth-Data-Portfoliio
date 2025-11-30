import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText, ChevronDown, Database, Server, Code, Cloud, Terminal, GraduationCap, MapPin, Phone, ArrowRight, Award } from 'lucide-react';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import ExperienceItem from './components/ExperienceItem';
import CertificationCard from './components/CertificationCard';
import { PROFILE, PROJECTS, EXPERIENCES, SKILLS, CERTIFICATIONS, TECHNICAL_EXPERTISE, EDUCATION } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handle scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      // New order: Home, About, Certifications, Skills, Education, Experience, Projects
      const sections = ['home', 'about', 'certifications', 'skills', 'education', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Programmatic scroll to prevent URL hash issues
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Certifications', href: 'certifications' },
    { name: 'Skills', href: 'skills' },
    { name: 'Education', href: 'education' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-primary-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <Database className="text-primary-500" size={24} />
              <span className="font-bold text-xl tracking-tight">Revanth<span className="text-primary-500">.Data</span></span>
            </div>
            
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.href}`}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === link.href
                        ? 'text-primary-400 bg-slate-800'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2 text-center">Contact Me</h3>
            <p className="text-slate-400 text-center mb-8">Choose how you'd like to get in touch</p>
            
            <div className="space-y-4">
              <ContactAction 
                href={PROFILE.linkedin}
                icon={<Linkedin size={20} />}
                label="Connect on LinkedIn"
                subLabel="View my professional profile"
                colorClass="group-hover:text-[#0077b5]"
              />
              <ContactAction 
                href={`mailto:${PROFILE.email}`}
                icon={<Mail size={20} />}
                label="Send an Email"
                subLabel={PROFILE.email}
                colorClass="group-hover:text-red-400"
              />
              <ContactAction 
                href={`tel:${PROFILE.phone}`}
                icon={<Phone size={20} />}
                label="Give me a Call"
                subLabel={PROFILE.phone}
                colorClass="group-hover:text-green-400"
              />
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero Section */}
      <section id="home" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
            alt="Data Network Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
          {/* Animated Glow Orbs */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block mb-6 px-4 py-1.5 bg-slate-800/80 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium shadow-[0_0_15px_rgba(14,165,233,0.15)] backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new opportunities
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
              Hi, I'm <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-sky-300 to-indigo-400 whitespace-nowrap">
                {PROFILE.name}
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-4 border-primary-500 pl-4 bg-slate-800/20 py-2 rounded-r-lg">
              Four major certifications in AWS, Azure, Snowflake, and Databricks, shaping end-to-end cloud data architectures
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Designing cloud data platforms that scale with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                View My Work <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:border-slate-500 transition-all cursor-pointer backdrop-blur-sm"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start gap-6">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="text-slate-500 hover:text-red-400 transition-colors transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image (Hidden on small mobile, visible on large) */}
          <div className="hidden lg:block relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group perspective-1000 bg-slate-800/50 p-4">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent z-10 pointer-events-none"></div>
              
              {/* Data Dashboard Image */}
              <img 
                src="data-engineer-illustration.png" 
                alt="Data Engineering Architecture"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                onError={(e) => {
                  // Fallback if local image not found
                  e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
                }}
              />
              
              {/* Floating Badge 1 */}
              <div className="absolute top-6 right-6 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Database size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Data Processed</p>
                  <p className="text-sm font-bold text-white">5TB+ Daily</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Server size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Uptime</p>
                  <p className="text-sm font-bold text-white">99.99%</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background grid behind image */}
            <div className="absolute -inset-4 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 1. About Section (Part of Hero/About Group) */}
      <Section id="about" title="About Me" lightBackground>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center overflow-hidden relative z-10 group">
                 {/* Profile Image */}
                 <img 
                   src="profile.png" 
                   alt={PROFILE.name} 
                   className="w-full h-full object-cover object-top"
                   onError={(e) => {
                     // Fallback if image fails to load
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement?.querySelector('.placeholder')?.classList.remove('hidden');
                   }}
                 />
                 {/* Fallback Placeholder (Hidden by default, shown if image error) */}
                 <div className="placeholder hidden absolute inset-0 flex flex-col items-center justify-center bg-slate-800">
                    <Database size={80} className="text-slate-600 opacity-50 mb-2" />
                    <span className="text-slate-400 font-semibold px-4 text-center">No Image Found</span>
                 </div>
              </div>
              <div className="absolute top-4 left-4 w-64 h-64 rounded-2xl border-2 border-primary-500/30 z-0"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {PROFILE.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2"><Cloud size={18} className="text-primary-400"/> Cloud Native</h4>
                <p className="text-slate-400 text-sm">Specialized in Azure & AWS ecosystems</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2"><Server size={18} className="text-primary-400"/> Infrastructure</h4>
                <p className="text-slate-400 text-sm">Terraform & Docker for scalable ops</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2"><Code size={18} className="text-primary-400"/> Pipeline Logic</h4>
                <p className="text-slate-400 text-sm">Complex Python & PySpark transformations</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2"><Database size={18} className="text-primary-400"/> Data Modeling</h4>
                <p className="text-slate-400 text-sm">Warehouse design & optimization</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Certifications Section */}
      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </Section>

      {/* 3. Technical Expertise & Skills Section */}
      <Section id="skills" title="Technical Expertise & Skills" lightBackground>
        
        {/* Core Competencies (Technical Expertise) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="text-primary-400" size={24} />
            <h3 className="text-2xl font-bold text-slate-100">Core Competencies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {TECHNICAL_EXPERTISE.map((expertise, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-slate-800/80 rounded-full text-slate-200 text-base font-medium border border-slate-600 hover:border-primary-500/50 hover:text-primary-400 hover:bg-slate-800 transition-all duration-300 shadow-sm"
              >
                {expertise}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Skills Categories */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Code className="text-primary-400" size={24} />
            <h3 className="text-2xl font-bold text-slate-100">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors h-full">
                <h3 className="text-xl font-bold text-primary-400 mb-4 pb-2 border-b border-slate-700 h-14 flex items-center">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1.5 bg-slate-900 rounded-md text-slate-300 text-sm font-medium border border-slate-700 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Education Section */}
      <Section id="education" title="Education">
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu) => (
             <div key={edu.id} className="bg-slate-800/80 p-6 md:p-8 rounded-xl border border-slate-700 hover:border-primary-500/30 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group">
                <div className="flex items-start gap-6">
                   {/* Logo Container - Increased Size and White Background for Pop */}
                   <div className="mt-1 flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl border-4 border-slate-800 shadow-lg flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                     {edu.logo ? (
                       <img 
                         src={edu.logo} 
                         alt={`${edu.school} logo`} 
                         className="max-w-[85%] max-h-[85%] object-contain"
                         onError={(e) => {
                           e.currentTarget.style.display = 'none';
                           e.currentTarget.parentElement?.querySelector('.edu-icon')?.classList.remove('hidden');
                         }}
                       />
                     ) : null}
                     <div className={`edu-icon ${edu.logo ? 'hidden' : ''} text-slate-400`}>
                        <GraduationCap size={48} />
                     </div>
                   </div>
                   
                   <div className="pt-2">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors">{edu.degree}</h3>
                      <p className="text-xl text-primary-500 font-semibold mb-2">{edu.school}</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center text-slate-400 text-base">
                          <MapPin size={16} className="mr-1" />
                          {edu.location}
                        </div>
                        {edu.grade && (
                          <div className="flex items-center text-slate-300 text-sm font-medium bg-slate-700/50 px-3 py-1 rounded-full w-fit mt-1">
                            <Award size={14} className="mr-2 text-primary-400" />
                            {edu.grade}
                          </div>
                        )}
                      </div>
                   </div>
                </div>
                <div className="w-full md:w-auto flex justify-end">
                   <div className="px-5 py-2 bg-slate-900 rounded-full text-slate-300 text-sm font-semibold border border-slate-700 whitespace-nowrap shadow-sm">
                      {edu.date}
                   </div>
                </div>
             </div>
          ))}
        </div>
      </Section>

      {/* 5. Work Experience Section */}
      <Section id="experience" title="Work Experience" lightBackground>
        <div className="max-w-4xl mx-auto mt-12">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceItem 
              key={exp.id} 
              experience={exp} 
              isLast={index === EXPERIENCES.length - 1} 
            />
          ))}
        </div>
      </Section>

      {/* 6. Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            I'm currently looking for new opportunities in Data Engineering. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-lg transition-colors mb-12"
          >
            <Mail className="mr-2" size={20} />
            Say Hello
          </a>

          <div className="flex justify-center space-x-12 mb-8">
            <SocialLinkWithTooltip 
              href={PROFILE.linkedin} 
              icon={<Linkedin size={28} />} 
              label="LinkedIn" 
            />
            <SocialLinkWithTooltip 
              href={PROFILE.github} 
              icon={<Github size={28} />} 
              label="GitHub" 
            />
            {/* Placeholder for Resume Link */}
            <SocialLinkWithTooltip 
              href="#" 
              icon={<FileText size={28} />} 
              label="Resume" 
            />
          </div>
          
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Helper component for the modal contact options
const ContactAction: React.FC<{ 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  subLabel: string;
  colorClass: string;
}> = ({ href, icon, label, subLabel, colorClass }) => (
  <a 
    href={href}
    target={href.startsWith('http') ? "_blank" : undefined}
    rel={href.startsWith('http') ? "noreferrer" : undefined}
    className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 transition-all group"
  >
    <div className={`p-3 bg-slate-900 rounded-full text-slate-400 ${colorClass} transition-colors border border-slate-700 group-hover:border-slate-500`}>
      {icon}
    </div>
    <div className="text-left">
      <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors">{label}</h4>
      <p className="text-slate-400 text-sm">{subLabel}</p>
    </div>
    <ArrowRight size={18} className="ml-auto text-slate-500 group-hover:translate-x-1 transition-transform" />
  </a>
);

// Helper component for Footer icons with Tooltip
const SocialLinkWithTooltip: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className="group relative flex flex-col items-center text-slate-400 hover:text-white transition-colors"
  >
    {icon}
    <span className="absolute -top-10 scale-0 transition-all rounded bg-slate-800 p-2 text-xs text-white group-hover:scale-100 whitespace-nowrap border border-slate-700 shadow-xl">
      {label}
    </span>
  </a>
);

export default App;