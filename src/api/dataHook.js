import {useEffect, useState, useRef} from 'react';

export const useData = (func) => {

    const fetched = useRef(false);
    const [results, setResults] = useState({results: []});

    useEffect(() => {

        if (fetched.current === true) {
            return;
        }

        const doIt = async () => {
            fetched.current = true;
            const reply = await func();
            setResults(reply);
        }

        doIt();
    }, []);

    return results;
};