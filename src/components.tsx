import { useButtonOption } from "./hooks"

export const ColorBox = ({ color }: { color: string }): JSX.Element => {
    return (
        <div style={{ height: "200px", width: "200px", backgroundColor: color, margin: "50px auto"}} />
    );
}

const ButtonOption = ({ color }: { color: string; }): JSX.Element => {
    const { handleClick } = useButtonOption (color);
    return (
        <button style={{ backgroundColor: color, fontSize: "18px", padding: "5px" }} onClick={handleClick}>{ color }</button>
    )
}

export const ColorOptions = ({ colors }: { colors: string[] }): JSX.Element => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", padding: "30px" }}>
        {
            colors.map((color) => (
                <ButtonOption color={color} key={color} />
            ))
        }
        </div>
    );
}
