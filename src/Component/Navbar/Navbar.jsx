import { NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-10 w-9/12 mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Book Vibe</h2>
      </div>
      <div className="text-xl justify-between">
        <NavLink  className='mr-10 border-2 border-green-500 rounded-lg px-4 py-3' to='/home'>Home</NavLink>
        
        <NavLink className='mr-10' to='/listedbooks'>Listed Books</NavLink>
        <NavLink className='mr-10' to='/pagestoread'>Pages to Read</NavLink>
        
      </div>
      <div className="flex gap-5 text-white">
        <div className="text-xl bg-[#23BE0A] px-5 py-3 rounded-lg">
          <button type="button">Sign In</button>
        </div>
        <div className="text-xl bg-[#59C6D2] px-5 py-3 rounded-lg">
          <button type="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
