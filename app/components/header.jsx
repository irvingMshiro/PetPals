import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Header = async () => {
    const user = await currentUser();

    return (
        <nav className='flex items-center justify-between px-6 py-4 bg-[#9E794F]'>
        <div className='flex items-center'>
            <Link href='/'>
            <div className='text-lg font-bold text-white'>
                PetPals
            </div>
            </Link>
        </div>
        <div className="text-white flex items-center">
            {!user && (
                <>
                <Link href='sign-in' className="text-white hover:text-gray-300 mr-4">
                Sign in 
                </Link>
                <Link href='sign-up' className="text-white hover:text-gray-300 mr-4">
                    Sign up 
                </Link>
                </>
            )}
            {user && (
                <Link href='profile' className='text-white hover:text-gray-300 mr-4'>
                    Profile
                </Link>
            )}
            <div className='ml-auto'>
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
        </nav>
    );
};

export default Header;