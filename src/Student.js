import React from 'react'
import Studentlist from './Studentlist'

export default class Student extends React.Component {

    constructor(props) {
        super(props)

    }



    render() {
        let temp = this.props.listofstudent.map(i =>
            <Studentlist lists={i}
                key={i.id}
            />
        );


        return (
            <table>
              <thead>
                <th>ID</th>
                <th>NAME</th>
            </thead>
                <tbody>
                    {temp}
                </tbody>
            </table>
        );



    }

}