import React from 'react';

const StepByStep = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h3 className="text-xl font-bold text-center mb-8">Learn How to Trade with a Low-Risk, Step-by-Step Approach</h3>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div>
          <h4 className="font-semibold mb-2">PART 1: Foundations</h4>
          <ul className="list-disc list-inside">
            <li>Understand how crypto markets work</li>
            <li>Set up your trading tools</li>
            <li>Manage your risk</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">PART 2: Strategies</h4>
          <ul className="list-disc list-inside">
            <li>Learn 3 profitable strategies</li>
            <li>Analyze market trends</li>
            <li>Entry/exit timing secrets</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
