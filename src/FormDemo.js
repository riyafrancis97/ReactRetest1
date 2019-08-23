
import React from 'react';

export default class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            flag:'failure'
        };
    }

    handleChange = event => {
        this.setState({
            id: event.target.value
        });
    }
    handleIdChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmit = event => {
        for(let i in this.props.deets){
           
        if(this.state.id==this.props.deets[i].id)
        {
        if(this.state.name==this.props.deets[i].name)
        console.log("successfully entered");
        this.setState({
            flag:'success'
        })
        break;
        }
    }  if(this.state.flag==='failure')
     
        
        event.preventDefault();
        
    }
    
    render() {
      

        return (
            <div><br/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Id:
                    <input type="text" name="id"
                            value={this.state.id}
                            onChange={this.handleChange} />
                            <br/><br/>
                            Name:
                    <input type="text" name="name"
                            value={this.state.name}
                            onChange={this.handleIdChange} />
                    </label><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    {this.state.flag}
                                    </p>
            </div>
        );
    }
}

