import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={100} height={100} />
            </div>
            <Link href={"/"}><a>Home</a></Link>
            <Link href={"/about"}><a>About</a></Link>
            <Link href={"/auth/login"}><a>Login/Signup</a></Link>
        </nav>
    );
}

export default Navbar;