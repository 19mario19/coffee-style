import type { Blog } from "$lib/types/types"
import { EBlogCategory, Person, Position } from "$lib/types/types"

import { authorsRecord } from "./dbAuthor"

import one from "$lib/img/Blogs/1.jpg"
import two from "$lib/img/Blogs/2.jpg"
import three from "$lib/img/Blogs/3.jpg"

const dbBlogs: Blog[] = [
  {
    id: 1,
    title:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    img: one,
    subtitle: "Subtitle of Blog Post 1",
    createdAt: "OCTOBER 1, 2021",
    featured: true,
    list: [
      {
        subtitle: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula eget tortor tincidunt tincidunt. Nam congue justo sit amet velit varius tempus.",
        quotes: "“Coffee is a language in itself.”",
        description2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        description3:
          "Phasellus auctor felis quis risus venenatis, vel dapibus elit laoreet. Duis posuere.",
      },
      {
        subtitle: "Coffee smells",
        description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum luctus suscipit libero, ac pellentesque nulla efficitur non.",
        quotes: "“Coffee smells like freshly ground heaven.”",
        description2:
          "Vivamus eget dolor eu mi consectetur interdum nec in elit. Mauris vel ex.",
        description3:
          "Sed fermentum ipsum ac magna congue, sit amet vestibulum nisl placerat. Ut ultricies.",
      },
    ],
    author: authorsRecord[Person.Fred],
    category: [EBlogCategory.Barista, EBlogCategory.Coffee],
  },
  {
    id: 2,
    title: "How long does a cup of coffee keep you awake?",
    description:
      "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
    img: two,
    subtitle: "Subtitle of Blog Post 2",
    createdAt: "OCTOBER 2, 2018",
    featured: true,
    list: [
      {
        subtitle: "Subtitle 1",
        description: "Description 1",
        quotes: "Quote 1",
        description2: "Second Description 1",
        description3: "Third Description 1",
      },
      {
        subtitle: "Subtitle 2",
        description: "Description 2",
        // img: "image-url-2.jpg",
        quotes: "Quote 2",
        description2: "Second Description 2",
        description3: "Third Description 2",
      },
    ],
    author: authorsRecord[Person.Isabel],
    category: [EBlogCategory.Lifestyle],
  },
  {
    id: 3,
    title:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    img: three,
    subtitle: "Subtitle of Blog Post 3",
    createdAt: "OCTOBER 3, 2018",
    featured: true,
    list: [
      {
        subtitle: "Subtitle 1",
        description: "Description 1",
        // img: "image-url-1.jpg",
        quotes: "Quote 1",
        description2: "Second Description 1",
        description3: "Third Description 1",
      },
      {
        subtitle: "Subtitle 2",
        description: "Description 2",
        quotes: "Quote 2",
        description2: "Second Description 2",
        description3: "Third Description 2",
      },
    ],
    author: authorsRecord[Person.Maurice],
    category: [EBlogCategory.Mugs],
  },
  {
    id: 4,
    title: "Blog Post 4",
    description: "Description of Blog Post 4",
    img: three,
    subtitle: "Subtitle of Blog Post 3",
    createdAt: "OCTOBER 19, 2018",
    featured: false,
    list: [
      {
        subtitle: "Subtitle 1",
        description: "Description 1",
        // img: "image-url-1.jpg",
        quotes: "Quote 1",
        description2: "Second Description 1",
        description3: "Third Description 1",
      },
      {
        subtitle: "Subtitle 2",
        description: "Description 2",
        quotes: "Quote 2",
        description2: "Second Description 2",
        description3: "Third Description 2",
      },
    ],
    author: authorsRecord[Person.Maurice],
    category: [EBlogCategory.Coffee],
  },
]

export { dbBlogs }
