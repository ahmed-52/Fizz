// Products.jsx
import { useState } from 'react';
import strawberryImage from '../public/strawberry-removebg-preview.png';
import blueImage from '../public/blue.png';
import lemonImage from '../public/lemon.png';
import orangeImage from '../public/orange.png';

const Products = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  const flavors = [
    {
      id: 'strawberry',
      name: 'Strawberry',
      image: strawberryImage,
      description: 'Fresh, juicy, and perfectly sweet. A classic flavor that never goes out of style.',
      color: '#D92F8A',
      topPick: true
    },
    {
      id: 'blue',
      name: 'Blue Raspberry',
      image: blueImage,
      description: 'Bold and refreshing, this electric blue flavor will light up your taste buds.',
      color: '#c4b9eb',
      topPick: false
    },
    {
      id: 'lemon',
      name: 'Lemon',
      image: lemonImage,
      description: 'Zesty and bright, a burst of citrus that energizes every sip.',
      color: '#FDF351',
      topPick: true
    },
    {
      id: 'orange',
      name: 'Orange',
      image: orangeImage,
      description: 'Fresh from top to bottom, this orange soda is crush-worthy.',
      color: '#ffa543',
      topPick: true
    }
  ];

  return (
    <section 
      className="py-20 px-6 lg:px-16 bg-white"
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-black mb-4">
            <span className="text-[#D92F8A]">Functional</span>{' '}
            <span className="text-cyan-500">Favorites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Can't decide on a flavor? We get it. Our variety pack of protein-powered faves means you never have to choose.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="group cursor-pointer"
              onClick={() => setSelectedFlavor(flavor)}
            >
              <div 
                className="rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-all p-6"
                style={{ backgroundColor: flavor.color }}
              >
                {flavor.topPick && (
                  <div className="inline-block bg-[#D92F8A] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    TOP PICK!
                  </div>
                )}
                <div className="aspect-square mb-4 flex items-center justify-center">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-black text-black mb-2">{flavor.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{flavor.description}</p>
                <button className="w-full bg-black text-white font-bold py-3 rounded-lg border-2 border-black hover:bg-gray-800 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Variety Pack Section */}
        <div className="bg-gradient-to-br from-[#FDF351] to-cyan-300 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-12 text-center">
          <h3 className="text-5xl font-black mb-4">Fun Favorites</h3>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Can't decide on a flavor? We get it. This variety pack of refreshing and fruity faves means you never have to choose.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {flavors.map((flavor) => (
              <div key={flavor.id} className="text-center">
                <div className="text-4xl font-black mb-2">2</div>
                <div className="text-lg font-bold">{flavor.name}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-xl px-6 py-3 border-3 border-black shadow-lg">
              <div className="text-2xl font-black text-[#D92F8A] mb-1">20g</div>
              <div className="text-sm font-bold uppercase">Protein</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 border-3 border-black shadow-lg">
              <div className="text-2xl font-black text-cyan-500 mb-1">0g</div>
              <div className="text-sm font-bold uppercase">Sugar</div>
            </div>
            <div className="bg-white rounded-xl px-6 py-3 border-3 border-black shadow-lg">
              <div className="text-2xl font-black text-[#FDF351] mb-1">✓</div>
              <div className="text-sm font-bold uppercase">L-Carnitine</div>
            </div>
          </div>

          <button className="bg-[#D92F8A] text-white font-black text-xl px-12 py-5 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

