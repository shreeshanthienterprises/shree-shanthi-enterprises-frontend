import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3809.227424808421!2d78.44177037516303!3d17.304572783568556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDE4JzE2LjUiTiA3OMKwMjYnMzkuNiJF!5e0!3m2!1sen!2sin!4v1757787639379!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </section>
  );
};

export default MapSection;