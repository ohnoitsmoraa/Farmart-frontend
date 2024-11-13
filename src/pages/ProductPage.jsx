// ProductPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const animalsData = [
    { id: 1, name: 'Cow', image: 'https://media.istockphoto.com/id/2128077473/photo/jersey-cow-side-view-in-a-green-pasture-looking-and-large-udder.jpg?s=612x612&w=0&k=20&c=yCHRiatMo4nouALd1uc6GUsuhS3_rCtpgMs6T9fQK3g=', price: 20000, age: 5, breed: 'Jersey' },
    { id: 2, name: 'Sheep', image: 'https://media.istockphoto.com/id/165847420/photo/sheep.jpg?s=612x612&w=0&k=20&c=-6FtvuuBnpo7RiP8Y_LR4yHG6-yuOaWnwu4uDuhdg94=', price: 7000, age: 3, breed: 'Merino' },
    { id: 3, name: 'Pig', image: 'https://media.istockphoto.com/id/869822406/photo/beautiful-young-female-sow-grazing-on-pasture-summertime.jpg?s=612x612&w=0&k=20&c=VuEED7H_3c0CcH9Hrx6PeHrUenztqI8ZoUuH_ZlPJqY=', price: 10000, age: 2, breed: 'Yorkshire' },
    { id: 4, name: 'Goat', image: 'https://media.istockphoto.com/id/1495083421/photo/boer-goat-walking-in-a-green-grassy-field.jpg?s=612x612&w=0&k=20&c=3qQgA2uUetmZ_guz5nm1jThReHb8oqbdu9KIjJqXppY=', price: 8000, age: 4, breed: 'Boer' },
    { id: 5, name: 'Horse', image: 'https://media.istockphoto.com/id/1427594977/photo/arabian-horse-beautiful-arabian-horse.jpg?s=612x612&w=0&k=20&c=26NsTNFKa7thTlXzVEtsN3O-E1ln0jQcTTp2LJuoaAw=', price: 25000, age: 6, breed: 'Arabian' },
    { id: 6, name: 'Cat', image: 'https://media.istockphoto.com/id/176697468/photo/view-siamese-cat.jpg?s=612x612&w=0&k=20&c=DpbQPqJAZKvwFPr8_iQm1CvNQ_6UeIlzHKqL3wsx3aA=', price: 2000, age: 1, breed: 'Siamese' },
    { id: 7, name: 'Rabbit', image: 'https://media.istockphoto.com/id/1309323293/photo/a-furry-english-angora-rabbit.jpg?s=612x612&w=0&k=20&c=n1BQ-IuC9rWAGPp0Z2NVxVk954xPURJ1WQcy077Pjyw=', price: 1500, age: 1, breed: 'Angora' },
    { id: 8, name: 'Donkey', image: 'https://media.istockphoto.com/id/2133540563/photo/donkey-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=n0ng7EwHYNxti6yZzcFdXCbERrzzogKYqcmnl70IQiQ=', price: 12000, age: 7, breed: 'Miniature' },
    { id: 9, name: 'Llama', image: 'https://media.istockphoto.com/id/139880793/photo/alpaca.jpg?s=612x612&w=0&k=20&c=XLWF32g2AMszGscTZhNbIuxAnTJqomETHmSPeMTHjSE=', price: 18000, age: 5, breed: 'Suri' },
    { id: 10, name: 'Duck', image: 'https://media.istockphoto.com/id/2159166035/photo/american-pekin-duck.jpg?s=612x612&w=0&k=20&c=sZHV_y_xFft29dgfuFBeoK8atnzjx4L2L5f-QewB6oA=', price: 500, age: 1, breed: 'Pekin' },
    { id: 11, name: 'Chicken', image: 'https://media.istockphoto.com/id/1746877640/photo/white-hen-isolated.jpg?s=612x612&w=0&k=20&c=P3p0vVw4UNlU4B_bdmof6-F_cUJ2mVHWVoMls0shdE0=', price: 300, age: 1, breed: 'Leghorn' },
    { id: 12, name: 'Alpaca', image: 'https://media.istockphoto.com/id/1453150611/photo/brown-white-calico-alpaca-llama.jpg?s=612x612&w=0&k=20&c=1RkSWBYvFbnuqqtdVwdTWNjJQ6Hdf-QvH4R8_drm3cQ=', price: 17000, age: 4, breed: 'Huacaya' },
    { id: 13, name: 'Turkey', image: 'https://media.istockphoto.com/id/1285143579/photo/turkey-cock-with-spread-wings-isolated-on-white.jpg?s=612x612&w=0&k=20&c=yZv-8et5DAMQpNePH470OMCalyHVn2BZ3R3Tebv1rvc=', price: 800, age: 2, breed: 'Bronze' },
    { id: 14, name: 'Dog', image: 'https://media.istockphoto.com/id/186869569/photo/labrador-dog-sitting-on-white-background.jpg?s=612x612&w=0&k=20&c=cIlHzT0f6KtFZSk8Bp8ilicyJJRXSgUwV4OcM-IsIUk=', price: 5000, age: 3, breed: 'Labrador' },
    { id: 15, name: 'Cat', image: 'https://media.istockphoto.com/id/182781330/photo/playful-cat.jpg?s=612x612&w=0&k=20&c=fOO_nv5zjNa90t1PXONptHE0dTS-m55f-5gmZ49dioE=', price: 2500, age: 2, breed: 'Bengal' },
    { id: 16, name: 'Pigeon', image: 'https://media.istockphoto.com/id/824175620/photo/homing-pigeon-pooping-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=rAo4EK70V4Bc7fba0yaWl3kHkERfTGvcbHlIalRncT0=', price: 200, age: 1, breed: 'Homing' },
    { id: 17, name: 'Camel', image: 'https://media.istockphoto.com/id/1190556631/photo/camel-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=4ig76eF0CzsD7kloGPJ6kz24ctHZQoTj81-oyyuuMLg=', price: 30000, age: 8, breed: 'Dromedary' },
    { id: 18, name: 'Goose', image: 'https://media.istockphoto.com/id/537545716/photo/chinese-dumb-duck-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=77bWjsEEOacnGo6Wb1xNUS6xNn7e4_iGHaR0tceNw0Q=', price: 700, age: 2, breed: 'Embden' },
    { id: 19, name: 'Ferret', image: 'https://media.istockphoto.com/id/922768006/photo/ferret-baby-on-white-background.jpg?s=612x612&w=0&k=20&c=00PqYPqW5bvBFqiSkRgjMMv00b4NI1zrq5Cg5bi10vo=', price: 1200, age: 1, breed: 'Sable' },
    { id: 20, name: 'Fish', image: 'https://media.istockphoto.com/id/1205505358/photo/goldfish-isolated-on-a-dark-black-background.jpg?s=612x612&w=0&k=20&c=5SstzozoVakhyJeKdgLZNmG9rsz9M6-ngUUp3Zx411U=', price: 50, age: 1, breed: 'Goldfish' },
];

const ProductPage = ({ addToCart, cartItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayLimit, setDisplayLimit] = useState(12);

  const filteredAnimals = animalsData.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 items-center justify-center text-center">
      {/* Header with Cart Icon */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-800">Animals</h1>

        {/* Search Bar and Cart Button */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search animals by name..."
            className="p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative flex items-center">
            <span className="text-2xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Animal Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAnimals.slice(0, displayLimit).map((animal) => (
          <div key={animal.id} className="border rounded-lg p-4 bg-white shadow-md">
            <img src={animal.image} alt={animal.name} className="h-64 w-full object-cover mb-2 rounded-md" />
            <h3 className="text-xl font-semibold">{animal.name}</h3>
            <p className="text-gray-700">Breed: {animal.breed}</p>
            <p className="text-gray-700">Age: {animal.age}</p>
            <p className="text-green-800 font-bold">Kes {animal.price}</p>
            <button
              onClick={() => addToCart(animal)}
              className="mt-2 bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* "See All" Button */}
      {filteredAnimals.length > displayLimit && (
        <button
          onClick={() => setDisplayLimit(displayLimit + 12)}
          className="mt-4 p-10  bg-green-900 text-white py-2 rounded-md hover:bg-green-600"
        >
          See All
        </button>
      )}
    </div>
  );
};

export default ProductPage;
