import React from 'react'


function FormContent(props){
        return(
        <main>
        <div className="heading">
        <h1>Smart Airways</h1>
          <p>Your trusted companion</p>

        </div>
     
      <div className="formStyle">
        <form onSubmit={props.handleSubmit}>
          <label>First Name:  
            <input className ="text" type="text" name="fastName" value={props.data.value} onChange={props.handleChange} />
          </label>
          <br />
          <label>Last Name: 
            <input className ="text" type="text" name="lastName" value={props.data.value} onChange={props.handleChange} />
          </label>
          <br />
          <label>Your Age: 
            <input className ="text" type="number" name="age" value={props.data.value} onChange={props.handleChange} />
          </label>
          <br />
          <label>Gender: <br />
            <label>Male:<input 
            type="radio" 
            name="gender"
            value="male" 
            checked={props.data.gender ==="male"}
             onChange={props.handleChange} />  </label> <br />
             <label>female<input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={props.data.gender ==="female"}
             onChange={props.handleChange} /> </label>
          </label>
          <br />
          <label>Travelling to: 
            <select className ="text" name="location" value={props.data.location} onChange={props.handleChange}>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </label>
          <br />
          <label>Any Dietary restriction?  <br />
              <label>vegiterian <input type="checkbox" name="vegiterian"
             onChange={props.handleChange} checked={props.data.vegiterian} /></label> <br />
              <label>Lactose Free <input type="checkbox" name="lactoseFree" 
             onChange={props.handleChange} checked={props.data.lactoseFree} /></label> <br />
               <label>kosher<input type="checkbox" name="kosher" 
             onChange={props.handleChange} checked={props.data.kosher} /> </label>
          </label>
          <br />
          <button className="btn">Submit</button>

        </form>
      </div>
      </main>
    )
}




export default FormContent