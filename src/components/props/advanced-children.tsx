type AdvancedChildrenType = {
    children: React.ReactNode
}

function AdvancedChildren({ children }: AdvancedChildrenType) {
    return (
        <div>
            <h2>Advanced props - children</h2>
            { children }
        </div>
    );
}

export default AdvancedChildren;