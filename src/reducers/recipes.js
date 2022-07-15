import imgTest from '../assets/images/slider-head-home.jpg';

const initialState = {
  myRecipes: [
    {
      id: 1,
      title: 'test titre 1',
      time: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 2,
      title: 'test titre2',
      time: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 3,
      title: 'test titre 3',
      time: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 4,
      title: 'test titre 4',
      time: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 5,
      title: 'test titre 5',
      time: 45,
      quantity: 4,
      imagePath: imgTest
    },
    {
      id: 6,
      title: 'test titre 6',
      time: 45,
      quantity: 4,
      imagePath: imgTest
    }
  ],
  cookingRecipes: [

  ], 
  currentRecipe: {
    id: 1,
    title: 'Titre de la recette',
    quantity: 4,
    time: 45,
    imagePath: imgTest,
    steps: [
      {
        id: 1,
        order: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus posuere odio, a venenatis ipsum ultricies finibus.',
      },
      {
        id: 2,
        order: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus posuere odio, a venenatis ipsum ultricies finibus.',
      },
      {
        id: 3,
        order: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus posuere odio, a venenatis ipsum ultricies finibus.',
      },
    ],
    ingredients: [
      {
        id: 1,
        name: 'ingredient 1',
        quantity: 100,
        unit: 'g',
      },
      {
        id: 2,
        name: 'ingredient 2',
        quantity: 100,
        unit: 'L',
      },
      {
        id: 3,
        name: 'ingredient 3',
        quantity: 100,
        unit: 'ml',
      },
      {
        id: 4,
        name: 'ingredient 4',
        quantity: 100,
        unit: 'g',
      },
    ]
  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;