import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/techclub")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="py-12 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Projects & Prototypes</h2>
        <p className="text-gray-600 mt-2">
          Real projects built by our community members
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>

            {/* Status & Priority */}
            <div className="flex gap-2 mb-2">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  project.status === "Planning"
                    ? "bg-yellow-100 text-yellow-700"
                    : project.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {project.status}
              </span>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  project.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : project.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {project.priority}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Dates */}
            <p className="text-sm text-gray-500 mb-2">
              📅 {project.startDate} - {project.endDate}
            </p>

            {/* Progress */}
            <div className="mb-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* GitHub link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
