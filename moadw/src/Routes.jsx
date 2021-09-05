import React from "react";
import { Switch,Route } from "react-router-dom";
import home from "./components/home";
import Detail from "./components/detail";


export default function Router(){
    return(
        <Switch>
           <Route exact path="/" component={home} />
           <Route path="/detail" component={Detail} />
        </Switch>
    )
}

