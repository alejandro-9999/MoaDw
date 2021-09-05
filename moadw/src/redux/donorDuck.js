import axios from "axios";


//
let initialData = {
    fetching:false,
    array:[],
    have_detail:false,
    detail:{}

}

let URL = "https://moadw-challenge.herokuapp.com/api/";


// const 
let GET_DONORS =  "GET_DONORS";
let GET_DONORS_SUCCESS =  "GET_DONORS_SUCCESS";
let GET_DONORS_ERROR =  "GET_DONORS_ERROR";

let GET_DONOR =  "GET_DONOR";
let GET_DONOR_SUCCESS =  "GET_DONOR_SUCCESS";
let GET_DONOR_ERROR =  "GET_DONOR_ERROR";




//reducer 
export default function reducer(state=initialData,action){
    switch(action.type){

        case GET_DONOR:
            return {...state,fetching:true}
        case GET_DONOR_SUCCESS:
            return {...state,detail:action.payload,fetching:false,have_detail:true}
        case GET_DONOR_ERROR:
            return {...state,fetching:false,error:action.payload,have_detail:false}
        
        case GET_DONORS:
            return {...state,fetching:true}
        case GET_DONORS_SUCCESS:
            return {...state,array:action.payload,fetching:false}
        case GET_DONORS_ERROR:
            return {...state,fetching:false,error:action.payload}
        default:
            return state;
    }
}


///actions 
export let getDonorsAction = (skip,limit,sort) => (dispatch,getState) => {
   
    let QUERY = URL+"find-many?"+"skip="+skip+"&limit="+limit+"&sort="+sort;
    dispatch({
        type:GET_DONORS
    })

    return axios.get(QUERY)
        .then(res=>{
            
            dispatch({
                type:GET_DONORS_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
           
            dispatch({
                type:GET_DONORS_ERROR,
                payload:"ERROR"
            })
        })
}



export let getDonorAction = (id) => (dispatch,getState) => {
   
    let QUERY = URL+"find-one?id="+id;
    dispatch({
        type:GET_DONOR
    })

    return axios.get(QUERY)
        .then(res=>{
            
            dispatch({
                type:GET_DONOR_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
           
            dispatch({
                type:GET_DONOR_ERROR,
                payload:"ERROR"
            })
        })
}

