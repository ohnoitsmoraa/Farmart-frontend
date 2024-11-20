import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const animalsData = [
  { id: 1, name: 'Cow', image: 'https://media.istockphoto.com/id/535377969/photo/brown-cow.jpg?s=612x612&w=0&k=20&c=_s24FrK61f5A1OIVEZvvTC80zQeh8Tlz7PvfjwZRWTs=', price: 20000, age: 5, breed: 'Jersey', status: 'Available' },
  { id: 2, name: 'Sheep', image: 'https://media.istockphoto.com/id/102716830/photo/front-view-of-arles-merino-sheep-ram-standing.jpg?s=612x612&w=0&k=20&c=ncY5w-TPiuvzGS7TDaubFu1xQlFtL5gnKTYojOQRIdk=', price: 7000, age: 3, breed: 'Merino', status: 'Sold' },
  { id: 3, name: 'Pig', image: 'https://media.istockphoto.com/id/1139789449/photo/young-pig-on-white-background.jpg?s=612x612&w=0&k=20&c=jep4wpqBabfoeKvQtra0vOnT61darFuzR6Kxip19MeE=', price: 10000, age: 2, breed: 'Yorkshire', status: 'Available' },
  { id: 4, name: 'Goat', image: 'https://media.istockphoto.com/id/816545134/photo/boer-goat-on-white.jpg?s=612x612&w=0&k=20&c=HUz68tV5icKqus8fUWNPQEd9CSb9yQ7VxPLgcdYws7o=', price: 8000, age: 4, breed: 'Boer', status: 'Sold' },
  { id: 5, name: 'Horse', image: 'https://media.istockphoto.com/id/457769421/photo/arabian-horse-mare-isolated-on-white.jpg?s=612x612&w=0&k=20&c=uuOrM9v0PcECy4SOemJhyN2D3w9hajXVTVpVzsrr7tk=', price: 25000, age: 6, breed: 'Arabian', status: 'Available' },
  { id: 6, name: 'Cat', image: 'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=', price: 2000, age: 1, breed: 'Siamese', status: 'Available' },
  { id: 7, name: 'Rabbit', image: 'https://media.istockphoto.com/id/450608541/photo/rabbit-sitting-on-white-background.jpg?s=612x612&w=0&k=20&c=0yaStTEqOXrbpkEHeUQ7n_QSNtSXJ1tgkLZdK_bpMY0=', price: 1500, age: 1, breed: 'Angora', status: 'Sold' },
  { id: 8, name: 'Donkey', image: 'https://media.istockphoto.com/id/2133540563/photo/donkey-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=n0ng7EwHYNxti6yZzcFdXCbERrzzogKYqcmnl70IQiQ=', price: 12000, age: 7, breed: 'Miniature', status: 'Available' },
  { id: 9, name: 'Sheep', image: 'https://media.istockphoto.com/id/665135234/photo/sheep-farm-animal-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=TsO0kDhPS4D2N_bfBgXzFEMmnLp9QP0CI0lP3mA_9dA=', price: 8000, age: 5, breed: 'Dorper', status: 'Available' },
  { id: 10, name: 'Duck', image: 'https://media.istockphoto.com/id/2159166035/photo/american-pekin-duck.jpg?s=612x612&w=0&k=20&c=sZHV_y_xFft29dgfuFBeoK8atnzjx4L2L5f-QewB6oA=', price: 500, age: 1, breed: 'Pekin', status: 'Sold' },
  { id: 11, name: 'Chicken', image: 'https://media.istockphoto.com/id/1146111649/photo/brown-dwarf-hen-on-white-background.jpg?s=612x612&w=0&k=20&c=JtTYHwDfZAdRiUMHoHohkLXpeSA1agiUp93xGwdFWtA=', price: 300, age: 1, breed: 'Leghorn', status: 'Available' },
  { id: 12, name: 'Alpaca', image: 'https://media.istockphoto.com/id/1453150611/photo/brown-white-calico-alpaca-llama.jpg?s=612x612&w=0&k=20&c=1RkSWBYvFbnuqqtdVwdTWNjJQ6Hdf-QvH4R8_drm3cQ=', price: 17000, age: 4, breed: 'Huacaya', status: 'Sold' },
  { id: 13, name: 'Turkey', image: 'https://media.istockphoto.com/id/1285143579/photo/turkey-cock-with-spread-wings-isolated-on-white.jpg?s=612x612&w=0&k=20&c=yZv-8et5DAMQpNePH470OMCalyHVn2BZ3R3Tebv1rvc=', price: 800, age: 2, breed: 'Bronze', status: 'Available' },
  { id: 14, name: 'Dog', image: 'https://media.istockphoto.com/id/1283671216/photo/attentive-black-labrador-dog-looking-up-side-view-isolated-on-white-background-obedience.jpg?s=612x612&w=0&k=20&c=91gaRzAW5SR-0IkLHxzSQu5gwNFVnqgLgs7F6CdSq2E=', price: 5000, age: 3, breed: 'Labrador', status: 'Available' },
  { id: 15, name: 'Cat', image: 'https://media.istockphoto.com/id/182781330/photo/playful-cat.jpg?s=612x612&w=0&k=20&c=fOO_nv5zjNa90t1PXONptHE0dTS-m55f-5gmZ49dioE=', price: 2500, age: 2, breed: 'Bengal', status: 'Sold' },
  { id: 16, name: 'Pigeon', image: 'https://media.istockphoto.com/id/824175620/photo/homing-pigeon-pooping-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=rAo4EK70V4Bc7fba0yaWl3kHkERfTGvcbHlIalRncT0=', price: 200, age: 1, breed: 'Homing', status: 'Available' },
  { id: 17, name: 'Camel', image: 'https://media.istockphoto.com/id/1190556631/photo/camel-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=4ig76eF0CzsD7kloGPJ6kz24ctHZQoTj81-oyyuuMLg=', price: 30000, age: 8, breed: 'Dromedary', status: 'Available' },
  { id: 18, name: 'Goose', image: 'https://media.istockphoto.com/id/537545716/photo/chinese-dumb-duck-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=77bWjsEEOacnGo6Wb1xNUS6xNn7e4_iGHaR0tceNw0Q=', price: 700, age: 2, breed: 'Embden', status: 'Sold' },
  { id: 19, name: 'Cow', image: 'https://media.istockphoto.com/id/505137898/photo/holstein-cow.jpg?s=612x612&w=0&k=20&c=Jkgj5lzrC-B9pdlfalX3k1UjHmgV-cJsI1F17QFsIjc=', price: 50000, age: 4, breed: 'Fresian', status: 'Available' },
  { id: 20, name: 'Dog', image: 'https://media.istockphoto.com/id/146889930/photo/german-shepherd-isolated-on-white.jpg?s=612x612&w=0&k=20&c=SqkEVxHGRuHdW1faF8WIswsVs04QanAmausbNUaVE6Y=', price: 45000, age: 2, breed: 'German Shepherd', status: 'Available' }
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
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4 sm:mb-0">
          Animals
        </h1>

        {/* Search Bar and Cart Button */}
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-md w-full sm:w-auto"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAnimals.slice(0, displayLimit).map((animal) => (
          <div
            key={animal.id}
            className="border rounded-lg p-4 sm:p-6 bg-white shadow-lg hover:shadow-2xl transform transition-shadow duration-300"
          >
            <img
              src={animal.image}
              alt={animal.name}
              className="h-48 w-full object-cover mb-2 rounded-md"
            />
            <h3 className="text-lg font-semibold">{animal.name}</h3>
            <p className="text-gray-700">Breed: {animal.breed}</p>
            <p className="text-gray-700">Age: {animal.age}</p>
            <p className="text-green-800 font-bold">Kes {animal.price}</p>
            <p
              className={`font-bold ${
                animal.status === 'Available' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {animal.status}
            </p>
            {animal.status === 'Available' && (
              <button
                onClick={() => addToCart(animal)}
                className="mt-4 bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-700 "
              >
                Add to cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* "See All" Button */}
      {filteredAnimals.length > displayLimit && (
        <button
          onClick={() => setDisplayLimit(displayLimit + 12)}
          className="mt-6 bg-green-900 text-white py-2 px-6 rounded-md hover:bg-green-700"
        >
          See All
        </button>
      )}
    </div>
  );
};

export default ProductPage;
