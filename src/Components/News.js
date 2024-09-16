import { useEffect, useState } from "react";
import Navbar from "./NewsComponent/Navbar";
import NewsBoard from "./NewsComponent/NewsBoard";
import AOS from "aos";
import "aos/dist/aos.css";

function News() {
  const [category, setcategory] = useState("general");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="" data-aos="fade-down" data-aos-duration="2000">
      <center>
        <h1 style={{ marginTop: "5%" }}>News</h1>
      </center>
      <Navbar setcategory={setcategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default News;
