const products: Product[] = [
  {
    image: "/productImgs/brushed-bomber.png",
    title: "Brushed Bomber",
    type: "Jacket",
    price: 195,
    gender: false,
    productId: 1,
    quantity: 1
  },
  {
    image: "/productImgs/brushed-raglan-sweatshirt.png",
    title: "Brushed Raglan Sweatshirt",
    type: "Sweater",
    price: 175,
    gender: false,
    productId: 2,
    quantity: 1
  },
  {
    image: "/productImgs/flex-push-button.png",
    title: "Flex Push Button",
    type: "Shirt",
    price: 200,
    gender: true,
    productId: 9,
    quantity: 1
  },
  {
    image: "/productImgs/flex-sweatshirt.png",
    title: "Flex Sweatshirt",
    type: "Sweater",
    price: 150,
    gender: false,
    productId: 3,
    quantity: 1
  },
  {
    image: "/productImgs/cameryn-sach-tie.png",
    title: "Cameryn Sash Tie",
    type: "Dress",
    price: 545,
    gender: false,
    productId: 4,
    quantity: 1
  },
  {
    image: "/productImgs/raglan-sweatshirt.png",
    title: "Raglan Sweatshirt",
    type: "Shirt",
    price: 130,
    gender: true,
    productId: 10,
    quantity: 1
  },
  {
    image: "/productImgs/imperial-alpaca-hoodie.png",
    title: "Imperial Alpaca Hoodie",
    type: "Trousers",
    price: 250,
    gender: false,
    productId: 5,
    quantity: 1
  },
  {
    image: "/productImgs/flex-swearpants.png",
    title: "Flex Sweatpants",
    type: "Trousers",
    price: 150,
    gender: false,
    productId: 6,
    quantity: 1
  },
  {
    image: "/productImgs/pink-fleece-sweatpants.png",
    title: "Pinkfleece Sweatpants",
    type: "Trousers",
    price: 150,
    gender: false,
    productId: 7,
    quantity: 1
  },
  {
    image: "/productImgs/muscle-tank.png",
    title: "Muscle Tank",
    type: "Shirt",
    price: 100,
    gender: false,
    productId: 8,
    quantity: 1
  },
];

export function getMaleProducts() {
  const maleProduct: Product[] = products.filter(
    (product) => product.gender === true
  );
  return maleProduct;
}

export function getFemaleProducts() {
  const maleProduct: Product[] = products.filter(
    (product) => product.gender === false
  );
  return maleProduct;
}

export default function getAllProducts() {
  const allProducts: Product[] = products;
  return allProducts;
}

export function getProductById(id: number): Product {
  const product = products.find((product) => product.productId === id);
  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }
  return product;
}
