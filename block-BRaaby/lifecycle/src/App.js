import React from "react";
const moment = require('moment');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      key: "",
      attribute: ""
    }
  }

componentDidMount() {
  this.fetchData()
}

fetchData = () => {
  fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => this.setState({data, key: "My name is", attribute: data.results[0].name.title + " " +  data.results[0].name.first + " " +  data.results[0].name.last }))
}

handleValue = (key, attribute) => {
  this.setState({
    key: key,
    attribute: attribute
  })
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
            <h2>{this.state.key}</h2>
            <h1>{this.state.attribute}</h1>
          </div>
          <div>
            <ul className="data flex space-between">
              <li className="icons"
              onClick={() => this.handleValue("My Name is", elm.name.title + " " + elm.name.first + " " + elm.name.last)}
              >
              <i class="fa-sharp fa-solid fa-user"></i>
              </li>
              <li className="icons"
               onClick={() => this.handleValue("My email is", elm.email)}
              >
              <i class="fa-solid fa-envelope-open"></i>
              </li>
              <li className="icons"
              onClick={() => this.handleValue("My address is", elm.location.city + "," + elm.location.country)}
              >
              <i class="fa-solid fa-location-pin"></i>
              </li>
              <li className="icons"
              onClick={() => this.handleValue("My DOB is", moment(elm.dob.date).format('MMMM d, YYYY'))}
              >
              <i class="fa-regular fa-calendar-days"></i>
              </li>
              <li className="icons"
              onClick={() => this.handleValue("My Contact number is", elm.phone)}
              >
              <i class="fa-solid fa-phone"></i>
              </li>
              <li className="icons"
              onClick={() => this.handleValue("My Username is", elm.login.username)}
              >
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