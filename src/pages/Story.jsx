import React from 'react';

function Story() {
  return (
    <section className='bg-saint text-sinner px-6 py-16'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-4xl font-serif mb-6'>About Us</h2>
        <p className='text-lg leading-relaxed font-light'>
          I started <span className='font-semibold text-sinful-red'>Saints and Sinners</span>{' '}
          because I adore sweets — plain and simple. Even after spending years as a professional
          baker and cake decorator, it’s still incredibly exciting to watch someone enjoy a new
          confection with child-like joy.
        </p>
        <p className='text-lg leading-relaxed font-light mt-6'>
          I love the creativity involved in making a new recipe and the artistic freedom I’m allowed
          when decorating a dessert. Not only do I want our sweets to{' '}
          <span className='italic'>look</span> amazing, I also want them to{' '}
          <span className='italic'>taste</span> extraordinary.
        </p>
        <p className='text-lg leading-relaxed font-light mt-6'>
          All of our recipes have been carefully developed over years of experimenting with
          ingredients, flavor combinations, and fresh takes on standard favorites. We love desserts
          that feel wholesome and taste vibrant — and we strive to make them using only the highest
          quality ingredients available.
        </p>
      </div>
    </section>
  );
}

export default Story;
