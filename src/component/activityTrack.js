import styled from "styled-components"
import { useHabit } from "../context/habitContext"
import { toast } from 'react-toastify';

export default function Activity (props) {
    const {dispatch} = useHabit();
    const {activity, currAct, idx} = props

    const changeStatus = (activity, idx)=>{
        dispatch({type:"CHANGESTATUS", payload:{type:activity.activityType,index:idx }})
        toast.success("status changed", { delay: 100 })
    }

    const getBackgroundcolor = (status)=>{
        switch (status){
            case "Not-Done": 
            return "#DC3545";
            case "Pending":
                return "#6C757D";
            case "Done":
                return"#198754";
            default:
                return "white";
        }
    }

    const Style = styled.div`
    background:${
        (props)=>getBackgroundcolor(props.activitystate)
    }
    `
    return (
        <Style onClick={() => changeStatus(currAct, idx)} activitystate={activity[1]} className="week col-3 text-light m-3 p-1 d-flex align-items-center justify-content-center">
            <h4>{activity[0]}</h4>
        </Style>
    )
}