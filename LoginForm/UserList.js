import "./UserList.css"
import UserListItem from "./UserListItem";

function UserList({user}){

    return(
        <div className="UserList">
            <h1>UserList</h1>
            <div className="ListContent">
            <div className="code">code</div>
                <div className="name">name</div>
                <div className="id">id</div>
                <div className="pw">pw</div>
                <div className="age">age</div>
                <div className="gender">gender</div>
                </div>
            {user.map((u)=> (<UserListItem {...u}/> ))}
        </div>
    )
}

export default UserList;