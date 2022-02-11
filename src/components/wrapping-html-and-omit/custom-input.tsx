type CustomInputProps = React.ComponentProps<'input'>

function CustomInput({ ...restProps }: CustomInputProps) {
    return (
        <>
        <h2>Custom Input</h2>
        <input {...restProps} />
        { Object.keys(restProps).map((key, idx) => {
            return (<p key={key}>key: {key}, value: {{...restProps}[key]}</p>)
        })}
        </>
    );
}

export default CustomInput;