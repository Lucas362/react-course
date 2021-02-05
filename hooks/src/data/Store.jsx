import React, { useState } from 'react';

const initialState = {
    number: 1234,
    text: 'Contex API + Hooks'
}

export const AppContext = React.createContext(initialState);

const Store = props => {
    const [state, setState] = useState(initialState);

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: n => updateState('text', n),
        }}>
            <div>
                {props.children}
            </div>
        </AppContext.Provider>
    )
};

export default Store;