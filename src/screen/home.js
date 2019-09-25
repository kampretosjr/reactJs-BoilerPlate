import React, { Component } from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {inc,dec} from '../redux/actions/action1Example'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        counter:0
    }
  }

  componentDidMount() {
    alert('did mmount')
  }

  componentWillUnmount() {
      alert('unmount home')
  }

  componentDidUpdate(){
    alert('update')
  }

  plus () {
    this.props.dispatch(inc());
  }
  minus () {
    this.props.dispatch(dec());
  }
  render() {
    return (
      <div>
        <Header></Header>
          <p>{this.props.wik}</p>
          <Link to="/detail">
            <p>go to detail</p>
          </Link>
          <button type="button" onClick={()=>{this.plus()}} class="btn btn-warning">plus</button>
          <button type="button" onClick={()=>{this.minus()}} class="btn btn-success">minus</button>

      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
//  exampeler will be called in before 'render' code and 'result' is based on your backend
			wik: state.reCounter.counter
	}
}
export default connect(mapStateToProps)(Home)
