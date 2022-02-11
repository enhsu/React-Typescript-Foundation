import { Name } from '../../types/Person.type'

type BasicArrayType = {
    names: Name[]
}

function BasicArray({ names }: BasicArrayType) {
    return (
        <div>
            <h2>Basic props - array</h2>
            <ul>
                {
                    names.map(name => (
                        <li key={name.id}>{name.first} {name.last}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BasicArray;