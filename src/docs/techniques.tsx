// @ts-nocheck

// ### Using HTML Attributes for the component
import { type ComponentProps } from "react";

export const Button = ({ ...props }): ComponentProps<"button"> => {
    return <button>click</button>
} 

// ### Override type helper

type OverrideType<ORIGINAL, OVERRIDED> = Omit<ORIGINAL, keyof OVERRIDED> & OVERRIDED;

// ### Extract types of a component

type ComponentType = ComponentProps<typeof MyButton>;

// typing useState return function

type ValType = {
    [key: string]: string
}

const Demo = () => {
    const [ val, setVal ] = useState<ValType>()
    useEffect (() => {
        setVal((state): ValType => ({}))
    }, [])
}