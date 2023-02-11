import { Link, Outlet,useLocation } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { SiLichess } from 'react-icons/si'
import { data } from '../../data';
import { useGlobalContext } from '../context';


const items = data;
const code_verifier = "3e2727957a1bd9f47b11ff347fca362b6060941decb4";
const state = "vH7~HZZCClkjHKdoeoNwWzlhm8g8.E_Z&code_challenge=1SF5UEwYplIjmAwHUwcitzp9qz8zv98uYflt-tBmwLc";
const redirectUrl = `https://lichess.org/oauth?response_type=code&client_id=primechess&redirect_uri=http://localhost:5173/auth&scope=email:read challenge:read challenge:write tournament:write team:write &state=${state}&code_challenge_method=S256&code_verifier=${code_verifier}`;

const Header = () => {

    const { handleOnSelect ,setSelectedUser,setIsModalOpen,user} = useGlobalContext();
    const location = useLocation();
    localStorage.setItem("state", state);
    localStorage.setItem("code_verifier", code_verifier);
 

    return (
      <>
      <header className='bg-[rgba(55,65,81,0.5)] sticky top-0 z-50 backdrop-blur-[15px]'>
          <div className='max-w-[1440px] mx-auto flex justify-between items-center p-3'>
              <div><Link to="/"><h1 className='text-3xl font-bold text-yellow-300'>Chesslers</h1></Link></div>
              <div className='flex justify-end space-x-12 items-center'>
                  {(location.pathname==="/")&&<div className='w-[300px]'>
                    <ReactSearchAutocomplete items={items} placeholder="search" styling={{ borderRadius: "6px" }} onClear={() => { setSelectedUser(""); setIsModalOpen(false); }} onSelect={handleOnSelect} />
                  </div>}
                   {user && <Link to="/challenges"><span className='text-white hover:underline'>Challenges</span></Link>}
                   <Link to="/leaderboard"><span className='text-white hover:underline'>Leaderboard</span></Link>
                  {user && <Link to="/tournaments"><span className='text-white hover:underline'>Tournaments</span></Link>}
                  {user ? <Link to="/home"><img src={user.avatar} className="h-[40px] w-[40px] cursor-pointer" /></Link>: <button onClick={() => window.open(redirectUrl)} className='flex justify-center items-center space-x-3 bg-yellow-300 hover:bg-yellow-200 py-3 px-5 rounded-md '><span>Login with</span><SiLichess className='h-5 w-5' /></button>}
              </div>
          </div>
        </header>
         <Outlet/>    
        </>
  )
}

export default Header;