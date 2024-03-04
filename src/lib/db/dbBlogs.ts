import type { Blog } from "$lib/types/types"
import { EBlogCategory, Person, Position } from "$lib/types/types"

import { authorsRecord } from "./dbAuthor"

import one from "$lib/img/Blogs/1.jpg"
import two from "$lib/img/Blogs/2.jpg"
import three from "$lib/img/Blogs/3.jpg"

import blogOneImage from "$lib/img/Blogs/Blog/one/one.jpg"

const dbBlogs: Blog[] = [
  {
    id: 1,
    title:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    img: one,
    createdAt: "NOVEMBER 12, 2018",
    featured: true,
    list: [
      {
        subheading: "Est tenetur eos.",
        description:
          "Eum aliquid aliquam qui sit mollitia sit. Ut possimus in autem omnis dicta eum velit. Architecto voluptate doloribus corrupti doloremque aspernatur fuga in.",
      },
      {
        subtitle: "Nam autem modi maiores nesciunt.",
        description:
          "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      {
        quotes:
          "Ex aut mollitia expedita voluptas eaque porro fugit cum dignissimos. Quam fugit libero. Rerum qui placeat ipsum rem delectus ratione consequatur. Incidunt sed nihil qui qui. Deserunt et exercitationem modi aliquam similique non. Quis sint molestiae.",
      },
      {
        description:
          "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      {
        img: blogOneImage,
      },
      {
        description:
          "Repudiandae laboriosam at qui quisquam totam. Et nobis est excepturi nulla eum et. Quasi rerum ab similique est explicabo suscipit harum ducimus atque.",
      },
      {
        subheading:
          "Corrupti esse rerum tempore qui sunt commodi sapiente alias.",
        description:
          "Culpa accusantium eum et odio incidunt dolore. Ad fugit qui aspernatur repudiandae et hic ullam occaecati veniam. Velit reiciendis magni maiores doloremque exercitationem. Enim ea molestias ad aut fugiat voluptatibus. Repellat odio iusto distinctio eum sunt. Est ea voluptas voluptatem voluptatem sapiente quo.",
      },
      {
        subtitle: "Nesciunt qui commodi.",
        description:
          "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
      },
      {
        quotes:
          "Dolores molestiae molestiae et ad non voluptas quaerat odio. Minima voluptas dolorum veritatis impedit atque voluptatum esse incidunt ut. Est eligendi beatae sunt harum necessitatibus quod autem voluptas. Quas ipsum ea.",
      },
      {
        description:
          "Veritatis error deleniti. Ipsa doloremque dolorem facilis minima distinctio et. Cum consequatur laboriosam aperiam eos.",
      },
      {
        description:
          "Suscipit qui soluta aut quas asperiores nihil ex error. Ut inventore ut eaque excepturi porro quidem iure. Facere laborum magni et est nulla doloribus.",
      },
      {
        subheading: "Iure quia fugit nostrum quo eius assumenda et.",
        description:
          "Est qui odio est quo iure. Autem temporibus quisquam. Omnis doloremque illum.",
      },
      {
        subtitle: "Optio voluptatem deserunt.",
        description:
          "Asperiores in eos beatae sed. Expedita quia minus sed. Assumenda ab odit. Quae aut animi doloribus. Assumenda ut non sed tenetur qui nisi recusandae. Magnam molestiae voluptatibus vitae delectus doloremque.",
        quotes:
          "Rem beatae nisi ipsa eos nostrum illo aut et temporibus. Libero doloribus accusamus quod similique itaque. Aut quam voluptatem quia quia deleniti delectus cupiditate. Dicta et fugit beatae et est consequatur culpa. Error est qui provident. Quia qui eum esse consequatur nam ducimus rerum.",
      },
      {
        description:
          "Aperiam et sequi explicabo ab minus saepe qui sed. Veritatis laboriosam molestiae nihil rem et expedita. Nihil a aliquam qui dolorem dolore explicabo ab laborum. Reprehenderit quia voluptate ducimus temporibus magni et vel. Quis mollitia ipsam temporibus quis in qui tenetur nostrum tenetur.",
      },
      {
        description:
          "Et maxime nihil quia qui quod. Qui aspernatur ut. Eius tempore laudantium placeat",
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
    createdAt: "OCTOBER 2, 2018",
    featured: true,
    list: [
      {
        subtitle: "Subtitle 1",
        description: "Description 1",
        quotes: "Quote 1",
      },
      {
        subtitle: "Subtitle 2",
        description: "Description 2",
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
    createdAt: "OCTOBER 3, 2018",
    featured: true,
    list: [
      {
        subtitle: "Subtitle 1",
        description: "Description 1",
        // img: "image-url-1.jpg",
        quotes: "Quote 1",
      },
      {
        subtitle: "Subtitle 2",
        description: "Description 2",
        quotes: "Quote 2",
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
    createdAt: "OCTOBER 19, 2018",
    featured: false,
    list: [
      {
        subtitle: "Subtitle 1",
        description: "Description 1",
      },
      {
        subtitle: "Subtitle 2",
        description: "Description 2",
        quotes: "Quote 2",
      },
    ],
    author: authorsRecord[Person.Maurice],
    category: [EBlogCategory.Coffee],
  },
]

export { dbBlogs }
