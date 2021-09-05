import React from "react";
import './selectorder-module.css';


export default function SelectOrder({setSort}) {


    let _handleChange = (event) => {
        setSort(event.target.value);
    }
    
    return (
        <select className="select-order" onChange={_handleChange}>
            <option value="donations">Sort By Donations</option>
            <option value="total">Sort By Total</option>
            <option value="first_name">Sort By First Name</option>
            <option value="last_name">Sort By Last Name</option>
        </select>
    );
}