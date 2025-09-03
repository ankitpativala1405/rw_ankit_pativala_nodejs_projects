import { useState, useEffect } from 'react';

const generateMockUsers = () => [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face',
    createdAt: '2024-01-15T10:30:00Z',
    lastLogin: '2024-12-15T14:20:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'manager',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop&crop=face',
    createdAt: '2024-02-01T09:15:00Z',
    lastLogin: '2024-12-14T16:45:00Z'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    status: 'inactive',
    createdAt: '2024-03-10T11:00:00Z'
  }
];

const generateMockProducts = () => [
  {
    id: '1',
    name: 'Premium Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 299.99,
    category: 'Electronics',
    stock: 50,
    status: 'active',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring',
    price: 199.99,
    category: 'Electronics',
    stock: 25,
    status: 'active',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-02-05T14:30:00Z'
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description: 'Ergonomic adjustable laptop stand for better posture',
    price: 79.99,
    category: 'Accessories',
    stock: 0,
    status: 'inactive',
    image: 'https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=400',
    createdAt: '2024-03-01T12:15:00Z'
  }
];

const generateMockOrders = () => [
  {
    id: '1',
    userId: '2',
    userName: 'Jane Smith',
    products: [
      { id: '1', name: 'Premium Headphones', quantity: 1, price: 299.99 }
    ],
    total: 299.99,
    status: 'delivered',
    createdAt: '2024-12-10T10:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    userName: 'John Doe',
    products: [
      { id: '2', name: 'Smart Watch', quantity: 2, price: 199.99 }
    ],
    total: 399.98,
    status: 'processing',
    createdAt: '2024-12-12T15:45:00Z'
  }
];

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setUsers(generateMockUsers());
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const createUser = async (userData) => {
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setUsers(prev => [...prev, newUser]);
    return newUser;
  };

  const updateUser = async (id, updates) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updates } : user
    ));
  };

  const deleteUser = async (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  return { users, loading, createUser, updateUser, deleteUser };
}

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      setProducts(generateMockProducts());
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const createProduct = async (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  };

  const updateProduct = async (id, updates) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, ...updates } : product
    ));
  };

  const deleteProduct = async (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return { products, loading, createProduct, updateProduct, deleteProduct };
}

export function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 700));
      setOrders(generateMockOrders());
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (id, status) => {
    setOrders(prev => prev.map(order => 
      order.id === id ? { ...order, status } : order
    ));
  };

  return { orders, loading, updateOrderStatus };
}

export function useDashboardStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    userGrowth: 0,
    revenueGrowth: 0,
    orderGrowth: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStats({
        totalUsers: 1247,
        totalProducts: 89,
        totalOrders: 356,
        totalRevenue: 45780.50,
        userGrowth: 12.5,
        revenueGrowth: 8.3,
        orderGrowth: 15.7
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  return { stats, loading };
}
