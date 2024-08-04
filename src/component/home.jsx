
import NewHabit from "./addHabit";
import { useEffect, useState } from "react";
import { useHabit } from "../context/habitContext";
import Button from 'react-bootstrap/Button';

function Home() {
    const [modalShow, setModalShow] = useState(false);
    const { state } = useHabit()
    const [quote, setQuote] = useState(null);

    useEffect(() => {
       
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then((data) => setQuote(data));
         
        
    }, [])

    return (
        <>
            <div className="home px-4 py-1 d-flex justify-content-center">
                <div className=" col-6 d-flex flex-column justify-content-around align-items-center">

                    <div className="col-8 d-flex flex-column justify-content-center text-light p-4 rounded quote">
                    {quote?
                    <>
                    <h2>{quote.quote}</h2>
                    <p className="align-self-end">-{quote.author}</p>
                    </>:
                    null}
                        
                    </div>

                    <div className=" col-4 d-flex flex-column justify-content-center">
                        <Button variant="danger" onClick={() => setModalShow(true)}>
                            Add Habit
                        </Button>
                        <NewHabit
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>

                </div>

                <div className="border rounded innerleft text-center d-flex flex-column align-items-center">
                    <h3 className="text-center py-4">Habits</h3>
                    <hr className="col-10"></hr>
                    {state.activity.map((act, idx) => {
                        return (
                            <div key={idx} className="act px-3 rounded m-1 col-10 d-flex justify-content-between align-items-center" >
                                <h4 >{act.activityType}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;