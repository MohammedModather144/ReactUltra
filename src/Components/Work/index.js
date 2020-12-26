import  "./main.css";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { Component } from "react";
class Work extends Component{
  state={
    works:[]
  }
  componentDidMount(){
    axios.get("js/data.json").then(res=>{
      this.setState({
        works:res.data.works
      })
    })
  }
  render(){
    const {works}=this.state
    const ListWorks=works.map((work)=>{
      return(
        <div className="part" key={work.id}>
        <i className={work.icon_name}></i>
        <h4 className="part-title">{work.title}</h4>
        <hr className="line"/>
        <p className="part-desc">{work.body}</p>
      </div> 
      )
    })
    return(
      <div className="work">
        <div className="container">
          <h2 className="work-title"><span>My</span> Work</h2>
          {ListWorks}
        </div>
      </div>
    )
  }
}
export default Work;