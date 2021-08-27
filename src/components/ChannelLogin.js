import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

class ChannelLogin extends Component {
    constructor(props) {
        super(props)
         this.state = {
            channel: "",
            error: false
         }
   this.onChange = this.onChange.bind(this);
      }
   
      onChange =  (e) => {
        let { name, value } = e.target;
        this.setState( () => ({
            [name]: value
        }))
    
      }
      onSubmit = e => {
          console.log("Submit",e)
        e.preventDefault();
        console.log("Submiting ", this.state.channel);
        this.props.selectChannel(this.state.channel);
        this.setState({ channel: "" });
      };
       
      render() {
        return (<div>
      <br/>
      <TextField label= "Channal Name " variant="outlined"
              error={this.state.error}
              helperText={this.state.error ? 'Invalid username or password' : ''}
              type="text"
            //   value={this.state.channel}
              onChange={this.onChange}/>
    <Button variant="outlined">Submit</Button>
</div>);
      }
}

export default ChannelLogin;