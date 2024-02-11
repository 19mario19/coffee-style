import type { Author } from "$lib/types/types"
import { Position, Person } from "$lib/types/types"
import one from "$lib/img/Author/1.jpg"
import two from "$lib/img/Author/2.jpg"
import three from "$lib/img/Author/3.jpg"

const authors: Author[] = [
  {
    id: 0,
    name: Person.Fred,
    position: Position.Owner,
    img: one,
  },
  {
    id: 1,
    name: Person.Isabel,
    position: Position.MugDesigner,
    img: two,
  },
  {
    id: 3,
    name: Person.Maurice,
    position: Position.MugDesigner,
    img: three,
  },
]

const authorsRecord: Record<Person, Author> = {} as Record<Person, Author>
authors.forEach((el) => {
  authorsRecord[el.name] = { ...el }
})

export { authors, authorsRecord }
