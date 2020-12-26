import axios from "axios";
import { useEffect, useState } from "react";
import "./main.css";

const Portifolio=()=>{
  const[images,setImages]=useState([])
  useEffect(()=>{
    axios.get("js/data.json").then(res=>{
      setImages(res.data.portfolio)
    })
  },[])
  const ListPortfolio=images.map((imageItem)=>{
    return(
      <div key={imageItem.id}>
        <img src={imageItem.image} alt=""/>
        <p className="overlay">
          <span>
              Show Image
          </span>
        </p>
      </div>
    )
  })
 return(
  <div className="portfolio">
  <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
  <ul className="portfolio-list">
      <li className="portfolio-item active">All</li>
      <li className="portfolio-item">HTML</li>
      <li className="portfolio-item">Photoshop</li>
      <li className="portfolio-item">Wordpress</li>
      <li className="portfolio-item">Mobile</li>
  </ul>
  <div className="box">
      {ListPortfolio}
    </div>
  </div>
 )
}
export default Portifolio;