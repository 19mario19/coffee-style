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

enum Position {
  Owner = "brand owner",
  MugDesigner = "mug designer",
}
enum Person {
  Fred = "Fred Gleason",
  Isabel = "Isabel Hamill",
  Maurice = "Maurice Herman",
}

type Author = Pick<CardDetailed, "img" | "id"> & {
  name: Person
  position: Position
  description: string
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
  Barista = "Barista",
  Coffee = "Coffee",
  Lifestyle = "Lifestyle",
  Mugs = "Mugs",
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
    author: Author
  }

enum ContainerDimentions {
  Big = "max-width: 1460px;",
  Medium = "max-width: 1100px",
  Small = "max-width: 1000px",
}

export {
  Position,
  Person,
  EPayment,
  ECategory,
  EBlogCategory,
  ContainerDimentions,
  Route,
}
export type {
  ID,
  CardDetailed,
  Author,
  NavbarItem,
  NavbarList,
  Product,
  CartItem,
  CartList,
  Checkout,
  Blog,
}
