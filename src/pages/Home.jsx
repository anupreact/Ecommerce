import React, { useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import img1 from "../images/cricket.png";
import banner1 from "../images/banner1.png";
import banner2 from "../images/shoe2.png";
import Testimonials from "../components/Testimonials";
import {
  categoryData,
  productsData,
  testimonialsData,
} from "../Data/SampleData";
import Carousal from "../components/Carousal";
// import { useGlobalContext } from "../context";

const title1 = "Swatches";
const desc1 =
  "Don’t have enough time to make your own gradients? Looking for a supply of popular gradients you can use for your projects? Our swatch collection features.";

const title2 = "Specials";
const desc2 =
  "We have some special edition shoes crafted for your trendy and special requirements";

const Home = () => {
  const [price, setPrice] = useState(true);



  return (
    <>
      <Carousal />
      <br />
      <Banner title={title1} desc={desc1} image={banner1} />
      <Categories
        heading={"Featured Categories"}
        btn={"Explore"}
        data={categoryData}
        value={"category"}
        qty={"no"}
        viewBtn={false}
        filterOptions={false}

      />

        <Categories
        heading={"Featured Products"}
        btn={"Add To Cart"}
        data={productsData.slice(0,4)}
        value={"product"}
        qty={"yes"}
        viewBtn={true}
        filterOptions={false}

      />
      <Banner title={title2} desc={desc2} image={banner2} />
      <Testimonials data={testimonialsData} />
    
    </>
  );
};

export default Home;
