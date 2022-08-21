const mongoose = require("mongoose");

module.exports = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Shrimp Quesadilla",
    description:
      "Quick and simple enough for any weekday, these shrimp quesadillas boast a refreshing flavor special enough for guests. Serve with salsa on the side and a frosty smoothie, if you like. —Tiffany Bryson-San Antonio, Texas",
    picture:
      "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 34.6,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Chicken and Gravy",
    description:
      "Here’s a lightened-up take on the classic southern comfort-food dish: chicken and gravy. This recipe has been a hit at our house since the first time we tried it! —Ruth Helmuth, Abbeville, South Carolina",
    picture:
      "https://images.pexels.com/photos/7226377/pexels-photo-7226377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 22,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Salmon Chowder",
    description:
      "I’ve lived on a farm in the Yakima Valley all my life. I have a big garden, and by the end of fall, my cellar shelves are full of canned fruits and vegetables. This salmon chowder recipe uses some of the root vegetables I grow…along with the delicious salmon that is so plentiful here. —Josephine Parton, Granger, Washington",
    picture:
      "https://images.pexels.com/photos/6605207/pexels-photo-6605207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 46,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Turkey Shepherd’s Pie",
    description:
      "We live way out in the county, and the nearest grocery store is 25 miles away. So I’ve become quite skilled at turning leftovers into second-time-around successes like this turkey shepherd’s pie. —Linda Howe, Jackman, Maine",
    picture:
      "https://images.pexels.com/photos/5419307/pexels-photo-5419307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 28.66,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Ground Turkey Vegetable Soup",
    description:
      "Low-sodium ingredients don’t diminish the full flavor of this brothy ground turkey vegetable soup. The turkey lends a heartiness that everyone will welcome on a cold blustery evening. —Bonnie LeBarron, Forestville, New York",
    picture:
      "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 32.15,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Steak and Shrimp Kabobs",
    description:
      "These steak and shrimp kabobs make any get-together special. Cubes of marinated steak are skewered with shrimp and veggies, then grilled. For picnics, I assemble the kabobs at home and carry them in a large container. —Karen Mergener, St. Croix, Minnesota",
    picture:
      "https://images.pexels.com/photos/7474163/pexels-photo-7474163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 44,
  },
];
