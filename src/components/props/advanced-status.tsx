type AdvancedStatusType = {
    status: 'loading' | 'success' | 'error'
}

function AdvancedStatus({ status }: AdvancedStatusType) {
    let message;
    switch (status) {
        case 'loading':
            message = 'Loading...'
            break;
        case 'success':
            message = 'Data fetched successfully'
            break;
        case 'error':
            message = 'Error fetching data'
            break;
    }
    
    return (
        <div>
            <h2>Advanced props - status</h2>
            <p>Status - { message }</p>
        </div>
    );
}

export default AdvancedStatus;