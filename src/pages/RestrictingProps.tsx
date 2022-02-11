type RandomNumberType = {
    value: number;
}

type isPositiveType = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}
type isNegativeType = RandomNumberType & {
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}
type isZeroType = RandomNumberType & {
    isZero: boolean;
    isPositive?: never;
    isNegative?: never;
}

type RestrictingPropsType = isPositiveType | isNegativeType | isZeroType

function RestrictingProps({
    value,
    isPositive,
    isNegative,
    isZero
}: RestrictingPropsType) {
    return (
        <div>
            <h2>Restricting Props</h2>
            <p>
                value - { value },{' '}
                {isPositive && 'positive'}
                {isNegative && 'negative'}
                {isZero && 'zero'}
            </p>
        </div>
    );
}

export default RestrictingProps;