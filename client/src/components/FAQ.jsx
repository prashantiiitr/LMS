import React from 'react';

const FAQ = () => {
  const questions = [
    "Will I get lifetime access to the course?",
    "What if I’m new to crypto?",
    "How can I avoid huge losses?",
    "What if I miss the session?"
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h3 className="text-xl font-bold text-center mb-8">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto">
        {questions.map((q, index) => (
          <details key={index} className="mb-4 border p-4 rounded">
            <summary className="cursor-pointer font-semibold">{q}</summary>
            <p className="mt-2 text-gray-700">Answer will go here based on actual FAQ content.</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
