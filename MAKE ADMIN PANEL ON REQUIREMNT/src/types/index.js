// Type definitions converted to JSDoc comments for JavaScript
// These are just comments for documentation purposes

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'admin' | 'manager' | 'user'} role
 * @property {'active' | 'inactive'} status
 * @property {string} [avatar]
 * @property {string} createdAt
 * @property {string} [lastLogin]
 */

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} category
 * @property {number} stock
 * @property {'active' | 'inactive'} status
 * @property {string} [image]
 * @property {string} createdAt
 */

/**
 * @typedef {Object} OrderProduct
 * @property {string} id
 * @property {string} name
 * @property {number} quantity
 * @property {number} price
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} userId
 * @property {string} userName
 * @property {OrderProduct[]} products
 * @property {number} total
 * @property {'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'} status
 * @property {string} createdAt
 */

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalUsers
 * @property {number} totalProducts
 * @property {number} totalOrders
 * @property {number} totalRevenue
 * @property {number} userGrowth
 * @property {number} revenueGrowth
 * @property {number} orderGrowth
 */

/**
 * @typedef {Object} AuthUser
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'admin' | 'manager' | 'user'} role
 * @property {string} [avatar]
 */
