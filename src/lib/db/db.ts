import type { Product } from "$lib/types/types"
import { ECategory } from "$lib/types/types"

import pic_1 from "$lib/img/Products/1.jpg"
import pic_2 from "$lib/img/Products/2.jpg"
import pic_3 from "$lib/img/Products/3.jpg"
import pic_4 from "$lib/img/Products/4.jpg"
import pic_5 from "$lib/img/Products/5.jpg"
import pic_6 from "$lib/img/Products/6.jpg"
import pic_7 from "$lib/img/Products/7.jpg"
import pic_8 from "$lib/img/Products/9.jpg"
import pic_9 from "$lib/img/Products/10.jpg"
import pic_10 from "$lib/img/Products/11.jpg"
import pic_11 from "$lib/img/Products/12.jpg"
import pic_12 from "$lib/img/Products/15.jpg"

const db: Product[] = [
  {
    id: 1,
    title: "Red Love Cup",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_1,
    oldPrice: 24.99,
    newPrice: 36.99,
    sale: true,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs],
  },

  {
    id: 2,
    title: "Black Tea Cup",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_2,
    oldPrice: 26.99,
    newPrice: 14.99,
    sale: true,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Premium],
  },

  {
    id: 3,
    title: "B&W Essentials Mug",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_3,
    oldPrice: 18.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs, ECategory.Others],
  },

  {
    id: 4,
    title: "Winter Style Mug",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_4,
    oldPrice: 24.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs],
  },

  {
    id: 5,
    title: "Ceramic Tea",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_5,
    oldPrice: 45.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs],
  },

  {
    id: 6,
    title: "No Handle Bar Cup",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_6,
    oldPrice: 33.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs, ECategory.Others],
  },

  {
    id: 7,
    title: "Espresso Cup by Mugs.co",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_7,
    oldPrice: 24.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs],
  },

  {
    id: 8,
    title: "Pink Premium Ceramic",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_8,
    oldPrice: 98.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs, ECategory.TeaMugs],
  },

  {
    id: 9,
    title: "Summer Designer Cup",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_9,
    oldPrice: 28.99,
    newPrice: 18.88,
    sale: true,
    featured: true,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs],
  },

  {
    id: 10,
    title: "White Ceramic",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_10,
    oldPrice: 28.99,
    sale: true,
    featured: true,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs, ECategory.TeaMugs],
  },
  {
    id: 11,
    title: "Basic White Mug",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_11,
    oldPrice: 14.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs, ECategory.TeaMugs],
  },
  {
    id: 12,
    title: "Aroma Art Coffee Mug",
    description:
      "Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.",

    details:
      "Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.",

    img: pic_12,
    oldPrice: 38.99,
    sale: false,
    featured: false,
    dimensions: { length: 56.0, height: 30.0, width: 12.0, weight: 12 },
    category: [ECategory.Mugs],
  },
]

export { db }
