import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cif = () => {
  const navigate = useNavigate();

  const handleBookSpot = () => {
    navigate('/home')
  };

  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-xl font-bold mb-4">Who is This Course For?</h3>
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {['Beginners', 'Part-Time Traders', 'Students', 'Working Pros'].map((role) => (
          <span key={role} className="bg-black text-white px-4 py-2 rounded-full">
            {role}
          </span>
        ))}
      </div>
      <button
        onClick={handleBookSpot}
        className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 font-semibold rounded"
      >
        EXPLORE COURSES
      </button>
    </section>
  );
};

export default Cif;
