import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <div className='hidden md:block bg-[#F0F5FF] p-2 rounded-xl w-full  lg:max-w-[38rem] h-11 md:flex items-center'>
            <SearchIcon />
            <input
                type="text"
                placeholder='Search for Products, Brands and More'
                className='outline-none bg-[#F0F5FF] h-full w-full ml-2'
            />
        </div>
    );
}

export default Search;
