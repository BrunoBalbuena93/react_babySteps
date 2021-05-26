import {useState} from 'react';

const useInput = (validator) => {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);

    const valueIsValid = validator(value);
    const hasError = !valueIsValid && touched;
    
    const valueChange = event => {
        setValue(event.target.value);
    };

    const inputBlur = event => {
        setTouched(true);
    };

    const reset = () => {
        setTouched(false);
        setValue('');
    }


    return {
        value: value, isValid: valueIsValid, hasError: hasError, valueChange, inputBlur, reset
    };
};

export default useInput;    