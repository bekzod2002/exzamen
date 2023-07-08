import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    categories: [],
    prodactions: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      this.setState({ categories: res.data });
    } catch (error) {
      console.error(error);
    }
  } 

  async DidMount() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      this.setState({ prodactions: res.data }) 
    } catch (error) {
      console.error(error);
    }
    
  }
  
  

  render() {
    return (
      <div className="boxs">
        <div className="container">
          <div className="input-group">
            <div className="form-outline">
              <input
                type="search"
                placeholder="search"
                id="form1"
                className="form-control"
              />
            </div>
          </div>
          <h2>Category</h2>

          <ul className="list-group-light list-group-small">
            {this.state.categories.map((category) => (
              <li className="list-group-item" key={category}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="container1">
        {this.state.prodactions.map((prodact) => (
              <div className="imgs1" key={prodact}>
                {prodact}
              </div>
            ))}
          <div className="imgs1">
            <div className="img"></div>
            <div className="matn">
              <p>Modern Poster</p>
              <span>$30.99</span>
            </div>
          </div>


          <div className="imgs1">
            <div className="img"></div>
            <div className="matn">
              <p>Modern Poster</p>
              <span>$30.99</span>
            </div>
          </div>

          <div className="imgs1">
            <div className="img"></div>
            <div className="matn">
              <p>Modern Poster</p>
              <span>$30.99</span>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default App;




