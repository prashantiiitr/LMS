import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-xl font-bold mb-6">Check Out What These Traders Have To Say</h3>
      <div className="flex justify-center gap-6 flex-wrap">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/-2RAq5o5pwc
"
          title="Student Testimonial 1"
          allowFullScreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/-2RAq5o5pwc
"
          title="Student Testimonial 2"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Testimonials;
