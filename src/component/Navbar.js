import { Link } from "react-router-dom";


export default function Navbar() {

    return (
        <>
            <nav className="topbar rounded col-10 mt-4 navbar navbar-expand-lg">
                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={"/"} style={{ textDecoration: 'none' }}>
                                <h2 className="app nav-link text-light">Habit Tracker</h2>
                            </Link>
                        </li>
                    </ul>
                    <div className="col-4 d-flex flex-row justify-content-around">
                        <div className="my-2 my-lg-0">
                            <Link to={"/"}>
                                <button className="btn btn-primary">Home</button>
                            </Link>
                        </div>
                        <div className="my-2 my-lg-0">
                            <Link to={"activity"}>
                                <button className="btn btn-primary">Activity</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )

    // https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png
}

