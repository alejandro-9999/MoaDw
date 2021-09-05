import React,{useEffect,useState} from "react";
import logo from '../../assets/home/Logo.svg';
import icon_arrow from '../../assets/card/icon-arrow.svg';
import { useHistory, useParams } from "react-router";
import './detail-module.css';
import { connect } from "react-redux";
import { getDonorAction } from "../../redux/donorDuck";


function Detail({fetching, detail,getDonorAction}) {
    
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    
    });
    
    const {id} = useParams();

    const[index] =  useState(id);

    const prototype_donor = Object.freeze({first_name:"",last_name:"",total:0,donations:0, description:"",image:""});
    const[Donor,setDonor] = useState(prototype_donor);

    let history = useHistory();

    useEffect(() => {
        getDonorAction(index);
        
    }, [index,getDonorAction]);

    useEffect(() => {
        
        setDonor(detail);
        
    }, [detail]);
    
    const redirect = () => {
        history.push('/')
    }


    const loading = (
        <div className="content-spinner">
            <div className="spinner"></div>
        </div>
    );

    const content = (
        <>
             <div className="detail-doner-container">
                <h1 className="doner-detail-name">{Donor.first_name +" "+Donor.last_name}</h1>
                <div className="doner-detail-avatar">
                    <img src={Donor.image} alt={Donor.image} />
                </div>
                <div className="doner-detail-description">
                    <p>{Donor.description}</p>
                </div>
            </div>
            <div className="donation-container">
                <div className="donor-card">
                    <div className="grounded-radiants">
                        <div className="container-dontaion-detail">
                            <div className="doner-detail-number">
                                <p>
                                    <span className="data-description">Total Donations</span>
                                    
                                    <span className="data-number">{Donor.donations}</span>
                                </p>
                            </div>
                            <div className="detail-divider"/>
                            <div className="doner-detail-amount">
                                <p>
                                    <span className="data-description">Total DonatED</span>
                                    
                                    <span className="data-number" >{formatter.format(Donor.total)}</span>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
    
    return (
        <div className="detail_home" >
            <button className="back-button"   onClick={redirect}>
                <img src={icon_arrow} alt={icon_arrow}/>
            </button>
            <div className="title">

                <img src={logo} className="logo" alt={logo} />
                <div className="divider" />
            </div>
             {fetching ? (loading) : (content)}
            <div className="buton-container">
                <button>MAKE A DONATION</button>
            </div>
        </div>

    );
}


function mapState({ donor: { fetching, detail } }) {
    return {
        fetching,
        detail,
    }
}

export default connect(mapState, { getDonorAction })(Detail);