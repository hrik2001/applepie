import Link from "next/link";

const NotFound = () => {

    return ( 
        <div className="not-found">
            <h1>Damnnnn...</h1>
            <p>The page you are looking for does not exist :(</p>
            <p>Wanna head <Link href={"/"}><a className="link404">back</a></Link>?</p>
        </div>
     );
}
 
export default NotFound;