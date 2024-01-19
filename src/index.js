import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FoodSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foodData, setFoodData] = useState([
    { id: 1, name: 'Biryani' },
    { id: 2, name: 'Butter Chicken' },
    { id: 3, name: 'Paneer Tikka' },
    { id: 4, name: 'Masala Dosa' },
    { id: 5, name: 'Chole Bhature' },
    { id: 6, name: 'Samosa' },
    { id: 7, name: 'Aloo Gobi' },
    { id: 8, name: 'Palak Paneer' },
    { id: 9, name: 'Tandoori Chicken' },
    { id: 10, name: 'Dal Makhani' },
    { id: 11, name: 'Rogan Josh' },
    { id: 12, name: 'Gulab Jamun' },
    { id: 13, name: 'Jalebi' },
    { id: 14, name: 'Pani Puri' },
    { id: 15, name: 'Chana Masala' },
    { id: 16, name: 'Vada Pav' },
    { id: 17, name: 'Kofta Curry' },
    { id: 18, name: 'Aloo Paratha' },
    { id: 19, name: 'Chicken Biryani' },
    { id: 20, name: 'Rasgulla' },
    { id: 21, name: 'Mutton Curry' },
    { id: 22, name: 'Fish Curry' },
    { id: 23, name: 'Pulao' },
    { id: 24, name: 'Malai Kofta' },
    { id: 25, name: 'Pav Bhaji' },
    // Add more Indian food items as needed
  ]);

  const filteredFood = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredFood.map(food => (
          <li key={food.id}>
            {food.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(
  <FoodSearchApp />,
  document.getElementById('root')
);
