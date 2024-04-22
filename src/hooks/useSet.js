import { useContext } from "react";
import SetContext from "../context/SetProvider";

export default function useSet() {    
    return useContext(SetContext);
}