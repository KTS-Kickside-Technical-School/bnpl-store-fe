import TopCategoryCard from "./CategoryCards";

const  TopCategoryListing= () =>{
 return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-md bg-white">
     <TopCategoryCard />
   </div>
 );
};
export default TopCategoryListing;