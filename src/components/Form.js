import React, { Component } from 'react';

export default class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname:'',
            email:''
        };
        //this.rowCallback = this.rowCallback.bind(this);
       
    }

   
    
    handleChange = (event) => {
        this.setState ({
            [event.target.name]:event.target.value
        });
       
    }

    handleSubmit = (event) =>
    {
        alert("Your Submitted data is "+ this.state.firstname + " and " + this.state.lastname  );
        event.preventDefault();
    }    
    
    render()
    {
        
      
        return(
            <form onSubmit ={this.handleSubmit}>


<p><div >First Name</div>
<div > <p> 
<input name='firstname' placeholder ='' value={this.state.firstname} onChange={this.handleChange}/> </p>
</div>
</p>

<p><div >Last Name</div>
<div > <p> 
<input name='lastname' placeholder ='' value={this.state.lastname} onChange={this.handleChange} /> </p>
</div>
</p>
<p><div >Email</div>
<div > <p> 
<input name='email' placeholder =''value={this.state.email} onChange={this.handleChange} /> </p>
</div>
</p>

</form>
        )
        
    }
}

