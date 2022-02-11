import { useNavigate } from "react-router-dom";

function NoMatch() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>No Match Page</h1>
            <button onClick={() => navigate(-1)}>Go Previous Page</button>
        </div>
    );
}

export default NoMatch;