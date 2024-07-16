import { useRef, useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import Registration from "./Registration";
import UserList from "./UserList";
import User from "./User";

function Login(){
    const [user, setUser] = useState(User);
    const codeRef = useRef(1002);
    const onCreate = (name, id, pw, age, gender) => {
        const newUser = {
            code:codeRef.current, name, id, pw, age, gender
        }
        setUser([...user, newUser]);
        codeRef.current += 1;
    }
    return (
        <div className="Login">
            <h1>Login</h1>
            <LoginForm />
            <Registration onCreate={onCreate}/> <br/>
            <UserList user={user}/>
            
        </div>
    )
}

export default Login;