import Header from "../components/Header";
import React, {useState} from "react";
import {ListController} from "../controller/ListController"
import {Shoppinglist} from "../components/Shoppinglist";

export default function MainPage(){

    //erstellt und aktualisiert Liste der Listen
    const [list, setList] = useState([""]);

    const updateList = (title:string) => {
        //erstellt Kopie der Liste und
        //fügt neue Liste direkt hinzu
        const aktuellerStand = [...list, title];
        //setzt Liste auf aktuellem Stand
        setList(aktuellerStand)
    }

    return(
        <div className="MainPage">
            <Header title="Einkaufsliste"/>
            <ListController updateList={updateList}  />
            <Shoppinglist listen={list}/>
        </div>
    )
}