import React, { useState, useEffect } from "react";
import { Plus, Trash2, Edit2 } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    startDate: "",
    endDate: "",
    progress: 0,
    githubUrl: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/techclub")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const openForm = (project = null) => {
    if (project) {
      setEditProject(project);
      setFormData(project);
    } else {
      setEditProject(null);
      setFormData({
        title: "",
        description: "",
        status: "",
        priority: "",
        startDate: "",
        endDate: "",
        progress: 0,
        githubUrl: "",
      });
    }
    setShowForm(true);
  };

  const handleSave = async () => {
    try {
      if (editProject) {
        const res = await fetch(
          `http://localhost:5000/techclub/${editProject._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        const updatedProject = await res.json();
        setProjects(
          projects.map((p) =>
            p._id === updatedProject._id ? updatedProject : p
          )
        );
      } else {
        const res = await fetch("http://localhost:5000/techclub", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const newProject = await res.json();
        setProjects([...projects, newProject]);
      }
      setShowForm(false);
    } catch (err) {
      console.error("Error saving project:", err);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/techclub/${id}`, { method: "DELETE" });
    setProjects(projects.filter((p) => p._id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Project Management</h1>
        <button
          onClick={() => openForm()}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          <Plus size={18} /> Add Project
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="p-5 bg-white shadow-md rounded-xl border flex flex-col justify-between"
          >
            <div>
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

              {/* Title & Description */}
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-gray-600 text-sm mt-1">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mt-4">
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

              {/* Dates */}
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <span className="mr-4">📅 {project.startDate} - {project.endDate}</span>
              </div>
            </div>

            {/* Edit/Delete */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => openForm(project)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              {editProject ? "Edit Project" : "Add New Project"}
            </h2>

            {/* Title */}
            <input
              type="text"
              placeholder="Project Title"
              className="w-full p-2 border rounded mb-3 bg-gray-50"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            {/* Description */}
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded mb-3 bg-gray-50"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            {/* Status */}
            <select
              className="p-2 border rounded bg-gray-50 mb-3 w-full"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="">Select status</option>
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>

            {/* Priority */}
            <select
              className="p-2 border rounded bg-gray-50 mb-3 w-full"
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
            >
              <option value="">Select priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="date"
                className="p-2 border rounded bg-gray-50"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
              <input
                type="date"
                className="p-2 border rounded bg-gray-50"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
              />
            </div>

            {/* Progress */}
            <input
              type="number"
              placeholder="Progress %"
              className="w-full p-2 border rounded mb-3 bg-gray-50"
              value={formData.progress}
              onChange={(e) =>
                setFormData({ ...formData, progress: e.target.value })
              }
            />

            {/* GitHub URL */}
            <input
              type="url"
              placeholder="GitHub URL (optional)"
              className="w-full p-2 border rounded mb-3 bg-gray-50"
              value={formData.githubUrl}
              onChange={(e) =>
                setFormData({ ...formData, githubUrl: e.target.value })
              }
            />

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
              >
                {editProject ? "Save Changes" : "Add Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
