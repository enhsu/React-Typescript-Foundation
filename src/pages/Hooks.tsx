import UseContextBasic from "../components/hooks/useContext-basic";
import UseContextFutureValue from "../components/hooks/useContext-future-value";
import UseReducer from "../components/hooks/useReducer";
import UseRefHTMLElement from "../components/hooks/useRef-html-element";
import UseRefMutable from "../components/hooks/useRef-mutable";
import UseStateFutureValue from "../components/hooks/useState-future-value";
import UseStateTypeAssertion from "../components/hooks/useState-type-assertion";

function Hooks() {
    return (
        <div>
            <h1>Hooks</h1>
            <UseStateFutureValue />
            <UseStateTypeAssertion />
            <UseReducer />
            <UseContextBasic />
            <UseContextFutureValue />
            <UseRefHTMLElement />
            <UseRefMutable />
        </div>
    );
}

export default Hooks;