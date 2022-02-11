type StyleType = {
    styles: React.CSSProperties;
}

function Style({ styles }: StyleType) {
    return (
        <div>
            <h2>Style props</h2>
            <div style={styles}></div>
        </div>
    );
}

export default Style;