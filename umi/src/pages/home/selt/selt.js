
import React,{Component} from 'react'
import axios from 'axios';

export default class extends Component{

  render() {
    return (<div ref = 'content'></div>)
  }

  componentDidMount(){
    axios.get('http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2').then((res)=>{
      this.setState({
      }, ()=>{
        this.refs.content.innerHTML = res.data.content
      })
    })
  }
}
