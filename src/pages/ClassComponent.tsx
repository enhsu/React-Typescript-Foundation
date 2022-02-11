import * as React from 'react';

type ClassComponentProps = {
    message: string;
}
 
type ClassComponentState = {
    count: number;
}
 
class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() { 
        return (
            <div>
                <h1>Class Component</h1>
                <p>{ this.props.message }, count - { this.state.count }</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}
 
export default ClassComponent;