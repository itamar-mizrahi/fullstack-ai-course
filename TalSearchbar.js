// Mock Data for Projects
const projects = [
    {
        id: 1,
        title: "AI Image Generator",
        description: "A powerful tool using deep learning to generate images from text descriptions.",
        tags: ["Python", "TensorFlow", "React"]
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        description: "Real-time analytics dashboard for online retailers with sales tracking.",
        tags: ["Vue.js", "Node.js", "PostgreSQL"]
    },
    {
        id: 3,
        title: "Smart Home Assistant",
        description: "Voice-controlled home automation system integrating with IoT devices.",
        tags: ["C++", "IoT", "AWS"]
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A minimalist personal portfolio site showcasing design and coding skills.",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 5,
        title: "Crypto Tracker",
        description: "Mobile-first application for tracking cryptocurrency prices and market trends.",
        tags: ["React Native", "API", "Firebase"]
    }
];

// Search Function
function searchProjects(query) {
    if (!query) {
        return projects;
    }
    
    const lowerCaseQuery = query.toLowerCase();
    
    return projects.filter(project => {
        return (
            project.title.toLowerCase().includes(lowerCaseQuery) ||
            project.description.toLowerCase().includes(lowerCaseQuery) ||
            project.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );
    });
}
