import React from 'react'
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fastName : "",
      lastName : "",
      age      : "",
      gender   : "",
      location : "Dhaka",
      vegiterian: false,
      lactoseFree: false,
      kosher    : false
      

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
   
  }
  handleChange(event){
    const {name,value,checked,type} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) :
          this.setState({[name] : value})
    
  }
  
  handleSubmit(event){
    const text = this.state.vegiterian ? "Vegan" : "" 
    const text2 = this.state.lactoseFree ? " Lactose free" : "" 
    const text3 = this.state.kosher ? " Kosher" : "" 
    alert(
      "First name: " + this.state.fastName + "\n" +
      "Last name: " + this.state.lastName + '\n' +
      "Your age: " + this.state.age + "\n" +
      "Genger : " + this.state.gender + '\n' + 
      "Location: " + this.state.location + '\n' +
      "Diatery Restriction: " + text + " " + text2 + " " + text3
     
    )
    event.preventDefault()
  }


  render(){
    return(
      <div>
        <div className="heading">
        <h1>Smart Airways</h1>
          <p>Your trusted companion</p>

        </div>
     
      <div className="formStyle">
        <form onSubmit={this.handleSubmit}>
          <label>First Name:  
            <input className ="text" type="text" name="fastName" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>Last Name: 
            <input className ="text" type="text" name="lastName" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>Your Age: 
            <input className ="text" type="number" name="age" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>Gender: <br />
            <label>Male:<input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={this.state.gender ==="male"}
             onChange={this.handleChange} />  </label> <br />
             <label>female<input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={this.state.gender ==="female"}
             onChange={this.handleChange} /> </label>
          </label>
          <br />
          <label>Travelling to: 
            <select className ="text" name="location" value={this.state.location} onChange={this.handleChange}>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </label>
          <br />
          <label>Any Dietary restriction?  <br />
              <label>vegiterian <input type="checkbox" name="vegiterian"
             onChange={this.handleChange} checked={this.state.vegiterian} /></label> <br />
              <label>Lactose Free <input type="checkbox" name="lactoseFree" 
             onChange={this.handleChange} checked={this.state.lactoseFree} /></label> <br />
               <label>kosher<input type="checkbox" name="kosher" 
             onChange={this.handleChange} checked={this.state.kosher} /> </label>
          </label>
          <br />
          <button className="btn">Submit</button>

        </form>
      </div>
      </div>
    )
  }
}


export default App