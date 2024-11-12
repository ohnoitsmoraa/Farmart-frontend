// ProductPage.jsx
import React, { useState } from 'react';

const animalsData = [
 
  { id: 1, name: 'Cow', image: 'https://via.placeholder.com/150', price: 20000, age: 5, breed: 'Jersey' },
  { id: 2, name: 'Sheep', image: 'https://via.placeholder.com/150', price: 7000, age: 3, breed: 'Merino' },
  { id: 3, name: 'Pig', image: 'https://via.placeholder.com/150', price: 10000, age: 2, breed: 'Yorkshire' },
  { id: 4, name: 'Goat', image: 'https://via.placeholder.com/150', price: 8000, age: 4, breed: 'Boer' },
  { id: 5, name: 'Horse', image: 'https://via.placeholder.com/150', price: 25000, age: 6, breed: 'Arabian' },
  { id: 6, name: 'Cat', image: 'https://via.placeholder.com/150', price: 2000, age: 1, breed: 'Siamese' },
  { id: 7, name: 'Rabbit', image: 'https://via.placeholder.com/150', price: 1500, age: 1, breed: 'Angora' },
  { id: 8, name: 'Donkey', image: 'https://via.placeholder.com/150', price: 12000, age: 7, breed: 'Miniature' },
  { id: 9, name: 'Llama', image: 'https://via.placeholder.com/150', price: 18000, age: 5, breed: 'Suri' },
  { id: 10, name: 'Duck', image: 'https://via.placeholder.com/150', price: 500, age: 1, breed: 'Pekin' },
  { id: 11, name: 'Chicken', image: 'https://via.placeholder.com/150', price: 300, age: 1, breed: 'Leghorn' },
  { id: 12, name: 'Alpaca', image: 'https://via.placeholder.com/150', price: 17000, age: 4, breed: 'Huacaya' },
  { id: 13, name: 'Turkey', image: 'https://via.placeholder.com/150', price: 800, age: 2, breed: 'Bronze' },
  { id: 14, name: 'Dog', image: 'https://via.placeholder.com/150', price: 5000, age: 3, breed: 'Labrador' },
  { id: 15, name: 'Cat', image: 'https://via.placeholder.com/150', price: 2500, age: 2, breed: 'Bengal' },
  { id: 16, name: 'Pigeon', image: 'https://via.placeholder.com/150', price: 200, age: 1, breed: 'Homing' },
  { id: 17, name: 'Camel', image: 'https://via.placeholder.com/150', price: 30000, age: 8, breed: 'Dromedary' },
  { id: 18, name: 'Goose', image: 'https://via.placeholder.com/150', price: 700, age: 2, breed: 'Embden' },
  { id: 19, name: 'Ferret', image: 'https://via.placeholder.com/150', price: 1200, age: 1, breed: 'Sable' },
  { id: 20, name: 'Fish', image: 'https://via.placeholder.com/150', price: 50, age: 1, breed: 'Goldfish' },
  { id: 30, name: 'Goat', breed: 'Boer', age: '4 years', price: 8000, image: 'goat.jpg' },
];

const ProductPage = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayLimit, setDisplayLimit] = useState(6);

  const filteredAnimals = animalsData.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Farm Animals</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search animals by name..."
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Animal Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAnimals.slice(0, displayLimit).map((animal) => (
          <div key={animal.id} className="border rounded-lg p-4 bg-white shadow-md">
            <img src={animal.image} alt={animal.name} className="h-32 w-full object-cover mb-2 rounded-md" />
            <h3 className="text-xl font-semibold">{animal.name}</h3>
            <p className="text-gray-700">Breed: {animal.breed}</p>
            <p className="text-gray-700">Age: {animal.age}</p>
            <p className="text-green-800 font-bold">Kes {animal.price}</p>
            <button
              onClick={() => addToCart(animal)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* "See All" Button */}
      {filteredAnimals.length > displayLimit && (
        <button
          onClick={() => setDisplayLimit(displayLimit + 16)}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          See All
        </button>
      )}
    </div>
  );
};

export default ProductPage;
