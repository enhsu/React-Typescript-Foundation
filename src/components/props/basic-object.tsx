import { Name } from '../../types/Person.type'

type BasicObjectType = {
    name: Name
}

function BasicObject({ name }: BasicObjectType) {
    return (
        <div>
            <h2>Basic props - object</h2>
            <p>Hello { name.first } {name.last}</p>
        </div>
    );
}

export default BasicObject;