import Link from "next/link";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <h3>Not a user? <Link href={"/auth/signUp"}>Sign Up</Link></h3>
        </div>
    );
}
 
export default Login;