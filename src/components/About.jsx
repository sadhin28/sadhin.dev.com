import { Code, Database, Globe, Server } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: <Code className="h-8 w-8" />,
            title: "Frontend Excellence",
            description: "Creating responsive and interactive user interfaces with React, modern CSS, and state management."
        },
        {
            icon: <Server className="h-8 w-8" />,
            title: "Backend Mastery",
            description: "Building robust APIs and server-side applications with Node.js, Express.js, and RESTful services."
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: "Database Design",
            description: "Designing and optimizing MongoDB databases with efficient schemas and aggregation pipelines."
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Full-Stack Integration",
            description: "Seamlessly connecting frontend and backend for complete web application solutions."
        }
    ];
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                        About <span className="text-red-500">Me</span>
                    </h2>
                    <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
                        Passionate full-stack developer with expertise in the MERN stack, dedicated to creating
                        innovative web solutions that combine beautiful design with powerful functionality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in-left">
                        <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I'm a dedicated MERN stack developer with a passion for creating seamless digital experiences.
                            My journey began with a curiosity about how web applications work, which led me to master the
                            complete JavaScript ecosystem.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I specialize in building scalable web applications using MongoDB for data storage, Express.js
                            for server-side logic, React for dynamic user interfaces, and Node.js for backend development.
                            This full-stack approach allows me to create cohesive solutions from concept to deployment.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;