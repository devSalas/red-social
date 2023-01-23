export const posts = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Jessica',
      image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },
    date: '16-01-2023',
    text: 'esto es una foto',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    like: [
      {
        id: '2',
        name: 'Jose',
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
      },
      {
        id: '3',
        name: 'Paola',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
      }
    ],
    comments: [
      {
        id: '1',
        user: {
          id: '2',
          name: 'Jose',
          image: 'https://randomuser.me/api/portraits/men/86.jpg'
        },
        date: '17-01-2023',
        text: 'bonita foto'
      },
      {
        id: '2',
        user: {
          id: '3',
          name: 'Paola',
          image: 'https://randomuser.me/api/portraits/women/68.jpg'
        },
        date: '17-01-2023',
        text: 'hermosa vista'
      }
    ]
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Jose',
      image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    date: '17-01-2023',
    text: 'montañas',
    image: 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg',
    like: [
      {
        id: '1',
        name: 'Jessica',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
      }
    ],
    comments: [
      {
        id: '1',
        user: {
          id: '1',
          name: 'Jessica',
          image: 'https://randomuser.me/api/portraits/women/57.jpg'
        },
        date: '17-01-2023',
        text: 'que bonito'
      },
      {
        id: '2',
        user: {
          id: '3',
          name: 'Paola',
          image: 'https://randomuser.me/api/portraits/women/68.jpg'
        },
        date: '17-01-2023',
        text: 'hola'
      }
    ]
  }
] 