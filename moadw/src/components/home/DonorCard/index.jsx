import React from "react";
import './donorcard-module.css'
import avatar from '../../../assets/card/avatar.svg'
import icon_arrow from '../../../assets/card/icon-arrow.svg'

export default function DonorCard({ donor_name, total, img }) {
    return (


        <div className="donor-card">
            <div className="grounded-radiants">
                <div className="container-content">
                    <div className="avatar-card">
                         <img src={avatar} alt={avatar} />
                    </div>
                        <p className="donor-name" >{donor_name}</p>
                   
                        <div className="section-divider"/>

                    <div className="donations-content">
                        <p className="total-donations" >
                            <a > Total Donations </a>
                            <br />
                                <a className="number-donations">{total}</a>
                        </p>
                       
                    </div>
                    <button className="detail-button">
                        <img src={icon_arrow} alt={icon_arrow} />
                    </button>

                </div>
            </div>
        </div>

    )
}