export default {
  "categories": [
    {
      "label": "Banh Mi",
      "icon": "sandwich",
      "items": [
        {
          "itemId": 1,
          "label": "Caramel Pork Belly Banh Mi",
          "price": 895,
          "description": "Served with prawn chips, pork pate, mayo, cucumber, pickle, jalapeño, cilantro, & choice of house sauces.",
          "image": require('../images/banh-mi/bm-pork.jpg')
        },
        {
          "itemId": 2,
          "label": "Grandma Chicken Banh Mi",
          "price": 855,
          "description": "Served with prawn chips, pork pate, mayo, cucumber, pickle, jalapeño, cilantro, & choice of house sauces.",
          "image": require('../images/banh-mi/bm-chicken.jpg')
        },
        {
          "itemId": 3,
          "label": "Lemongrass Beef Banh Mi",
          "price": 895,
          "description": "Served with prawn chips, pork pate, mayo, cucumber, pickle, jalapeño, cilantro, & choice of house sauces.",
          "image": require('../images/banh-mi/bm-beef.jpg')
        },
        {
          "itemId": 4,
          "label": "Tofu Mushroom Banh Mi",
          "price": 855,
          "description": "Served with prawn chips, pork pate, mayo, cucumber, pickle, jalapeño, cilantro, & choice of house sauces.",
          "image": require('../images/banh-mi/bm-tofu.jpg')
        }
      ],
      "customization": [
        {
          "label": "Vegetable",
          "selections": [
            {
              "label": "Cucumber",
              "selected": true,
              "image": require('../images/customization/cucumber.jpg'),
              "price": 0
            },
            {
              "label": "Carrot",
              "selected": true,
              "image": require('../images/customization/carrot.jpg'),
              "price": 0
            },
            {
              "label": "Jalapeno",
              "selected": true,
              "image": require('../images/customization/jalapeno.jpg'),
              "price": 0
            },
            {
              "label": "Cilantro",
              "selected": true,
              "image": require('../images/customization/cilantro.jpg'),
              "price": 0
            },
            {
              "label": "Fried Shallot",
              "selected": true,
              "image": require('../images/customization/fried-shallot.jpg'),
              "price": 0
            }
          ]
        },
        {
          "label": "Dressing",
          "selections": [
            {
              "label": "Peanut Sauce",
              "selected": false,
              "image": require('../images/customization/peanut-sauce.jpg'),
              "price": 0
            },
            {
              "label": "Cilantro creme",
              "selected": true,
              "image": require('../images/customization/cilantro-creme.jpg'),
              "price": 0
            },
            {
              "label": "Mayo",
              "selected": false,
              "image": require('../images/customization/mayo.jpg'),
              "price": 0
            },
            {
              "label": "Pate",
              "selected": false,
              "image": require('../images/customization/pate.jpg'),
              "price": 0
            }
          ]
        }
      ]
    },
    {
      "label": "Noodle Salad",
      "icon": "salad-bowl-hand-drawn-food",
      "items": [
        {
          "itemId": 6,
          "label": "Caramel Pork Belly Noodle Salad",
          "price": 995,
          "description": "Served with gluten-free vermicelli noodle, egg roll, chopped lettuce, pickle, cucumber, fried shallots, & fish sauce.",
          "image": require('../images/salad/pork-salad.jpg')
        },
        {
          "itemId": 7,
          "label": "Grandma Chicken Noodle Salad",
          "price": 955,
          "description": "Served with gluten-free vermicelli noodle, egg roll, chopped lettuce, pickle, cucumber, fried shallots, & fish sauce.",
          "image": require('../images/salad/chicken-salad.jpg')
        },
        {
          "itemId": 8,
          "label": "Tofu Mushroom Noodle Salad",
          "price": 955,
          "description": "Served with gluten-free vermicelli noodle, egg roll, chopped lettuce, pickle, cucumber, fried shallots, & fish sauce.",
          "image": require('../images/salad/tofu-mushroom-salad.jpg')
        },
        {
          "itemId": 9,
          "label": "Lemongrass Beef Noodle Salad",
          "price": 995,
          "description": "Served with gluten-free vermicelli noodle, egg roll, chopped lettuce, pickle, cucumber, fried shallots, & fish sauce.",
          "image": require('../images/salad/beef-salad.jpg')
        }
      ]
    },
    {
      "label": "Pho",
      "icon": "noodles",
      "items": [
        {
          "itemId": 11,
          "label": "Beef Pho",
          "price": 995,
          "description": "Topped with red onions, green onions, cilantro & bean sprout.",
          "image": require('../images/pho/beef-pho.jpg')
        },
        {
          "itemId": 12,
          "label": "Shrimp Pho",
          "price": 999,
          "description": "Topped with red onions, green onions, cilantro & bean sprout.",
          "image": require('../images/pho/shrimp-pho.jpg')
        },
        {
          "itemId": 13,
          "label": "Tofu & Mushroom Pho",
          "price": 925,
          "description": "Topped with red onions, green onions, cilantro & bean sprout.",
          "image": require('../images/pho/tofu-mushroom-pho.jpg')
        },
        {
          "itemId": 14,
          "label": "Chicken Pho",
          "price": 955,
          "description": "Topped with red onions, green onions, cilantro & bean sprout.",
          "image": require('../images/pho/chicken-pho.jpg')
        },
        {
          "itemId": 15,
          "label": "Beef & Meatball Pho",
          "price": 1055,
          "description": "Topped with red onions, green onions, cilantro & bean sprout.",
          "image": require('../images/pho/meatball-pho.jpg')
        },
        {
          "itemId": 16,
          "label": "Meatball Pho",
          "price": 925,
          "description": "Topped with red onions, green onions, cilantro, & bean sprout.",
          "image": require('../images/pho/meatball-pho.jpg')
        }
      ]
    },
    {
      "label": "Rolls",
      "icon": "kebab",
      "items": [
        {
          "itemId": 16,
          "label": "Beef Spring Rolls",
          "price": 585,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-beef.jpg')
        },
        {
          "itemId": 17,
          "label": "Shrimp Spring Rolls",
          "price": 585,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-shrimp.jpg')
        },
        {
          "itemId": 18,
          "label": "Veggie Spring Rolls",
          "price": 499,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-vegetable.jpg')
        },
        {
          "itemId": 19,
          "label": "Chicken Spring Rolls",
          "price": 565,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-chicken.jpg')
        },
        {
          "itemId": 20,
          "label": "Sausage Spring Rolls",
          "price": 585,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-pork.jpg')
        },
        {
          "itemId": 21,
          "label": "Fried Egg Rolls",
          "price": 545,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-egg.jpg')
        },
        {
          "itemId": 22,
          "label": "Tofu Rolls",
          "price": 545,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-tofu.jpg')
        },
        {
          "itemId": 23,
          "label": "Rocket Rolls",
          "price": 545,
          "description": "Two rolls with house peanut or fish sauce.",
          "image": require('../images/rolls/roll-rocket.jpg')
        }
      ]
    },
    {
      "label": "Drinks",
      "icon": "soda",
      "items": [
        {
          "itemId": 22,
          "label": "Viet Coffee",
          "price": 425,
          "description": "",
          "image": require('../images/drinks/vietnamese-iced-coffee.jpg')
        },
        {
          "itemId": 23,
          "label": "Soda",
          "price": 170,
          "description": "",
          "image": require('../images/drinks/soda-pop.jpg')
        },
        {
          "itemId": 24,
          "label": "Bottle Drink",
          "price": 250,
          "description": "",
          "image": require('../images/drinks/bottled-waters.jpg')
        },
        {
          "itemId": 25,
          "label": "Thai Tea",
          "price": 425,
          "description": "",
          "image": require('../images/drinks/thai-tea.jpg')
        },
        {
          "itemId": 26,
          "label": "Bottle Water",
          "price": 200,
          "description": 'water...',
          "image": require('../images/drinks/bottled-waters.jpg')
        }
      ]
    }
  ]
}
