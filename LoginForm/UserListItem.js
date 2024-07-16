import "./UserList.css"

function UserListItem({code, name, id, pw, age, gender}){

    return(
        <div className="UserListItem">
            <div className="ListItem">
                <div className="code">{code}</div>
                <div className="name">{name}</div>
                <div className="id">{id}</div>
                <div className="pw">{pw}</div>
                <div className="age">{age}</div>
                <div className="gender">{gender}</div>
            </div>
        </div>
    )
}

export default UserListItem;