import Text from '../components/polymorphic-component/text'

function PolymorphicComponent() {
    return (
        <div>
            <h1>Polymorphic Component</h1>
            <Text as="h2" size='lg' color='primary'>Heading</Text>
            <Text as="label" htmlFor="the-input">label</Text>
        </div>
    );
}

export default PolymorphicComponent;