import Header from "./Header";
import React from "react";

interface ShoppinglistProps{

    listen:string[]
}

export function Shoppinglist(props:ShoppinglistProps){
    return(<div>
            <Header title="Liste"/>
            <ul>{props.listen.map((value, index) =>
                (<li key={index}>
                    {props.listen}
                </li>)
            )}
            </ul>

        </div>
    )
}