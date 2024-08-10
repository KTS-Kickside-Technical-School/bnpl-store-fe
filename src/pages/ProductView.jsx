import Footer from "../components/layout/Footer"
import Header from "../components/layout/header"
import ProductPage from "../components/layout/viewSingleProduct"


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
