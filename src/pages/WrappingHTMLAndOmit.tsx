import AnotherInput from "../components/wrapping-html-and-omit/another-input";
import CustomInput from "../components/wrapping-html-and-omit/custom-input";
import CustomButton from "../components/wrapping-html-and-omit/custom-button";

function WrappingHTMLAndOmit() {
    return (
        <div>
            <h1>Wrapping HTML and Omit</h1>
            <CustomButton variant="primary" onClick={() => console.log('button click')}>
                custom button children, string only
            </CustomButton>
            <br />
            <CustomInput className="custom-class-name" />
            <AnotherInput className="another-class-name" some-attribute="lalala" />
        </div>
    );
}

export default WrappingHTMLAndOmit;