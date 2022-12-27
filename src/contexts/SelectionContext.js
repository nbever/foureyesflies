import {createContext, useContext, useState} from 'react';

const SelectionContext = createContext();

export const SelectionContextProvider = ({children}) => {

    const [selection, setSelection] = useState();

    const value = {
        selection,
        setSelection
    };

    return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;

};

export const useSelection = () => {
    const context = useContext(SelectionContext);

    return context;
};