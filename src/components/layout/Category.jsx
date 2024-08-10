import TopCategoryCard from "./CategoryCards";
import image1 from "../../assets/image1.jpeg";


const  TopCategoryListing= () =>{

  const categories = [
    {
      imageSrc: image1,
      categoryTitle: "Electronics",
    },
    {
      imageSrc: image1,
      categoryTitle: "Fashion",
    },
    {
      imageSrc: image1,
      categoryTitle: "Home & Garden",
    },
    {
      imageSrc: image1,
      categoryTitle: "Home & Garden",
    },
    {
      imageSrc: image1,
      categoryTitle: "Home & Garden",
    },
    {
      imageSrc: image1,
      categoryTitle: "Home & Garden",
    },
    {
      imageSrc: image1,
      categoryTitle: "Home & Garden",
    },
  ];

 return (
   <div className="grid grid-cols-1    md:grid-cols-7 lg:grid-cols-7  gap--3 bg-white rounded-md">
     {categories.map((category, index) => (
       <TopCategoryCard
         key={index}
         imageSrc={category.imageSrc}
         categoryTitle={category.categoryTitle}
       />
     ))}
   </div>
 );
};
export default TopCategoryListing;