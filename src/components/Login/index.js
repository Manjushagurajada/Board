import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {isClicked: false}

  renderDashBoard = () => {
    return (
      <div>
        <img
          src="https://res.cloudinary.com/dxdudfsit/image/upload/v1713250561/Navigation_nevtep.png"
          alt="filters-page"
        />
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
                  required
                />
                <label className="label-el">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
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
