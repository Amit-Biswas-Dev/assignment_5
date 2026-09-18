

const Nav = () => {
    return (
        <div className=' flex items-center justify-between container mx-auto py-4 positon-fixed'>
            <div className='flex justify-between gap-1.5'>
                <h4 className='bg-pink-500 px-2 py-1 font-bold rounded-2xl'>DS</h4>
                <h3 className='font-bold'>Dev Stack</h3>
            </div>

            <div className='flex justify-between gap-1.5 items-center'>
                <p>Home</p>
                <p>Technologies</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contacts</p>
            </div>

            <div className='flex justify-between gap-1.5 rounded-2xl '>
                <button>Sign In</button>
                <button className='border-s-olive-50 rounded-2xl  items-center px-4 py-2 bg-pink-500'>Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;