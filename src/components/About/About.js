import React from 'react';
import foto from '../../images/1.jpg';

function About() {
  return (
    <section className='about'>
      <img src={foto} alt='Фотография автора' className='about__foto' />
      <div className='about__description-area'>
        <h3 className='about__title'>Об авторе</h3>
        <p className='about__text'>
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className='about__text'>
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
};

export default About;
