import React from 'react';

function Preloader(props) {
  return (
    <section className='preloader'>
      <i className="preloader__spinner"></i>
      <span className='preloader__span'>Идет поиск новостей...</span>
    </section>
  );
};

export default Preloader;
