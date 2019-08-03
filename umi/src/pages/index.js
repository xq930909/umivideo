
import React,{Component} from 'react'

export default class extends Component{
  render() {
    return (
      <div>
        跳转主页
      </div>
    )
  }

  componentDidMount(){
    this.props.history.push('/home')
  }
}
