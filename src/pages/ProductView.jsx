import Footer from "../components/layout/Footer"
import Header from "../components/layout/customerHeader"
import ProductPage from "../components/products/ViewSingleProduct";

function ProductView() {
  return (
    <div className="bg-[#C5D7E2]">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default ProductView
