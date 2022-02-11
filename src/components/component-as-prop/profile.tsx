export type ProfileProps = {
    name: string;
}

function Profile({ name }: ProfileProps) {
    return (
        <div>profile page, name - { name }</div>
    );
}

export default Profile;