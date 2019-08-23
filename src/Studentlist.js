
import React, { Component } from 'react'

const Studentlist = props => {

    const id = props.lists.id;
    return (
        
          
            <tr key={id}>
                <td>  {id}</td>
                <td>{props.lists.name}</td>
            </tr>



       
    );


}
export default Studentlist