import { useState } from "react"
import { useHabit } from "../context/habitContext"
import Activity from "./activityTrack"

export default function Allactivity() {
    const [currAct, setCurrActivity] = useState(null)
    const { state } = useHabit()

    return (
        <div className=" px-4 py-1 d-flex justify-content-center">

            <div className="border rounded innerleft text-center d-flex flex-column align-items-center">
                <h3 className="text-center py-4">Habits</h3>
                <hr className="col-10"></hr>
                {state.activity.map((act, idx) => {
                    return (
                        <div key={idx} onClick={() => setCurrActivity(act)} className="act px-3 rounded m-1 col-10 d-flex justify-content-between align-items-center" >
                            <h4 >{act.activityType}</h4>
                            <span>{currAct === act ? ">>" : null}</span>
                        </div>
                    )
                })}
            </div>

            <div className=" border rounded innerright text-center d-flex flex-column align-items-center">
                <h3 className="text-center py-3">Weekly View</h3>
                <div className=" col-4 d-flex justify-content-around">
                    <span className="text-success mx-2 font-weight-bold">Done</span>
                    <span className="mx-2 text-secondary font-weight-bold">Pending</span>
                    <span className="mx-2 text-danger font-weight-bold">Not-Done</span>
                </div>
                <hr className="col-10"></hr>
                <div className="d-flex flex-wrap m-1 p-1 justify-content-around">
                    {currAct === null ? <div>Select Habit from the List to view Status</div> :
                        currAct.track
                            .map((activity, idx) => {
                                return (
                                    <Activity key={idx} activity={activity} currAct={currAct} idx={idx} />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}
// {Object.keys(currAct)}