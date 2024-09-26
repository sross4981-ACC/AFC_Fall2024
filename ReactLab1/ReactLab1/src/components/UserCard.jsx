const UserCard = ({name, age}) => {
    return(
        <div style={{marginBottom: '10px', border: '3px solid', padding: '10px'}}>
            <h2>{name}</h2>
            <p>{age}</p>
            </div>
    )
}

export default UserCard;