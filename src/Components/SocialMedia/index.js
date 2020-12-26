import "./main.css";
import axios from "axios";
import { useEffect, useState } from "react";
const SocialMedia=()=>{
  const[social,setSocial]=useState([]);
  useEffect(()=>{
    axios.get("js/data.json").then(res=>{setSocial(res.data.social)})
  },[])
  const SocialList=social.map((soc)=>{
    return(
      <div className="social face" key={soc.id}>
      <i className={soc.icon}></i>
      <p>
        <span className="info1">{soc.title}</span>
        <span className="info2">{soc.body}</span>
      </p>
    </div>
    )
  })
  return(
    <div className="social-media">
      {SocialList}
    </div>
  )
}
export default SocialMedia;