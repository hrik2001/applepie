import Link from "next/link";

const SignUp = () => {
    return ( 
        <div>
            <h1>Sign Up</h1>
            <h3>Already a user? <Link href={"/auth/login"}>Login</Link></h3>
        </div>
     );
}
 
export default SignUp;