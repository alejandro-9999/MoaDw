import React,{useState,useEffect} from "react";
import './home-module.css';
import logo from '../../assets/home/Logo.svg'
import SelectOrder from "./SelectOrder/indes";
import DonorCard from "./DonorCard";
import { connect } from 'react-redux';
import { getDonorsAction } from "../../redux/donorDuck";

function Home({ fetching, array, getDonorsAction }) {

    
    
    const [Skip, setSkip] = useState(0);
    const [Sort, setSort] = useState("donations");

    useEffect(()=>{
        getDonorsAction(Skip,3,Sort);
    },[Skip,Sort,getDonorsAction])


    
    const NestSkip = () =>{
        setSkip(Skip+3);
    }
    const PrevSkip = () =>{
        setSkip(Skip-3);
    }

    const loading = (
        <div className="content-spinner">
            <div className="spinner"></div>
        </div>
    );


    const content = (
        <>

            <div className="container-select">
                <h1>Donations</h1>

                <SelectOrder  setSort={setSort}/>

            </div>

            <div className="cards-container">
               
               {
                   array.map((element,key)=>(
                    <DonorCard key={key} donor_name={element.first_name+" "+element.last_name} total={element.donations} image={element.image} index={element.id} />
                   ))
               }
            </div>
            <div className="actions-container">
                
                {Skip>0&&<button className="prev-button" onClick={PrevSkip} >Prev.</button>}
                <button className="next-button" onClick={NestSkip}>Next</button>
            </div>
        </>
    );


    return (
        <div className="desktop_home" >
            <div className="title">

                <img src={logo} className="logo" alt={logo} />
                <div className="divider" />
            </div>

            {fetching ? (loading) : (content)}

        </div>
    )
}



function mapState({ donor: { fetching, array } }) {
    return {
        fetching,
        array
    }
}

export default connect(mapState, { getDonorsAction })(Home);