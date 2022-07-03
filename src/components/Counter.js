import React from "react";



function Counter ({fruitName}) {
    let [valueCounter, setValueCounter] = React.useState(0);

    return (
        <>
            <article className="fruit-counters">
                <label>{fruitName}</label>

                <button type="button"
                        onClick={() =>setValueCounter(valueCounter - 1)}
                        disabled={valueCounter === 0}
                > - </button>
                {valueCounter}
                <button type="button"
                        onClick= {() => setValueCounter(valueCounter + 1)}
                        disabled={valueCounter === 10}
                >+</button>

            <button type="reset"
                    onClick={() =>setValueCounter(valueCounter = 0)}
            >Reset</button>
        </article>
            </>
    );
}

export default Counter;