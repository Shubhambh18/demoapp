import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


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

<Button primary  animated='fade'>
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>Click Here</Button.Content>
    </Button>
</form>


        )
        
    }
}
//<button primary value="Submit" >Submit </button>
