import ThemContextProvider from "../../context/themeContext";
import UseContextBasicChildren from "./useContext-basic-children";

function UseContextBasic() {
    return (
        <div>
            <h2>useContext - basic</h2>
            <p>Passing theme to children component</p>
            <ThemContextProvider>
                <UseContextBasicChildren />
            </ThemContextProvider>
        </div>
    );
}

export default UseContextBasic;