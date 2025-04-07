export interface Pet {
  id: number;
  name: string;
  description: string;
  type: string;
  image: string;
  image2: string;
  adopted: boolean;
}

const pets: Pet[] = [
  {
    id: 1,
    name: 'Cleocatra',
    description: 'She a queen',
    type: 'Cat',
    image: 'https://i.ibb.co/HBRR9sp/cat-kitty-1.png',
    image2: 'https://i.ibb.co/RCJxWrX/cat-kitty.gif',
    adopted: false,
  },
  {
    id: 2,
    name: 'Lucifurr',
    description: 'A naughty little demon',
    type: 'Cat',
    image: 'https://i.ibb.co/P6VJ4pZ/smile-cat-1.png',
    image2: 'https://i.ibb.co/3TcZB7m/smile-cat-Copy.gif',
    adopted: false,
  },

  {
    id: 3,
    name: 'Santa Claws',
    description: 'A true gift',
    type: 'Cat',
    image: 'https://i.ibb.co/2ZzG5pj/kitten-love-1.png',
    image2: 'https://i.ibb.co/fCQnBs7/kitten-love.gif',
    adopted: true,
  },
  {
    id: 4,
    name: 'Subwoofer',
    description: 'SO LOUD',
    type: 'Dog',
    image: 'https://i.ibb.co/C0rwwRn/pet-dog-1.png',
    image2: 'https://i.ibb.co/C7q7SgH/pet-dog.gif',
    adopted: false,
  },
  {
    id: 5,
    name: 'Hani',
    description: 'Such a chill pupper',
    type: 'Dog',
    image: 'https://i.ibb.co/DtzyPvk/dog-petting-1.png',
    image2: 'https://i.ibb.co/5cjptVM/dog-petting.gif',
    adopted: true,
  },
  {
    id: 6,
    name: 'George',
    description: 'A rabbit',
    type: 'Rabbit',
    image: 'https://i.ibb.co/drbJRPQ/918f1b2c568be3d77a7c29d682be874c-1.png',
    image2: 'https://i.ibb.co/tm8R0jm/918f1b2c568be3d77a7c29d682be874c.gif',
    adopted: false,
  },
  {
    id: 7,
    name: 'Loli',
    description: 'A cat',
    type: 'Cat',
    image: 'assets/cat.jpg',
    image2: 'assets\cat.jpg',
    adopted: true,
  },
];

export default pets;
