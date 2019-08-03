import React,{Component} from "react"

export default class extends Component {
    state = {
    }
    render(){
        return (<>
           <div></div>
        </>)
    }
    componentDidMount(){
        this.props.history.push('/home/selt/selt')
    }

}