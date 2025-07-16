import { Link, Outlet } from 'react-router-dom';
import ascensionLogo from '../../assets/images/ascension-logo.svg';
import deloitteLogo from '../../assets/images/deloitte-logo.svg';
export const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-light bg-light justify-content-around">
                <Link className="navbar-brand" to="/">
                    <img src={ascensionLogo} width="200" height="100" alt="" />
                </Link>
                <div className="navbar-text">
                    <h1>Ascension Tools</h1>
                </div>
                <Link className="navbar-brand" to="/">
                    <img src={deloitteLogo} width="200" height="100" alt="" />
                </Link>
            </nav>
            <Outlet />
        </>
    )
}