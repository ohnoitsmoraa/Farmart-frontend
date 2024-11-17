import React from 'react';

const FarmerDashboard = () => {
  const orders = [
    { id: 1, orderName: 'Order 1' },
    { id: 2, orderName: 'Order 2' },
    { id: 3, orderName: 'Order 3' },
    { id: 4, orderName: 'Order 4' },
  ];

  const handleConfirm = (id) => {
    alert(`Order ${id} confirmed!`);
  };

  const handleReject = (id) => {
    alert(`Order ${id} rejected!`);
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-6">Farmer Dashboard</h2>
      <div className="flex justify-evenly mb-4">
        <button className="bg-green-900 text-white py-2 px-4 rounded">
          Add New Animal
        </button>
        <button className="bg-green-900 text-white py-2 px-4 rounded">
          Update Animal
        </button>
      </div>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
            <span>{order.orderName}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleConfirm(order.id)}
                className="bg-green-900 text-white py-1 px-3 rounded"
              >
                Confirm Order
              </button>
              <button
                onClick={() => handleReject(order.id)}
                className="bg-red-600 text-white py-1 px-3 rounded"
              >
                Reject Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerDashboard;
