import GenericPropsList from "../components/GenericPropsList";

const list_1 = [
    { id: '1', val: '1'},
    { id: '2', val: '2'},
    { id: '3', val: '3'},
]

const list_2 = [
    { id: '1', val: 'a', name: 'z'},
    { id: '2', val: 'b', name: 'f'},
    { id: '3', val: 'c', name: 'r'},
]

function GenericProps() {
    return (
        <div>
            <h1>Generic Props</h1>
            <GenericPropsList items={list_1} onClick={(item) => console.log(item)} />
            <GenericPropsList items={list_2} onClick={(item) => console.log(item.name)} />
        </div>
    );
}

export default GenericProps;