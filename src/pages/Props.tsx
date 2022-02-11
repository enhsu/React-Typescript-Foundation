import { useState } from "react";
import AdvancedChildren from "../components/props/advanced-children";
import AdvancedOptional from "../components/props/advanced-optional";
import AdvancedStatus from "../components/props/advanced-status";
import BasicArray from "../components/props/basic-array";
import BasicObject from "../components/props/basic-object"
import BasicPrimitiveValue from "../components/props/basic-primitive-value";
import EventButton from "../components/props/event-button";
import EventInput from "../components/props/event-input";
import Style from "../components/props/style";

function Props() {
    const objName = { first: 'Red', last: 'Panda' }
    const arrNames = [
        {
            id: '1',
            first: 'firstname1',
            last: 'lastname1'
        },
        {
            id: '2',
            first: 'firstname2',
            last: 'lastname2'
        },
        {
            id: '3',
            first: 'firstname3',
            last: 'lastname3'
        }
    ]
    const [inputVal, setInputVal] = useState('')

    return (
        <div>
            <h1>Props</h1>
            <BasicPrimitiveValue name="Redpanda" messageCount={20} isLogin={true} />
            <BasicObject name={objName} />
            <BasicArray names={arrNames} />
            <AdvancedStatus status='success' />
            <AdvancedChildren>
                <p>A react children</p>
            </AdvancedChildren>
            <AdvancedOptional name="RedPanda" />
            <EventButton handleClick={(e, id) => alert(`button clicked, id: ${id}`)} />
            <EventInput value={inputVal} handleChange={(e) => setInputVal(e.target.value)} />
            <Style styles={{ width: '10px', height: '10px', border: '1px solid black'}} />
        </div>
    );
}

export default Props;