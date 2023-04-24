export const places = [
  {
    id: 1,
    name: '',
    src: '/lindex-kids/lindexkids76.jpg',
  },
  {
    id: 2,
    name: '',
    imageId: 'images/lindex-kids/lindexkids83.jpg',
  },
  {
    id: 2,
    name: 'Lars',
    description: 'Photoshot for Lindex teens',
    imageId: 'images/lindex-kids/lindexkids48.jpg',
  },
  {
    id: 3,
    name: 'Kim',
    description: 'Photoshoot for Lindex teens.',
    imageId: 'images/lindex-kids/lindexkids68.jpg',
  },

  // {
  //   id: 4,
  //   name: 'Burano, Italy',
  //   description:
  //     'The houses are painted following a specific color system dating back to 16th century.',
  //   imageId: 'kxsph5C',
  // },
  // {
  //   id: 5,
  //   name: 'Chefchaouen, Marocco',
  //   description:
  //     'There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.',
  //   imageId: 'rTqKo46',
  // },
  // {
  //   id: 6,
  //   name: 'Gamcheon Culture Village in Busan, South Korea',
  //   description:
  //     'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
  //   imageId: 'ZfQOOzf',
  // },
]

export interface Place {
  id: number
  name: string
  description: string
  imageId: string
}
