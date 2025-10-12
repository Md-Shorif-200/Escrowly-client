"use client"

import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export default function MyPurchases() {

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
    <div className='mb-6'>
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-text">My Purchase</h1>
   
      </div>

      {/* Table */}
      <div className=" rounded-lg shadow-sm border border-table-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-table-header-bg border-b border-table-border">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-table-text uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-table-text uppercase tracking-wider">Product Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-table-text uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-table-text uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-table-text uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-table-text uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-table-row-bg  divide-y divide-table-divider ">
              {/* Row 1 */}
              <tr className="hover:bg-table-hover-bg">
                <td className="px-6 py-4 whitespace-nowrap">#ORD001</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium  text-table-text ">iPhone 14 Pro Max</p>
                  <p className="text-xs text-table-text ">Electronics</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">$145,000</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor('pending')}`}>
                    pending
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900"><FaEye /></button>
                    <button className="text-green-600 hover:text-green-900"><FaEdit /></button>
                    <button className="text-red-600 hover:text-red-900"><FaTrash /></button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-table-hover-bg">
                <td className="px-6 py-4 whitespace-nowrap">#ORD002</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium  text-table-text ">Nike Air Jordan</p>
                  <p className="text-xs  text-table-text ">Clothing</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">$8,500</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor('processing')}`}>
                    processing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900"><FaEye /></button>
                    <button className="text-green-600 hover:text-green-900"><FaEdit /></button>
                    <button className="text-red-600 hover:text-red-900"><FaTrash /></button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-table-hover-bg">
                <td className="px-6 py-4 whitespace-nowrap">#ORD003</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium  text-table-text ">Samsung Smart TV 55"</p>
                  <p className="text-xs  text-table-text ">Electronics</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">$65,000</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor('shipped')}`}>
                    shipped
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900"><FaEye /></button>
                    <button className="text-green-600 hover:text-green-900"><FaEdit /></button>
                    <button className="text-red-600 hover:text-red-900"><FaTrash /></button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
