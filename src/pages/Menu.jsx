import React from 'react';
import {
  Coffee,
  Croissant,
  Cookie,
  Cake,
  CupSoda,
  ChefHat,
  Sandwich,
  Apple,
  UtensilsCrossed,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const menuSections = [
  {
    title: 'Baked Goods',
    items: [
      { name: 'Scones', icon: <Croissant className='w-6 h-6 text-sinful-red' /> },
      { name: 'Bagels', icon: <ChefHat className='w-6 h-6 text-sinful-red' /> },
      {
        name: 'Garlic Cheddar Drop Biscuits',
        icon: <ChefHat className='w-6 h-6 text-sinful-red' />,
      },
      { name: 'Brownies', icon: <Cake className='w-6 h-6 text-sinful-red' /> },
      { name: 'Cookies', icon: <Cookie className='w-6 h-6 text-sinful-red' /> },
      { name: 'Cheese Danishes', icon: <Croissant className='w-6 h-6 text-sinful-red' /> },
      { name: 'Conchas', icon: <ChefHat className='w-6 h-6 text-sinful-red' /> },
      {
        name: 'Cinnamon Rolls (Weekends Only)',
        icon: <Croissant className='w-6 h-6 text-sinful-red' />,
      },
      {
        name: 'Sourdough Bread (Pre-order)',
        icon: <ChefHat className='w-6 h-6 text-sinful-red' />,
      },
      {
        name: 'Mini Bundt Cakes (Special Order)',
        icon: <Cake className='w-6 h-6 text-sinful-red' />,
      },
      {
        name: 'Buttermilk Biscuits (Special Order)',
        icon: <ChefHat className='w-6 h-6 text-sinful-red' />,
      },
    ],
  },
  {
    title: 'Sweet Toast',
    items: [
      {
        name: 'Basic – Butter & Jam',
        price: '$3',
        icon: <UtensilsCrossed className='w-6 h-6 text-frosting' />,
      },
      {
        name: 'Simple & Sweet – Sweet Cream Cheese & Berries',
        price: '$5',
        icon: <UtensilsCrossed className='w-6 h-6 text-frosting' />,
      },
      {
        name: 'Nutella Berry – Nutella & Strawberries',
        price: '$5',
        icon: <UtensilsCrossed className='w-6 h-6 text-frosting' />,
      },
      {
        name: 'Nutty Banana – Peanut Butter, Banana, Honey, Chia Seeds',
        price: '$5',
        icon: <UtensilsCrossed className='w-6 h-6 text-frosting' />,
      },
    ],
  },
  {
    title: 'Savory Toast',
    items: [
      {
        name: 'Tart & Tangy – Cream Cheese, Tomato, Lemon Pepper',
        price: '$5',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Margherita – Garlic Herb Cream Cheese, Pesto, Mozzarella, Tomato, Basil',
        price: '$6.5',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Red, White & Green – Pesto, Tomato, Avocado, Feta, Pine Nuts',
        price: '$7',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Cali Popper – Cream Cheese, Cheddar, Jalapeño, Avocado',
        price: '$7.5',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Deluxe Ham & Cheese – Garlic Herb Cream Cheese, Cheddar, Ham, Tomato, Avocado, Micro Greens',
        price: '$8.5',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Cali BLT – Butter, Cheddar, Bacon, Tomato, Avocado, Micro Greens',
        price: '$8',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Italian – Garlic Herb Cream Cheese, Ham, Salami, Tomato, Asiago, Basil',
        price: '$8.5',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
      {
        name: 'Extras – Bacon, Ham, Salami, Avocado, or Cream Cheese',
        price: '$1 each',
        icon: <UtensilsCrossed className='w-6 h-6 text-goldleaf' />,
      },
    ],
  },
  {
    title: 'Sandwiches',
    items: [
      {
        name: 'Garlic Cheddar Drop Biscuit – With Cream Cheese, Cheddar & Ham',
        price: '$5',
        icon: <Sandwich className='w-6 h-6 text-sinful-red' />,
      },
      {
        name: 'Bagel Sandwich – Any Bagel + Garlic Herb Cream Cheese, Cheddar & Ham',
        price: '$7',
        icon: <Sandwich className='w-6 h-6 text-sinful-red' />,
      },
    ],
  },
  {
    title: 'Yogurt & Cereal',
    items: [
      {
        name: 'Granola & Berries – Plain Greek Yogurt, House Granola, Berries, Honey',
        price: '$6.5',
        icon: <Apple className='w-6 h-6 text-halo' />,
      },
      {
        name: 'Granola Cereal – With Berries & Milk of Choice',
        price: '$6',
        icon: <Apple className='w-6 h-6 text-halo' />,
      },
    ],
  },
  {
    title: 'Coffee & Tea',
    items: [
      { name: 'Espresso (The Boy and The Bear)', icon: <Coffee className='w-6 h-6 text-halo' /> },
      { name: 'Specialty Coffee Drinks', icon: <Coffee className='w-6 h-6 text-halo' /> },
      { name: 'Sun Garden Loose Leaf Teas', icon: <CupSoda className='w-6 h-6 text-halo' /> },
    ],
  },
];

function Menu() {
  return (
    <main className='min-h-screen bg-saint text-sinner px-6 py-12'>
      <Helmet>
        <title>Menu | Saints & Sinners Bake Shop – Long Beach, CA</title>
        <meta
          name='description'
          content='Browse the full menu at Saints & Sinners Bake Shop in Long Beach, CA. Enjoy fresh-baked pastries, sweet and savory toasts, handmade sandwiches, and specialty coffee — all made in-house daily.'
        />

        <link rel='canonical' href='https://saintsandsinnersbakeshop.com/menu' />
        <meta property='og:title' content='Menu | Saints & Sinners Bake Shop' />
        <meta
          property='og:description'
          content='Explore our full selection of baked goods, sweet and savory toast, artisan coffee, and seasonal favorites.'
        />
        <meta property='og:url' content='https://saintsandsinnersbakeshop.com/menu' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://saintsandsinnersbakeshop.com/images/social-preview.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Menu | Saints & Sinners Bake Shop' />
        <meta
          name='twitter:description'
          content='Handcrafted pastries, sandwiches, toast, and coffee in Long Beach. See our menu.'
        />
        <meta
          name='twitter:image'
          content='https://saintsandsinnersbakeshop.com/images/social-preview.jpg'
        />
        <meta
          name='keywords'
          content='Long Beach bakery menu, pastries, toast, coffee, breakfast, custom cakes, Saints and Sinners Bake Shop'
        />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Menu',
            name: 'Saints & Sinners Bake Shop Menu',
            hasMenuSection: menuSections.map((section) => ({
              '@type': 'MenuSection',
              name: section.title,
              hasMenuItem: section.items.map((item) => ({
                '@type': 'MenuItem',
                name: item.name,
                ...(item.price && {
                  offers: {
                    '@type': 'Offer',
                    price: item.price.replace(/[^0-9.]/g, ''),
                    priceCurrency: 'USD',
                  },
                }),
              })),
            })),
          })}
        </script>
      </Helmet>

      <h1 className='text-4xl font-serif text-center mb-8'>Our Menu</h1>

      {menuSections.map((section, idx) => (
        <section key={idx} className='mb-8' aria-labelledby={`menu-section-${idx}`}>
          {/* Mobile accordion */}
          <details className='md:hidden border border-sinful-red rounded overflow-hidden'>
            <summary
              id={`menu-section-${idx}`}
              className='bg-sinful-red text-saint px-4 py-3 cursor-pointer text-lg font-serif'>
              {section.title}
            </summary>
            <ul className='divide-y divide-slate-200'>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className='flex justify-between items-start px-4 py-3 bg-sinner hover:bg-sinner/90 transition'>
                  <div className='flex items-center space-x-3'>
                    {item.icon &&
                      React.cloneElement(item.icon, {
                        className: `${item.icon.props.className} transition-transform duration-300`,
                      })}
                    <p className='text-saint font-serif'>{item.name}</p>
                  </div>
                  {item.price && (
                    <p className='text-goldleaf font-serif whitespace-nowrap'>{item.price}</p>
                  )}
                </li>
              ))}
            </ul>
          </details>

          {/* Desktop grid */}
          <div className='hidden md:block'>
            <h2
              id={`menu-section-${idx}`}
              className='text-2xl font-serif mb-4 pb-2 flex items-center gap-2'>
              <span className='border-b border-sinful-red flex-grow'></span>
              {section.title}
              <span className='border-b border-sinful-red flex-grow'></span>
            </h2>

            <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-2'>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className='group flex justify-between items-start p-4 bg-sinner rounded-xl shadow border border-slate-200 hover:ring-1 hover:ring-sinful-red/40 transition'>
                  <div className='flex items-center space-x-3'>
                    {item.icon &&
                      React.cloneElement(item.icon, {
                        className: `${item.icon.props.className} transition-transform duration-300 group-hover:rotate-6`,
                      })}
                    <p className='text-lg font-serif font-semibold text-saint'>{item.name}</p>
                  </div>
                  {item.price && (
                    <p className='text-base font-serif font-semibold text-goldleaf whitespace-nowrap'>
                      {item.price}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Menu;
