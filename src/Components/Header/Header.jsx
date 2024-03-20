import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            
            <nav className="space-x-5 text-blue-700">
                <span className="text-green-600">My Webstie</span>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/users'>Users</Link>
                
            </nav>
        </div>
    );
};

export default Header;