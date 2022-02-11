type AdvancedOptionalType = {
    name: string;
    messageCount?: number;
}

function AdvancedOptional({ name, messageCount = 0 }: AdvancedOptionalType) {
    return (
        <div>
            <h2>Advanced type - optional parameters</h2>
            <p>Hi { name }, you have { messageCount } unread message{ messageCount <= 1 ? '' : 's'}</p>
        </div>
    );
}

export default AdvancedOptional;