import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Gcare: Connect Appointment and Feedback Platform',
      description:
        'A web application that connects patients and healthcare providers, enabling appointment scheduling, real-time communication, and feedback management.A Flutter web application for appointment scheduling and patient feedback, powered by Firebase and Hugging Face NLP sentiment analysis.',
      techStack: ['Flutter', 'Dart', 'Python', 'JavaScript','Firebase','Hugging Face', 'AppScript'],
      githubUrl: 'https://global-care-mc.web.app/',
    },
    {
      id: 2,
      title: 'Olo-Olo mangrove forest Booking Website',
      description:
        'A web application with real-time weather updates and visitor foot traffic tracking, featuring Firebase for database management and authentication, optimized for seamless performance across devices.',
      techStack: ['JavaScript','Python', 'HTML', 'CSS', 'Firebase','OpenWeather API','emailJS'],
      githubUrl: 'https://olo-olo-mangrove-forest.web.app/',
    },
    {
      id: 3,
      title: 'Ilijan Falls Eco-Tourism Web Application',
      description:
        'A web application showcasing Ilijan Falls, featuring interactive visitor guides, eco-trail information, and community-driven conservation efforts, designed to promote smart and sustainable eco-tourism.',
      techStack: ['JavaScript', 'Python','emailJS', 'HTML', 'CSS','Netlify'],
      githubUrl: 'https://ilijan-falls.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-card-hint">Click to view details</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-tech">
              {selectedProject.techStack.map((tech: string) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={16} />
              Visit Website
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
