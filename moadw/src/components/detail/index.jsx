import React,{useEffect,useState} from "react";
import logo from '../../assets/home/Logo.svg';
import icon_arrow from '../../assets/card/icon-arrow.svg';
import avatar from '../../assets/card/avatar.svg'
import { useHistory, useParams } from "react-router";
import './detail-module.css';

export default function Detail() {
    
    
    
    const {id} = useParams();

    const[index] =  useState(id);

    let history = useHistory();

    useEffect(() => {
        console.log(index);
    }, [index]);

    const redirect = () => {
        history.push('/')
    }

    
    
    return (
        <div className="detail_home" >
            <button className="back-button"   onClick={redirect}>
                <img src={icon_arrow} alt={icon_arrow}/>
            </button>
            <div className="title">

                <img src={logo} className="logo" alt={logo} />
                <div className="divider" />
            </div>
            <div className="detail-doner-container">
                <h1 className="doner-detail-name">Lorrie Cardenosa</h1>
                <div className="doner-detail-avatar">
                    <img src={avatar} alt={avatar} />
                </div>
                <div className="doner-detail-description">
                    <p>Vogt-Koyanagi syndrome, unspecified eye</p>
                </div>
            </div>
            <div className="donation-container">
                <div className="donor-card">
                    <div className="grounded-radiants">
                        <div className="container-dontaion-detail">
                            <div className="doner-detail-number">
                                <p>
                                    <span className="data-description">Total Donations</span>
                                    
                                    <span className="data-number">143</span>
                                </p>
                            </div>
                            <div className="detail-divider"/>
                            <div className="doner-detail-amount">
                                <p>
                                    <span className="data-description">Total DonatED</span>
                                    
                                    <span className="data-number" >$382,883.03</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="buton-container">
                <button>MAKE A DONATION</button>
            </div>
        </div>

    );
}