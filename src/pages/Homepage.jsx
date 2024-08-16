
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";
import ProductList from "../components/layout/ProductList";
import TopCategoryListing from "../components/layout/Category";
import image1 from "../assets/image1.jpeg"


const products = [
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
  {
    id: 1,
    name: "i15 Pro Max HD Ultra 16GB+1TB",
    price: 110000,
    stock: 134,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard.",
    image: image1,
  },
];


const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#C5D7E2]  ">
        <div className="container ml-2 mr-2 px-4 py-1 ">
      <TopCategoryListing/>
          <h2 className="text-xl font-semibold mb-1">Hot deals</h2>
          <ProductList products={products}/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
