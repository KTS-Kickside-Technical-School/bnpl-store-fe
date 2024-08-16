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
   <div className="flex flex-row md:grid    md:grid-cols-12 lg:grid-cols-12  gap-2 bg-white w-[1430px]  p-2  rounded-md">
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