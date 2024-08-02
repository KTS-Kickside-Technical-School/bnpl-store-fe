
import Header from "../components/layout/header";
import Footer from "../components/layout/Footer";
import ProductList from "../components/layout/ProductList";
import TopCategoryListing from "../components/layout/Category";


const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#C5D7E2]">
        <div className="container mx-auto px-4 py-1 ">
      <TopCategoryListing/>
          <h2 className="text-xl font-semibold mb-1">Hot deals</h2>
          <ProductList/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
