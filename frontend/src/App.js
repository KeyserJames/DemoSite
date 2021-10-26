import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';


class App extends Component {
constructor(){
  super();
  this.handleSubmit = this.handleSubmit.bind(this)
}

state={
  entries: []
}



componentDidMount(){
  fetch('https://demo-site-api-app.herokuapp.com/api/')
  .then(res => res.json())
  .then((data) => {
    this.setState({entries:data})
    console.log(this.state.entries)
  })
  .catch(console.log)
}

//{this.componentDidMount()}

handleSubmit(event){
  event.preventDefault();
  const data = new FormData(event.target);
  fetch('https://demo-site-api-app.herokuapp.com/api/', {
    method:'POST',
    body: data
 
}).then(value => {this.componentDidMount()})

        
}

render() {

  return (
    <>
    <div class ="split left">
     <div className="container">
      <div className="col-xs-12">
      <h1>Database Entries</h1>
      {this.state.entries.reverse().map((entries) => (
        <div className="card">
          <div className="card-body">
            <h5 className = "card-title">
            {entries.inputText}
            </h5>
            <h6 className = "card-subtitle mb-2 text-muted">
              <span>
                ID-
                </span>
            {entries.primaryId}
            </h6>

          </div>
        </div>
      ))}
      </div>
     </div>
     </div>
     <div class = "split right">
       <h1>New Entry</h1>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor='inputText'>
           <input id='inputText' name='inputText' type='text'/>
         </label>
         <button>Submit</button>
       </form>


     </div>

      </>
  );
}

}

export default App;