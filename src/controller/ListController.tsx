import {ChangeEvent, ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState} from "react";

interface ListControllerProps{
    updateList: (title:string) => void
}

export function ListController(props:ListControllerProps) {
    //sagt, dass value veränderbar ist
    const [value, setValue] = useState('');

    //nimmt die Eingabe und setzt diese auf value
    const handleChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.currentTarget.value);
    };

    //bei Klick auf erstellen mache Folgendes:
    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) => {
        //ruft updateList auf (in Mainpage)
        props.updateList(value)
        //leert value
        setValue("")
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Artikel:
                <input type="text"
                       value={value}
                       onChange={handleChange}
                />
            </label>
            <input type="submit" value="Hinzufügen" />
        </form>
    );
}
