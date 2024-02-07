import type { Product } from "$lib/types/types"
import { ECategory } from "$lib/types/types"
import one from "$lib/img/Products/1.jpg"
import two from "$lib/img/Products/2.jpg"
import three from "$lib/img/Products/3.jpg"

const db: Product[] = [
  {
    id: 1,
    title: "Product One",
    description: "Description for Product One",
    details: "Details for Product One",
    img: one,
    oldPrice: 24.99,
    sale: false,
    featured: true,
    dimensions: { length: 1.5, height: 2.2, width: 1.0, weight: 1.8 },
    category: [ECategory.Mugs],
  },
  {
    id: 2,
    title: "Product Two",
    description: "Description for Product Two",
    details: "Details for Product Two",
    img: two,
    newPrice: 29.99,
    oldPrice: 34.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.8, height: 2.4, width: 1.2, weight: 2.2 },
    category: [ECategory.Premium],
  },
  {
    id: 3,
    title: "Product Three",
    description: "Description for Product Three",
    details: "Details for Product Three",
    img: three,
    newPrice: 39.99,
    oldPrice: 44.99,
    sale: true,
    featured: true,
    dimensions: { length: 1.4, height: 2.0, width: 0.9, weight: 1.5 },
    category: [ECategory.Mugs],
  },
  {
    id: 11,
    title: "Product One",
    description: "Description for Product One",
    details: "Details for Product One",
    img: one,
    oldPrice: 24.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.5, height: 2.2, width: 1.0, weight: 1.8 },
    category: [ECategory.TeaMugs],
  },
  {
    id: 21,
    title: "Product Two",
    description: "Description for Product Two",
    details: "Details for Product Two",
    img: two,
    newPrice: 29.99,
    oldPrice: 34.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.8, height: 2.4, width: 1.2, weight: 2.2 },
    category: [ECategory.Mugs],
  },
  {
    id: 31,
    title: "Product Three",
    description: "Description for Product Three",
    details: "Details for Product Three",
    img: three,
    newPrice: 39.99,
    oldPrice: 44.99,
    sale: true,
    featured: false,
    dimensions: { length: 1.4, height: 2.0, width: 0.9, weight: 1.5 },
    category: [ECategory.TeaMugs],
  },
  {
    id: 12,
    title: "Product One",
    description: "Description for Product One",
    details: "Details for Product One",
    img: one,
    oldPrice: 24.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.5, height: 2.2, width: 1.0, weight: 1.8 },
    category: [ECategory.Mugs],
  },
  {
    id: 22,
    title: "Product Two",
    description: "Description for Product Two",
    details: "Details for Product Two",
    img: two,
    newPrice: 29.99,
    oldPrice: 34.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.8, height: 2.4, width: 1.2, weight: 2.2 },
    category: [ECategory.Premium],
  },
  {
    id: 32,
    title: "Product Three",
    description: "Description for Product Three",
    details: "Details for Product Three",
    img: three,
    newPrice: 39.99,
    oldPrice: 44.99,
    sale: true,
    featured: false,
    dimensions: { length: 1.4, height: 2.0, width: 0.9, weight: 1.5 },
    category: [ECategory.Others],
  },
  {
    id: 13,
    title: "Product One",
    description: "Description for Product One",
    details: "Details for Product One",
    img: one,
    oldPrice: 24.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.5, height: 2.2, width: 1.0, weight: 1.8 },
    category: [ECategory.Mugs],
  },
  {
    id: 23,
    title: "Product Two",
    description: "Description for Product Two",
    details: "Details for Product Two",
    img: two,
    newPrice: 29.99,
    oldPrice: 34.99,
    sale: false,
    featured: false,
    dimensions: { length: 1.8, height: 2.4, width: 1.2, weight: 2.2 },
    category: [ECategory.Mugs],
  },
]

export { db }
