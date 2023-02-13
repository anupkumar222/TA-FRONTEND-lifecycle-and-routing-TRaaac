import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      value: ""
    }
  }

componentDidMount() {
  this.fetchData()
}

fetchData = () => {
  fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => this.setState({data}))
}

handleValue = () => {
  
}

  render() {
    if(!this.state.data) {
      return <h1>Loading....</h1>
    }
    return (
      <div className="container">
        {this.state.data.results.map((elm) => (
        
            <>
            <figure className="image">
            <img src={elm.picture.large} alt="userimg" className="userImg" /> 
          </figure>
          <div className="info">
            <h2>{elm.name.title + " " +elm.name.first + " " + elm.name.last}</h2>
            <h1>{this.state.value}</h1>
          </div>
          <div>
            <ul className="data flex space-between">
              <li className="icons"
              onClick={this.handleValue}
              >
              <i class="fa-sharp fa-solid fa-user"></i>
              </li>
              <li className="icons">
              <i class="fa-solid fa-envelope-open"></i>
              </li>
              <li className="icons">
              <i class="fa-solid fa-location-pin"></i>
              </li>
              <li className="icons">
              <i class="fa-regular fa-calendar-days"></i>
              </li>
              <li className="icons">
              <i class="fa-solid fa-phone"></i>
              </li>
              <li className="icons">
              <i class="fa-solid fa-lock"></i>
              </li>
            </ul>
          </div>
          </>
         
          

        ))}

        <button
        onClick={this.fetchData}
        >GET USER</button>
      </div>
    )
  }

} 


export default App