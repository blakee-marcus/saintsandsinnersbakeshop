import React from 'react';
import { Helmet } from 'react-helmet-async';

function SpecialtyCakes() {
  return (
    <div className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Specialty Cakes | Saints & Sinners Bake Shop</title>
        <meta
          name='description'
          content='Explore our handcrafted specialty cakes at Saints & Sinners Bake Shop in Long Beach. Made to order with a variety of flavors and frostings.'
        />
      </Helmet>

      <h1 className='text-4xl font-serif text-center mb-8'>Specialty Cakes</h1>

      <div className='max-w-3xl mx-auto space-y-6'>
        <p>
          Interested in getting a cake for your celebration? Please email us regarding the ordering
          of a cake. All cakes are made to order, so advance ordering is necessary. Two week advance
          notice is optimal, since spots book up fast. We will help you pick the right size cake for
          your occasion. Every size and style is different, so we will help price out a cake for
          your needs.
        </p>

        <p>
          Our cakes come standard with three layers of cake and are made with one of the following
          frostings: American buttercream, Swiss buttercream, cream cheese, chocolate ganache, or
          whipped cream. Specialty flavors determine the frosting type. Fresh fruit and floral
          decorations are extra as well.
        </p>

        <p>
          We are a traditional bakery; if you have any dietary restrictions, we can only offer a
          vegan chocolate cake and vegan buttercream as an option.
        </p>

        <p>Please email for a quote (too many sizes and prices to list here).</p>

        <p className='font-semibold'>
          **Birthday messages/writing cost extra and are not included in quote**
        </p>

        <p>
          <strong>Contact:</strong>{' '}
          <a href='mailto:email@saintsandsinnersbakeshop.com' className='text-sinful-red underline'>
            email@saintsandsinnersbakeshop.com
          </a>
        </p>

        <div>
          <h2 className='text-2xl font-serif mt-8 mb-4'>Base Flavors</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Vanilla</li>
            <li>Chocolate</li>
            <li>Marble</li>
            <li>Confetti</li>
            <li>Red Velvet</li>
            <li>Lemon</li>
            <li>Pumpkin</li>
            <li>Carrot</li>
            <li>Brown Sugar</li>
            <li>Coconut</li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-serif mt-8 mb-4'>Specialty Flavors</h2>
          <ul className='list-disc list-inside space-y-1'>
            <li>Chocolate Dipped Strawberry</li>
            <li>Double Chocolate</li>
            <li>Peanut Butter Cup</li>
            <li>S’more</li>
            <li>Triple Chocolate</li>
            <li>Chocolate Caramel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpecialtyCakes;
