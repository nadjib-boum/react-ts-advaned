import { createContext, useContext } from "react";
import { randomItems } from "./helpers";


type Store = {
    correctColor: string;
}

const defaultData: Store = {
    correctColor: ""
}

const StoreContext = createContext<Store | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [ colorOptions, setColorOptions ] = useState<string[]>(randomItems(colors, 3))
    const [ correctColor, setCorrectColor ] = useState<string>()

    return (
        <StoreContext.Provider value={defaultData}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => {
    return useContext(StoreContext);
}