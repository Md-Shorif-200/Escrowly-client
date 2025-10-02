'use client';

import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

// Dummy Orders JSON Data (without buyerName & paymentStatus)
const orders = [
  {
    id: 'ORD001',
    productName: 'iPhone 14 Pro Max',
    category: 'Electronics',
    quantity: 1,
    price: 145000,
    status: 'pending',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-20'
  },
  {
    id: 'ORD002',
    productName: 'Nike Air Jordan',
    category: 'Clothing',
    quantity: 2,
    price: 8500,
    status: 'processing',
    orderDate: '2024-01-14',
    deliveryDate: '2024-01-19'
  },
  {
    id: 'ORD003',
    productName: 'Samsung Smart TV 55"',
    category: 'Electronics',
    quantity: 1,
    price: 65000,
    status: 'shipped',
    orderDate: '2024-01-13',
    deliveryDate: '2024-01-18'
  },
  {
    id: 'ORD004',
    productName: 'Office Chair Executive',
    category: 'Home & Garden',
    quantity: 3,
    price: 12000,
    status: 'delivered',
    orderDate: '2024-01-12',
    deliveryDate: '2024-01-17'
  },
];

export default function MyOrders() {
  // Status badge colors
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Orders</h1>

      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">#{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{order.productName}</p>
                      <p className="text-xs text-gray-500">{order.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{order.quantity}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      ৳{order.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View">
                        <FaEye />
                      </button>
                      <button className="text-green-600 hover:text-green-900" title="Edit">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Delete">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
