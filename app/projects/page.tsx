import React from 'react'

const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of your first project and its key features.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        image: '/project1.jpg',
    },
    {
        title: 'Project 2',
        description: 'A brief description of your second project and its key features.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        image: '/project2.jpg',
    },
    // Add more projects as needed
]

export default function Page() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 bg-gray-200">
                                {/* Replace with actual image */}
                                <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                                    <span className="text-gray-400">Project Image</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 