import React, { Component } from 'react';
import './custom.css'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toWords: String
        }
    }

    componentDidMount() {
        console.log("in");
        fetch("C:\Users\Achala\source\repos\InterviewReact\InterviewReact\Controllers\ConvertToWordsController.cs")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    toWords: json
                })
            });
        
    }
  

  render () {
      return (
          <div className="center outline">
              <h3>Convert Number to Words</h3>
              <input placeholder="Enter number"></input>
              {toWords.map(toWord => {
                  <p> In Words: {toWord}</p>
              })};
        </div>
    );
  }
}
