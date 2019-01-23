import React from 'react'
import FormContent from './FormContent';


class FormContainer extends React.Component{
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
        <FormContent 
        data = {this.state}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        />
      
    )
  }
}


export default FormContainer