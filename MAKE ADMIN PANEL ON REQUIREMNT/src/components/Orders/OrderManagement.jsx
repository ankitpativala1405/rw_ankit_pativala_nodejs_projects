import React from 'react';
import { DataTable } from '../UI/DataTable.jsx';
import { LoadingSpinner } from '../UI/LoadingSpinner.jsx';
import { useOrders } from '../../hooks/useData.js';
import { format } from 'date-fns';

export function OrderManagement() {
  const { orders, loading, updateOrderStatus } = useOrders();

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  const columns = [
    {
      key: 'id',
      label: 'Order ID',
      sortable: true,
      render: (value) => (
        <span className="font-mono text-sm text-blue-600">#{value}</span>
      )
    },
    {
      key: 'userName',
      label: 'Customer',
      sortable: true,
      render: (value) => (
        <span className="font-medium text-gray-900">{value}</span>
      )
    },
    {
      key: 'products',
      label: 'Items',
      render: (products) => (
        <div>
          {products.map((product, index) => (
            <div key={index} className="text-sm">
              <span className="text-gray-900">{product.name}</span>
              <span className="text-gray-500 ml-2">×{product.quantity}</span>
            </div>
          ))}
        </div>
      )
    },
    {
      key: 'total',
      label: 'Total',
      sortable: true,
      render: (value) => (
        <span className="font-medium text-gray-900">${value.toFixed(2)}</span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value, order) => (
        <select
          value={value}
          onChange={(e) => handleStatusChange(order.id, e.target.value)}
          className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-blue-500 ${
            value === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            value === 'processing' ? 'bg-blue-100 text-blue-800' :
            value === 'shipped' ? 'bg-purple-100 text-purple-800' :
            value === 'delivered' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}
        >
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      )
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (value) => (
        <span className="text-gray-600 text-sm">
          {format(new Date(value), 'MMM dd, yyyy')}
        </span>
      )
    }
  ];

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Order Management</h2>
          <p className="text-gray-600 mt-1">Track and manage customer orders</p>
        </div>
        
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <DataTable data={orders} columns={columns} />
    </div>
  );
}
