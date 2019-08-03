
import React,{Component} from 'react'
import axios from 'axios'
import styles from "./video.css"
import {connect} from 'react-redux'
 class selt extends Component{
    state = {
        data: null
    }
    render() {
        let {data } = this.state
        return (
        <>
            {
                data && (<ul className = {styles.list}>
                    {
                        data.map(item=>(
                            <li onClick = {()=> this.urlid(item.urlid)} key = {item.urlid}>
                                <p>{item.sort_title}</p>
                            </li>
                        ))
                    }
                </ul>)
            }
        </>
        )
    }

    componentDidMount(){

        axios.get('http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2').then((res)=>{
            this.setState({
                data: res.data.urls
            })
        })
        // axios.get('http://api.cnfuyin.net/api/url/index?movid=2596&urlid=42060&app=fytv&device=android&version=3.0.2').then((res)=>{
        //     console.log(res.data)
        //     this.setState({
        //         data: res.data
        //     })
        // })
    }
    urlid(id){
        axios.get('http://api.cnfuyin.net/api/url/index?movid=2596&urlid='+id+'&app=fytv&device=android&version=3.0.2').then((res)=>{
            this.props.add(res.data.url_1)
        })
    }
}

export default connect(
    (state)=>{
        return {...state}
    },
    (dispatch)=>{
        return {
            add(value){
                dispatch({
                    type:'add',
                    value
                })
            }
        }
    }
)(selt)
