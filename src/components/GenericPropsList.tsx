type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void
}

const GenericPropsList = <T extends { id: string, val: string }>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            <ul>
                { items.map(item => {
                    return (
                        <li key={item.id} onClick={() => onClick(item)}>{ item.val  }</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default GenericPropsList;