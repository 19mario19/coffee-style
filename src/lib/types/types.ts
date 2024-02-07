type ID = string | number

type CardDetailed = {
  id: ID
  title: string
  description?: string
  img?: string
  subtitle?: string
  createdAt?: string
  buttonName?: string
}

type Person = Pick<CardDetailed, "title" | "img" | "description"> & {
  position: string
}
enum Route {
  Home = "/",
  Products = "/products",
  Blog = "/blog",
  About = "/about",
  Contact = "/contact",
  StyleGuide = "/guide",
}


type NavbarItem = {
  id?: ID
  name: string | ECategory
  link?: Route
}

type NavbarList = {
  logo?: string
  list: NavbarItem[]
  active: NavbarItem
}

type Dimensions = {
  length: number
  height: number
  width: number
  weight: number
}

enum ECategory {
  All = "All Products",
  Mugs = "Coffee Mugs",
  Others = "Others",
  Premium = "Premium",
  TeaMugs = "Tea Mugs",
}

type Product = {
  id: ID
  title: string
  description: string
  details: string
  img: string
  newPrice?: number
  oldPrice: number
  sale?: boolean
  featured?: boolean
  dimensions: Dimensions
  category?: ECategory[]
}

type CartItem = {
  id: ID
  title: string
  img?: string
  price: number
  quantity: number
}

type CartList = {
  products: CartItem[]
  total: number
}

enum EPayment {
  paypal = "PayPal",
  cash = "Cash",
}

type Checkout = CartList & {
  payment: EPayment
}
enum EBlogCategory {
  Health = "health",
  Beans = "beans",
  BrewingMethods = "brewing-methods",
  Recipes = "recipes",
  Lifestyle = "lifestyle",
}

type Paragraph = Pick<CardDetailed, "subtitle" | "description" | "img"> & {
  quotes?: string
  description2?: string
  description3?: string
}

type Blog = Omit<CardDetailed, "buttonName"> &
  Pick<Product, "featured"> & {
    list: Paragraph[]
    category: EBlogCategory[]
  }

enum ContainerDimentions {
  Big = "max-width: 1260px;",
  Medium = "max-width: 1100px",
  Small = "max-width: 1000px",
}


export { EPayment, ECategory, EBlogCategory, ContainerDimentions, Route }
export type {
  ID,
  CardDetailed,
  Person,
  NavbarItem,
  NavbarList,
  Product,
  CartItem,
  CartList,
  Checkout,
  Blog,
}
