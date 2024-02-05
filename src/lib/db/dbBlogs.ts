import type { Blog } from "$lib/types/types"
import { EBlogCategory } from "$lib/types/types"

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
    category: [EBlogCategory.Health, EBlogCategory.Beans],
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
    category: [EBlogCategory.Recipes],
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
    category: [EBlogCategory.Recipes],
  },
]

export { dbBlogs }
