import UserContextProvider from "../../context/userContext";
import UseContextFutureValueChildren from "./useContext-future-value-children";

function UseContextFutureValue() {
    return (
        <div>
            <UserContextProvider>
                <UseContextFutureValueChildren />
            </UserContextProvider>
        </div>
    );
}

export default UseContextFutureValue;