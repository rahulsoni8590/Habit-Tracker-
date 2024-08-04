
function habitReducer(state,action){
    switch(action.type){
        case "ADDNEW":{
            return{
                ...state,
                activity:[...state.activity, action.payload]
            }
        }
        case "CHANGESTATUS":{
            const idx = state.activity.findIndex((type)=>type.activityType===action.payload.type)
            switch(state.activity[idx].track[action.payload.index][1]){
                case "Done":
                    state.activity[idx].track[action.payload.index][1] = "Not-Done"
                    return {
                        ...state
                    }
                case "Not-Done":
                    state.activity[idx].track[action.payload.index][1] = "Pending"
                    return {
                        ...state
                    }
                case "Pending":
                    state.activity[idx].track[action.payload.index][1] = "Done"
                    return {
                        ...state
                    }
                default:{
                    return{
                        ...state
                    }
                }
            }
    }
    case "COUNTSCORE":
        return{
            ...state
        }
    default:{
        return{
            ...state
        }
    }
}
}
export default habitReducer;