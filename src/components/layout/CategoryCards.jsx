/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const TopCategoryCard = ({ imageSrc, categoryTitle }) => {
  return (
    <div className="border h-full w-[60px]  rounded-md   bg-white shadow-md">
      <img
        src={imageSrc}
        alt=""
        className="w-full h-10 object-cover rounded-md  mb-0"
      />
      <Link to="/productview">

      <h3 className="text-[7px] font-bold pl-1 mt-1 text-black  ">
        {categoryTitle}
      </h3>
      </Link>
    </div>
  );
};
export default TopCategoryCard;
