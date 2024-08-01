import classes from './Input.module.scss'
import { FC, useEffect, useRef, useState } from "react";

interface InputProps {
    children: string
    placeholder: string,
    helperText?: string,
    validationFunc: (value: string) => boolean;
}

const Input: FC<InputProps> = ({validationFunc, placeholder, helperText, children}) => {

    const [value, setValue] = useState('');
    const [isAgree, setIsAgree] = useState(null);
    const inputRef = useRef(null)

    useEffect(() => {
        const input = inputRef.current
        if (value) {
            if (validationFunc(value)) {
                input?.classList.remove(classes.checked_disagree);
                input?.classList.add(classes.checked_agree);
                setIsAgree(true)
            } else if (!validationFunc(value)) {
                input?.classList.remove(classes.checked_agree);
                input?.classList.add(classes.checked_disagree);
                setIsAgree(false)
            } 
        } else {
            input?.classList.remove(classes.checked_agree, classes.checked_disagree);
            setIsAgree(null)
        }
    }, [value]);

    return (
        <div className={classes.container}>
            <div className={classes.entryarea}>
                <input ref={inputRef} value={value} onChange={(e) => setValue(String(e.target.value))} className={classes.input} placeholder={placeholder}></input>
                <div className={classes.label}>{children}</div>
                {helperText && <p className={classes.helperText}>{helperText}</p>}
                {isAgree === false && <div className={`${classes.ellipse} ${classes.danger_ellipse}`}></div>}
                {isAgree === true && <div className={`${classes.ellipse} ${classes.agree_ellipse}`}></div>}
            </div>
        </div>
    )
}

export default Input;