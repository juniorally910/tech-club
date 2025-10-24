import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Join from "../Components/Join";

const JoinCohort = () => {
  const { id } = useParams();
  const [cohort, setCohort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch cohort details
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchCohort = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/cohort-inform/${id}`);
        setCohort(res.data.cohort || null);
      } catch (err) {
        console.error(err);
        setMessage("Error fetching cohort details");
      } finally {
        setLoading(false);
      }
    };
    fetchCohort();
  }, [id]);

  const handleJoin = async () => {
    setJoining(true);
    try {
      const res = await axios.post(`${apiUrl}/api/cohort-inform/assign`, {
        cohortId: id,
      });

      setTimeout(() => {
          setMessage(res.data.message);
      }, 2000);
      // Refresh cohort to show updated students
      const updated = await axios.get(`${apiUrl}/api/cohort-inform/${id}`);
      setCohort(updated.data.cohort);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Failed to join cohort");
    } finally {
      setJoining(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 animate-spin border-3 rounded-full border-blue-200 mr-5"></div>
        <p className="text-gray-500 text-lg">Please wait for  cohort details...</p>
      </div>
    );
  }

  if (!cohort) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">Cohort not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-purple-600 to-pink-500 justify-items-center gap-4 px-6 py-12">
      
      {/* Include your application form here */}
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Complete Your Application
        </h2>
        <Join cohortId={id} /> {/* pass cohortId if your form needs it */}
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 w-full h-[500px] max-w-3xl mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{cohort.name}</h1>
        <p className="text-gray-600 mb-4">{cohort.description}</p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Program:</span> {cohort.program}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Dates:</span>{" "}
          {new Date(cohort.startDate).toLocaleDateString()} -{" "}
          {new Date(cohort.endDate).toLocaleDateString()}
        </p>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Students Joined:
          </h2>
          {Array.isArray(cohort.students) && cohort.students.length > 0 ? (
            <ul className="list-disc pl-5 text-gray-700 max-h-40 overflow-y-auto">
              {cohort.students.map((student) => (
                <li key={student._id}>
                  {student.name} ({student.email})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No students have joined yet.</p>
          )}
        </div>

        {message && (
          <p className="text-center text-green-600 font-semibold mb-4">
            {message}
          </p>
        )}

        <button
          onClick={handleJoin}
          disabled={joining}
          className={`w-full py-3 rounded-xl text-white font-semibold transition ${
            joining
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {joining ? "Joining..." : "Join Cohort"}
        </button>
      </div>
    </div>
  );
};

export default JoinCohort;
