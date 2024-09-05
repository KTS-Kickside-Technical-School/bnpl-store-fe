import Header from "../components/layout/customerHeader";
import Footer from "../components/layout/Footer";
import ProductList from "../components/products/ProductsList";

const LandingPage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x600"
    },
    {
      id: 1,
      name: "Product 1",
      price: "RWF 1000",
      stock: 134,
      description: "Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet. Lorem ",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      name: "Product 2",
      price: "RWF 2000",
      stock: 80,
      description: "Adipisicing elit, minima voluptate.",
      imageUrl: "https://placehold.co/600x400"
    },
    // Add more products here...
  ];

  return (
    <>
      <Header />
      <ProductList products={products} />
      <Footer />
    </>
  );
};

export default LandingPage;
