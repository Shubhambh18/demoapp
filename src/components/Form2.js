import React, { Component } from 'react';


export default class Form2 extends React.Component{
   
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            empid:''
        };
    }

    handleChange = (event) => {
        this.setState ({
            [event.target.name]:event.target.value
        });
       
    }
    
    handleSubmit = (event) =>
    {
        alert("Your Submitted data is "+ this.state.mobile + " and " + this.state.empid );
        event.preventDefault();
    }    
   
    render()
    {
        return(
            <form onSubmit ={this.handleSubmit} >


            <p><div >Mobile</div>
<div > <p> 
<input type='text' name="mobile" value={this.state.mobile} onChange={this.handleChange}/> </p>
</div>
</p>
<p><div >Employee ID </div>
<div > <p> 
<input type='number' name="empid"  value={this.state.empid}  onChange={this.handleChange}/> </p>
</div>
</p>
<input type='submit' value="Submit" />
</form>


        )
        
    }
}