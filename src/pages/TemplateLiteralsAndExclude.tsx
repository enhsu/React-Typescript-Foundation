/**
 * 
 *  position value can be one of
 *  "left-top" | "center-top" | "right-top"
 *  "left-center" | "center" | "right-center"
 *  "left-bottom" | "center-bottom" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type PositioinType = {
    position: 
        | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
        | 'center'
}

function TemplateLiteralsAndExclude({ position }: PositioinType) {
    return (
        <div>
            <h1>Template Literals And Exclude</h1>
            <p>Position - { position }</p>
        </div>
    );
}

export default TemplateLiteralsAndExclude;