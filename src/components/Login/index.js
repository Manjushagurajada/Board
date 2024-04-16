import {Component} from 'react'

import PieChartData from '../PieChartData'

import './index.css'

class Login extends Component {
  state = {isClicked: false, details: {}}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.AN
    this.setState({details: updatedData})
  }

  renderDashBoard = () => {
    const {details} = this.state
    const {delta, delta7} = details
    const {tested, vaccinated1, vaccinated2} = delta
    return (
      <div className="dashboard">
        <img
          src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713250561/Navigation_nevtep.png"
          alt="filters-page"
        />
        <div className="dashboard-second-section">
          <div className="dashboard-text">
            <h2>Dashboard</h2>
            <div className="profile-container">
              <input
                type="search"
                placeholder="Search"
                className="search-bar"
              />
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713253883/Vector_qnwflp.png"
                alt="bell"
                className="item"
              />
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713254451/Mask_Group_zrrc37.png"
                alt="profile"
                className="item"
              />
            </div>
          </div>
          <div className="dashboard-items-container">
            <div className="dashboard-item-1">
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713258349/Vector_1_viz3oa.png"
                alt="revenue"
                className="image"
              />
              <p>Total Revenues</p>
              <h2 className="amount">$2,534</h2>
            </div>
            <div className="dashboard-item-2">
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713259305/total_transactions_icon_c5sgbe.png"
                alt="transactions"
                className="image"
              />
              <p>Total Transactions</p>
              <h2 className="amount">{tested}</h2>
            </div>
            <div className="dashboard-item-3">
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713259353/Vector_2_eixlya.png"
                alt="likes"
                className="image"
              />
              <p>Total Likes</p>
              <h2 className="amount">{vaccinated2}</h2>
            </div>
            <div className="dashboard-item-4">
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713259399/Vector_3_xsynwd.png"
                alt="users"
                className="image"
              />
              <p>Total Users</p>
              <h2 className="amount">{vaccinated1}</h2>
            </div>
          </div>
          <div className="dashboard-items">
            <div className="piechart-container">
              <h3>Top products</h3>
              <PieChartData data={details} />
            </div>
          <img src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713263309/Schedules_Card_1_ikfi18.png" alt="schedulers"/>
          </div>
        </div>
      </div>
    )
  }

  renderLoginPage = () => {
    const onSubmitDetails = event => {
      event.preventDefault()
      this.setState({isClicked: true})
    }
    return (
      <div className="login-form">
        <div className="login-first-section">
          <h1 className="board-heading">Board.</h1>
        </div>
        <div className="login-second-section">
          <div className="sign-in-text">
            <h1 className="sign-in">Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="icons-container">
            <div className="icon-tab">
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713248277/google-icon_1_s7lze2.png"
                alt="google-icon"
              />
              <p className="tab-text">Sign in with Google</p>
            </div>
            <div className="icon-tab">
              <img
                src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713248919/apple_1_dbvgbx.png"
                alt="google-icon"
              />
              <p className="tab-text">Sign in with Apple</p>
            </div>
          </div>
          <div className="container">
            <div className="card">
              <form type="submit" onSubmit={onSubmitDetails}>
                <label className="label-el">Email address</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email"
                />
                <label className="label-el">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <p className="forgot-password">Forgot password?</p>
                <button type="submit">Sign In</button>
              </form>
            </div>
          </div>
          <p className="bottom-text">
            Don’t have an account?{' '}
            <span className="span-el">Register here</span>
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isClicked} = this.state
    return isClicked ? this.renderDashBoard() : this.renderLoginPage()
  }
}

export default Login
