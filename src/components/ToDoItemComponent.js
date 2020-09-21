import React, { Component } from "react";

export default class ToDoItem extends Component{
    render(){
        const {title}=this.props;
    return (
        <React.Fragment>
        <li className="list-group-item text-capitalize d-flex
        justify-content-between my-2">

        <h6>{title}</h6>    
          <div className="todo-icon">
           
            <span className="mx-2 text-success">
                <i className="fas fa-pen"/>
            </span>

            <span className="mx-2 text-danger">
                <i className="fas fa-trash"/>
            </span>
        </div>
        </li>
        </React.Fragment>
      
        );
       
}
}