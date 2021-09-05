import React from "react";
import './home-module.css';
import logo from '../../assets/home/Logo.svg'
import SelectOrder from "./SelectOrder/indes";
import DonorCard from "./DonorCard";

export default function home() {
    return (
        <div className="desktop_home" >
            <div className="title">

                <img src={logo} className="logo" alt={logo} />
                <div className="divider" />
            </div>


            <div className="container-select">
                <h1>Donations</h1>

                <SelectOrder />

            </div>

            <div className="cards-container">
                <DonorCard donor_name="Lorrie Cardenosa" total={143} />
                <DonorCard donor_name="Lorrie Cardenosa" total={143} />
                <DonorCard donor_name="Lorrie Cardenosa" total={143} />
            </div>
            <div className="actions-container">
                <button className="prev-button">Prev.</button>
                <button className="next-button">Next</button>
            </div>
        </div>
    )
}