import { Code, ExternalLink } from 'lucide-react';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import ReactiveButton from 'reactive-button';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack MERN application with user authentication, shopping cart, payment integration, and admin dashboard. Features include product management, order tracking, and responsive design.",
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            image: "bg-gradient-to-br from-blue-500 to-purple-600"
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and deadline tracking.",
            technologies: ["React", "Socket.io", "Express.js", "MongoDB", "Material-UI"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            image: "bg-gradient-to-br from-green-500 to-teal-600"
        },
        {
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media management with data visualization, post scheduling, engagement metrics, and multi-platform integration.",
            technologies: ["React", "Chart.js", "Node.js", "Express.js", "MongoDB"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            image: "bg-gradient-to-br from-orange-500 to-red-600"
        },
        {
            title: "Real-time Chat Application",
            description: "Modern chat application with real-time messaging, file sharing, group chats, message encryption, and user presence indicators.",
            technologies: ["React", "Socket.io", "Node.js", "Express.js", "MongoDB"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            image: "bg-gradient-to-br from-purple-500 to-pink-600"
        },
        {
            title: "Blog Platform",
            description: "Full-featured blogging platform with rich text editor, comment system, user profiles, SEO optimization, and content management system.",
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "Quill.js"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            image: "bg-gradient-to-br from-indigo-500 to-blue-600"
        },
        {
            title: "Weather Dashboard",
            description: "Weather application with location-based forecasts, interactive maps, weather alerts, historical data, and customizable widgets.",
            technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            image: "bg-gradient-to-br from-cyan-500 to-blue-600"
        }
    ];
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                        Featured <span className="text-red-500">Projects</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                        A showcase of my MERN stack applications demonstrating full-stack development capabilities
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gray-500/10 overflow-hidden border border-border hover:border-green-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up rounded-lg"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image/Gradient */}
                            <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Code className="h-6 w-6 text-white opacity-80" />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <ReactiveButton outline
                                        className='rounded'
                                        color="green"
                                        idleText={
                                              <a className='flex' href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <BsGithub className="mr-2 h-4 w-4" />
                                        Code
                                    </a>
                                        }
                                        size="lerge"
                                    />
                                    <ReactiveButton 
                                        className='rounded'
                                        color="primary"
                                        idleText={
                                             <a className='flex' href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </a>
                                        }
                                        size="lerge"
                                    />
                                  
                                   

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects CTA */}
                <div className="text-center  mt-12 animate-fade-in-up animate-delay-800">
                    <ReactiveButton outline

                        color="primary"
                        idleText={<a className='flex p-1' href="https://github.com/sadhin28" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="mr-2 h-5 w-5" />
                            View All Projects on GitHub
                        </a>}
                        size="lerge"
                    />

                </div>
            </div>
        </section>
    );
};

export default Projects;