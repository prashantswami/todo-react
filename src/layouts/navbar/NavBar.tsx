import { Link } from "react-router-dom";

export function NavBar() {
return <>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Job Posting</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/todo-list">To do</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to="/jobs">Jobs</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
}