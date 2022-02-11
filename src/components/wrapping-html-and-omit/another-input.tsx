import CustomInput from "./custom-input";

function AnotherInput(props: React.ComponentProps<typeof CustomInput>) {
    return (
        <>
            <h2>Another custom input</h2>
            <input {...props} />
            {
                Object.keys(props).map(key => {
                    return (<p key={key}>key: {key}, value: {{...props}[key]}</p>)
                })
            }
        </>
    );
}

export default AnotherInput;