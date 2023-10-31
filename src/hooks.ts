import { useCallback, useState, useEffect } from "react";
import { randomItems } from "./helpers";
import { colors } from "./data";
import { useStore } from "./context";

export function useGameplay  () {
    
    const [colorOptions] = useState<string[]>(randomItems(colors, 3))
    const [correctColor] = useState<string>(randomItems(colorOptions, 1)[0]);

    useEffect(() => {
        
    }, [])

    return {
        colorOptions,
        correctColor
    };

}

export function useButtonOption (color: string) {

    const { correctColor } = useStore()!;

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        console.log (color, correctColor)
        if (color == correctColor) {
            alert("Correct")
        } else {
            alert ("Wrong")
        }
    }, [])

    return {
        handleClick
    }
}