type BasicPrimitiveValueProps = {
    name: string;
    messageCount: number;
    isLogin: boolean;
}

function BasicPrimitiveValue({ name, messageCount, isLogin }: BasicPrimitiveValueProps) {
    return (
        <div>
            <h2>Basic props - primitive value</h2>
            {
                isLogin ? (
                    <p>Hello { name }! you have { messageCount } unread message{ messageCount === 1 ? '' : 's' }</p>
                ) : (
                    <p>Hello Guest!</p>
                )
            }
        </div>
    );
}

export default BasicPrimitiveValue;