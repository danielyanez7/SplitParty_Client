import { createContext } from "react"

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    return (
        <ThemeContext.Provider value={"dark"}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }

// className = {`custom-navbar px-3 theme-${value}`}