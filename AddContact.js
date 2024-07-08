import React from "react";
class AddContact extends React.Component{
  state={
    name:"",
    email:"",
  };
   add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" && this.state.email === ""){
      alert("all the fields are required");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:"", email:""});

    
   }
   render()
   {
    return(
          <div>
            <h2>Add contact</h2>
            <form className="ui form" onSubmit={this.add}>
            <div className="field">
            <label>Name:</label>
            <input type="text"  name="name"
              value={this.state.name}
              placeholder="Name" onChange={(e)=>this.setState({name:e.target.value})}></input>
            </div>
            <div className="field">
            <label>Email:</label>
            <input type="text"  name="Email"
              value={this.state.email}
              placeholder="Email"onChange={(e)=>this.setState({email:e.target.value})}></input>
            </div>
            <button className="ui button blue">Add</button>
            </form>
          </div>

    );
   }
   
}
export default AddContact;
