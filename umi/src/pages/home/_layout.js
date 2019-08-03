import React,{Component} from "react"
import axios from 'axios'
import styles from './index.css'
import {connect} from 'react-redux'

 class home extends Component {
    state = {
        data: null,
        videoUrl: '',
        look:'video',
        flag: false
    }
    render(){
        let {videoUrl, data, look} = this.state
        let {url} = this.props

        return (<>
            {data &&(
                <div className = {styles.body}>
                    <header className = {styles.header}>
                        {data.title}
                    </header>
                    <main>
                        <div>
                            {look === 'video'?
                            <video src={url} className = {styles.video}
                            autabutter="true"
                            autoPlay='autplay'
                            controls="controls"></video>:
                            <audio src={url} className = {styles.video}
                            autabutter="true"
                            autoPlay='autplay'
                            controls="controls"></audio>
                            }
                            
                        </div>
                        <ul className = {styles.list}>
                            <li>收藏 </li>
                            <li>下载</li>
                            <li>分享</li>
                            <li>笔记</li>
                        </ul>
                        <ul className = {styles.list} style = {{background:'#fff'}}>
                            <li onClick = {()=>this.routerFn('/home/selt/selt')}>介绍</li>
                            <li onClick = {()=>this.routerFn('/home/video/video','video')}>视频</li>
                            <li onClick = {()=>this.routerFn('/home/audio/audio','audio')}>音频</li>
                        </ul>
                        {this.props.children}
                    </main>
                </div>
                )
            }
           
        </>)
    }
    componentDidMount(){
        axios.get('http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2').then((res)=>{
            this.setState({
                data: res.data
            })
        })
        axios.get('http://api.cnfuyin.net/api/url/index?movid=2596&urlid=42060&app=fytv&device=android&version=3.0.2').then((res)=>{
            this.props.add(res.data.url_1)
        })
    }

    routerFn(url,look) {
        if(look){
            this.setState({
                look,
                flag:false
            })
        }
        this.props.history.push(url)
    }
    urlid(id){
        axios.get('http://api.cnfuyin.net/api/url/index?movid=2596&urlid='+id+'&app=fytv&device=android&version=3.0.2').then((res)=>{
            this.setState({
                videoUrl: res.data.url_1
            })
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
)(home)