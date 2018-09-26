import React from 'react'
import { connect } from 'react-redux'
import { setYp } from '../actions/youngPerson'
import { setStyle } from '../actions/style'
import request from '../utils/api'

class Current extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: []
    }
    this.select = this.select.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  componentDidMount () {
    if (this.props.auth.isAuthenticated) this.updateList()
    else this.props.history.push('/')
    this.props.dispatch(setStyle('current_background'))
  }

  updateList () {
    request('get', 'yp/view/current')
      .then((response) => {
        const current = response.body
        this.setState({ current })
      })
  }

  select (yp) {
    this.props.dispatch(setYp(yp))
    this.props.history.push('/viewanswers')
  }

  render () {
    return (
      <div>
        <h1>Un-Reviewed surveys</h1>
        <ul>
          {this.state.current.map((yp, i) => (
            <li key={i}><div className='link' onClick={() => this.select(yp)}> {`${yp.details.firstName} ${yp.details.lastName}`}</div></li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Current)
