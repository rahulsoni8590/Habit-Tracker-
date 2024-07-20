import NewHabit from "./addHabit";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Navbar() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <nav className="topbar rounded col-10 mt-4 navbar navbar-expand-lg">
                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <h2 className="nav-link text-light">Habit Tracker</h2>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Add Habit
                        </Button>
                        <NewHabit
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </nav>
        </>
    )

    // https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png
}

