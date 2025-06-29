import { item } from "@/types/burgerBliss/type"
import { atom } from "jotai"

export const cartItemsGlobal = atom<{ product: item, quantity: number }[]>([])

export const burgers: item[] = [
    {
        id: "burgers2",
        title: "Beef Burger",
        price: 15.99,
        description: "Juicy beef patty with fresh toppings.",
        image: "/burgerBliss/burgers/2.png"
    },
    {
        id: "burgers1",
        title: "Fish Burger",
        price: 10.99,
        description: "Crispy fish fillet with tartar sauce.",
        image: "/burgerBliss/burgers/1.png"
    },
    {
        id: "burgers3",
        title: "Veggie Burger",
        price: 5.99,
        description: "Deliciously seasoned veggie patty.",
        image: "/burgerBliss/burgers/3.png"
    },
    {
        id: "burgers4",
        title: "Dave's Triple",
        price: 10.99,
        description: "Triple the beef, triple the taste.",
        image: "/burgerBliss/burgers/4.png"
    },
    {
        id: "burgers5",
        title: "Bacon Double Stack",
        price: 15.99,
        description: "Double patties with crispy bacon.",
        image: "/burgerBliss/burgers/5.png"
    },
    {
        id: "burgers6",
        title: "Big Bacon Classic Double",
        price: 5.99,
        description: "Classic double with bacon delight.",
        image: "/burgerBliss/burgers/6.png"
    },
    {
        id: "burgers7",
        title: "Big Bacon Classic",
        price: 5.99,
        description: "Classic burger with smoky bacon.",
        image: "/burgerBliss/burgers/7.png"
    },
    {
        id: "burgers8",
        title: "Baconator",
        price: 5.99,
        description: "Loaded with bacon and beef patties.",
        image: "/burgerBliss/burgers/8.png"
    },
    {
        id: "burgers9",
        title: "Big Bacon Classic Triple",
        price: 5.99,
        description: "Triple patties, triple bacon bliss.",
        image: "/burgerBliss/burgers/9.png"
    },
    {
        id: "burgers10",
        title: "Dave's Double",
        price: 5.99,
        description: "Double the beef, double the flavor.",
        image: "/burgerBliss/burgers/10.png"
    },
    {
        id: "burgers11",
        title: "Dave's Single",
        price: 5.99,
        description: "Single patty with all the fixings.",
        image: "/burgerBliss/burgers/11.png"
    },
    {
        id: "burgers12",
        title: "Pretzel Baconator",
        price: 5.99,
        description: "Pretzel bun with bacon and beef.",
        image: "/burgerBliss/burgers/12.png"
    },
]

export const drinks: item[] = [
    {
        id: "drinks1",
        title: "Coca-Cola",
        price: 1.99,
        description: "Classic fizzy cola drink.",
        image: "/burgerBliss/drinks/1.png"

    },
    {
        id: "drinks2",
        title: "Diet Coke",
        price: 1.99,
        description: "Refreshing low-calorie cola.",
        image: "/burgerBliss/drinks/2.png"

    },
    {
        id: "drinks3",
        title: "Sprite",
        price: 1.99,
        description: "Crisp lemon-lime soda.",
        image: "/burgerBliss/drinks/3.png"

    },
    {
        id: "drinks4",
        title: "Fanta Orange",
        price: 1.99,
        description: "Tangy orange flavored soda.",
        image: "/burgerBliss/drinks/4.png"

    },
    {
        id: "drinks5",
        title: "Dr Pepper",
        price: 1.99,
        description: "Unique blend of 23 flavors.",
        image: "/burgerBliss/drinks/5.png"

    },
    {
        id: "drinks6",
        title: "Minute Maid Lemonade",
        price: 1.99,
        description: "Sweet and tangy lemonade.",
        image: "/burgerBliss/drinks/6.png"

    },
    {
        id: "drinks7",
        title: "Hi-C Flashin' Fruit Punch",
        price: 1.99,
        description: "Fruity and refreshing punch.",
        image: "/burgerBliss/drinks/7.png"

    },
    {
        id: "drinks8",
        title: "Blueberry Pomegranate Lemonade",
        price: 1.99,
        description: "Electrolyte-packed berry drink.",
        image: "/burgerBliss/drinks/8.png"

    },
    {
        id: "drinks9",
        title: "Barq's Root Beer",
        price: 1.99,
        description: "Bold and creamy root beer.",
        image: "/burgerBliss/drinks/9.png"

    },
    {
        id: "drinks10",
        title: "pure life Water",
        price: 1.49,
        description: "refreshing bottled water.",
        image: "/burgerBliss/drinks/10.png"

    }
]

export const desserts: item[] = [
    {
        id: "desserts2",
        title: "Frosty Vanilla",
        price: 2.49,
        description: "Smooth vanilla frozen delight.",
        image: "/burgerBliss/desserts/2.png"

    },
    {
        id: "desserts1",
        title: "Hersheys Pie",
        price: 2.49,
        description: "Creamy chocolate pie.",
        image: "/burgerBliss/desserts/1.png"

    },
    {
        id: "desserts3",
        title: "Chocolate Chunk Cookie",
        price: 1.49,
        description: "Loaded with chocolate chunks.",
        image: "/burgerBliss/desserts/3.png"

    },
    {
        id: "desserts4",
        title: "Sugar Cookie",
        price: 1.49,
        description: "Soft and sweet classic cookie.",
        image: "/burgerBliss/desserts/4.png"

    },
    {
        id: "desserts5",
        title: "Oatmeal Bar",
        price: 1.49,
        description: "Chewy and wholesome oatmeal bar.",
        image: "/burgerBliss/desserts/5.png"

    },
    {
        id: "desserts6",
        title: "Cinnabon pull-apart",
        price: 2.49,
        description: "tasty, crispy and ready to eat",
        image: "/burgerBliss/desserts/6.png"

    },
    {
        id: "desserts7",
        title: "Caramel drizzle",
        price: 2.99,
        description: "sweet and salty caramel",
        image: "/burgerBliss/desserts/7.png"

    },
]

export const sides: item[] = [
    {
        id: "sides1",
        title: "Loaded Fries",
        price: 2.49,
        description: "Crispy and golden fries.",
        image: "/burgerBliss/sides/1.png"

    },
    {
        id: "sides2",
        title: "Baked Potato",
        price: 2.99,
        description: "Fluffy baked potato.",
        image: "/burgerBliss/sides/2.png"

    },
    {
        id: "sides3",
        title: "Chili Potato",
        price: 3.49,
        description: "Hearty and spicy beef chili potato.",
        image: "/burgerBliss/sides/3.png"

    },
    {
        id: "sides4",
        title: "Parmesan Caesar Salad",
        price: 2.49,
        description: "Fresh and crisp garden salad.",
        image: "/burgerBliss/sides/4.png"

    },
    {
        id: "sides5",
        title: "cobb Salad",
        price: 3.49,
        description: "Tasty cobb salad.",
        image: "/burgerBliss/sides/5.png"

    },
    {
        id: "sides7",
        title: "BBQ Sauce",
        price: 0.49,
        description: "Sweet and smoky BBQ sauce.",
        image: "/burgerBliss/sides/6.png"

    },
    {
        id: "sides8",
        title: "Sweet & Sour Sauce",
        price: 0.49,
        description: "Tangy and sweet dipping sauce.",
        image: "/burgerBliss/sides/7.png"

    },
    {
        id: "sides9",
        title: "Ranch Sauce",
        price: 0.49,
        description: "Creamy and savory ranch dip.",
        image: "/burgerBliss/sides/8.png"

    },
    {
        id: "sides10",
        title: "Ketchup",
        price: 0.49,
        description: "Rich tomato ketchup.",
        image: "/burgerBliss/sides/9.png"

    },
    {
        id: "sides11",
        title: "Honey Mustard Sauce",
        price: 0.49,
        description: "Sweet and tangy mustard dip.",
        image: "/burgerBliss/sides/10.png"

    },
    {
        id: "desserts6",
        title: "Buffalo wild wings",
        price: 3.99,
        description: "get your wings",
        image: "/burgerBliss/sides/11.png"

    },

]
