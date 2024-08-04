
import { createContext, useContext, useReducer } from "react"
import habitReducer from "./habitReducer";

const habitContext = createContext();

const useHabit = () => {
    const { state,
        createHabit,
        dispatch } = useContext(habitContext)
    return {
        state,
        createHabit,
        dispatch
    }
}

const initialState = {
    activity: [
        {
            "activityType": "walk",
            "count": 0,
            "track": [
                [
                    "Fri, 19 Jul 2024",
                    "Not-Done"

                ],
                [
                    "Sat, 20 Jul 2024",
                    "Pending"
                ],
                [
                    "Sun, 21 Jul 2024",
                    "Done"
                ],
                [
                    "Mon, 22 Jul 2024",
                    "Pending"
                ],
                [
                    "Tue, 23 Jul 2024",
                    "Not-Done"
                ],
                [
                    "Wed, 24 Jul 2024",
                    "Done"
                ],
                [
                    "Thu, 25 Jul 2024",
                    "Done"
                ]
            ],
            "startedOn": "2024-07-19T17:31:34.060Z"
        }
    ],
    err: []
}

function HabitContextProvider({ children }) {
    const [state, dispatch] = useReducer(habitReducer, initialState)

    const createHabit = (habit) => {

        let track = {}
        for (let i = 0; i >= -6; i--) {
            let currentDate = new Date(Date.now())
            currentDate.setDate(currentDate.getDate() + i)
            let nextDate = currentDate.toUTCString().slice(0, 16)
            track[nextDate] = "Not-Done";
        }
        track = Object.entries(track)
        const newHabit = { activityType: habit, count: 0, track, startedOn: new Date(Date.now()) }
        dispatch({ type: "ADDNEW", payload: newHabit })
    }

    return (
        <habitContext.Provider value={{
            state,
            createHabit,
            dispatch
        }}
        >
            {children}
        </habitContext.Provider>
    )

}


export { useHabit, HabitContextProvider }



// let now = Date.now();
// // Create a new Date object from the current timestamp
// let currentDate = new Date(now);
// // Add one day to the current date
// currentDate.setDate(currentDate.getDate() + 1);
// // Format the date to a readable string
// let nextDay = currentDate.toUTCString().slice(0, 16);
// console.log(nextDay);
