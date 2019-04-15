import React from 'react';
const Form= props => {

    return (
       <form onSubmit={props.submit} >
    <input 
    type="text"
    placeholder="Wpisz nazwe miasta"
    onChange={props.changer}
    value={props.text}
    />
<button>Sprawdź pogodę</button>


       </form>
        )
}
export default Form