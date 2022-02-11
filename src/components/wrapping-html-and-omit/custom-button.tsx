type ButtonType = {
    variant: 'primary' | 'secondary';
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

function CustomButton({ variant, children, ...restProps}: ButtonType) {
    return (
        <>
            <h2>Custom Button</h2>
            <button className={`class-with-${variant}`} {...restProps}>
                { children }
            </button>
        </>
    );
}

export default CustomButton;