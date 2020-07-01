//import combinereducers
import { combineReducers} from "redux";

//import juniperAlgo
import juniper from "./juniperAlgo";

//import score
import score from "./score";

//combinereducers here
export default combineReducers({juniper, score});