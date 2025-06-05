import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hsx = () => {
  const navigate = useNavigate();

  const handleBookSpot = () => {
    navigate('/home');
  };

  return (
    <section className="bg-black text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Unlock the Easiest Way to Trade and Maximize Your Crypto Profits in 2025!
      </h2>
      <p className="mb-6">Join 10,000+ students already learning with us.</p>
      <button
        onClick={handleBookSpot}
        className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 font-semibold rounded"
      >
        Book Your Free Spot@9
      </button>
      <div className="flex justify-center gap-4 mt-10">
        <iframe
          className="rounded-lg"
          width="320"
          height="180"
          src="https://www.youtube.com/embed/-2RAq5o5pwc"
          title="Crypto Workshop"
          allowFullScreen
        ></iframe>
        <img
          src="https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=612x612&w=0&k=20&c=e2XUx498GotTLJn_62tPmsqj6vU48ZEkf0auXi6Ywh0="
          alt="Trainers"
          className="w-80 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hsx;
