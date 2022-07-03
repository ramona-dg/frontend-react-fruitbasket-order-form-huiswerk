import React from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Counter className="fruit-counters" fruitName="🍓Aardbeien"/>
            <Counter className="fruit-counters" fruitName="🍌Bananen"/>
            <Counter className="fruit-counters" fruitName="🍎Appels"/>
            <Counter className="fruit-counters" fruitName="🥝Kiwi's"/>



        </>
    );
}

export default App;
