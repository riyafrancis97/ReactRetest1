import React from 'react'
import Counter from './Counter'
import Student from './Student'
import ApiDemo from './ApiDemo'
import FormDemo from './FormDemo';
import NavBar from './NavBar';
import Content  from './Content'

export default class App extends React.Component {
constructor(){
    super();
    this.state={
        list:[
            {id:10,name:'Riya'},
            {id:11,name:'Shilpa'},
            {id:13,name:'Shreya'}
        ]
    };
}    
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <Counter  />
                <h3>STUDENT LIST</h3>
                <Student listofstudent={this.state.list}/>
                <ApiDemo />
                <FormDemo deets={this.state.list}/>
                <NavBar/>
                <Content/>
            </div>
        )
    }



}