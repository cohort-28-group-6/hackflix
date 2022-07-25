// import our old friend, the Link Component
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            {/* Wrap the h1 in a router link which navigates back to the homepage */}
            <Link to="/">
                <h1>Hackflix</h1>
            
            </Link>
        </header>

    )
}

export default Header