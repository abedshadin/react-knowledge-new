import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-5 max-w-7xl mx-auto border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="fgfdtdf" />
        </header>
    );
};

export default Header;

