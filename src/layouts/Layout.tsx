import { Link, Outlet } from 'react-router-dom';
import './Layout.module.css';
import { NavBar } from './navbar/NavBar';

export function Layout() {
    return <>
        <div className="container">
            <NavBar></NavBar>
            <div className="row mt-4">
                <div className="col-md-12">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </>
}