import { writable } from "svelte/store"
import type { CartItem, CartList, ID } from "$lib/types/types"

// Initial cart data
const cartListInitial: CartList = {
  products: [],
  total: 0,
}

// Create a writable store for cart data
const shoppingCart = writable(cartListInitial)

// Log changes to the store
// shoppingCart.subscribe((value) => console.log("Store", value))

/**
 * Interface for ShoppingCart class.
 */
interface IShoppingCart {
  /**
   * Add a product to the cart.
   * @param product The product to add.
   */
  addProduct(product: CartItem): void

  /**
   * Remove a product from the cart.
   * @param product The product to remove.
   */
  removeProduct(id: number | string): void

  changeQuantity(id: ID, newQuantity: number): void

  /**
   * Clear the cart.
   */
  clearCart(): void
}

/**
 * Represents a shopping cart.
 * Manages operations for adding, removing, and clearing items from the cart.
 */
class ShoppingCart implements IShoppingCart {
  private _cartList: CartList = {
    products: [],
    total: 0,
  }

  /**
   * Create a new instance of ShoppingCart.
   */
  constructor() {
    // Subscribe to changes in the shoppingCart store
    shoppingCart.subscribe((value) => {
      this._cartList = value
    })
  }

  /**
   * Add a product to the cart.
   * @param product The product to add.
   */
  addProduct(product: CartItem): void {
    this._cartList.products.push(product)
    this.updateStore()
  }

  /**
   * Remove a product from the cart.
   * @param id The product to remove.
   */
  removeProduct(id: ID): void {
    this._cartList.products = this._cartList.products.filter(
      (el) => el.id !== id,
    )
    this.updateStore()
  }

  changeQuantity(id: ID, newQuantity: number = 1): void {
    this._cartList = {
      ...this._cartList,
      products: this._cartList.products.map((el) =>
        el.id === id ? { ...el, quantity: newQuantity } : el,
      ),
    }
    this.updateStore()
  }

  /**
   * Clear the cart.
   */
  clearCart(): void {
    this._cartList = {
      products: [],
      total: 0,
    }
    this.updateStore()
  }

  /**
   * Format the cart list.
   */
  private formatList(): void {
    const updatedProducts: CartItem[] = []

    this._cartList.products.forEach((newProduct) => {
      const existingProduct = updatedProducts.find(
        (product) => product.id === newProduct.id,
      )

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        existingProduct.quantity += newProduct.quantity
      } else {
        // If the product does not exist in the cart, add it
        updatedProducts.push({ ...newProduct })
      }
    })

    this._cartList.products = updatedProducts
  }

  /**
   * Get the total price of all products in the cart.
   */
  private get _total(): number {
    return this._cartList.products.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  }

  /**
   * Update the shoppingCart store with the current cart data.
   */
  updateStore(): void {
    this.formatList()
    this._cartList = {
      ...this._cartList,
      total: Number(this._total.toFixed(2)),
    }
    shoppingCart.update((value) => (value = this._cartList))
  }
}

export { ShoppingCart, shoppingCart }

// // Example usage
// const cartItem1: CartItem = { id: 1, price: 22, title: "Item1", quantity: 1 }
// const cartItem2: CartItem = { id: 2, price: 22, title: "Item2", quantity: 1 }

// const cart = new ShoppingCart()

// // Add items to cart
// cart.addProduct(cartItem1)
// cart.addProduct(cartItem2)

// // Remove item from cart
// cart.removeProduct(cartItem1)

// // Clear cart
// cart.clearCart()
