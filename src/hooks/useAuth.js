import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export default function useAuth() {
    //automatically call the backend, send JWT to validate and get backend to send back username
    
    return useContext(AuthContext);
}