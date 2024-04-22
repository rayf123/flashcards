import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { setAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch("/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({username: user, password: password})
            });
            response = await response.json();
            const accessToken = response?.token;
            setAuth({user, password, accessToken});
            setUser(""); setPassword(""); setErrorMessage("");  
            //navigate back to the correct endpoint if user is redirected to Login from another endpoint 
            from === "/" ? navigate("/dashboard/") : navigate(from, { replace: true });  
        } catch (err) {
            if (! err?.response) {
                setErrorMessage("No server response");
            } else if (err.response?.status === 400) {
                setErrorMessage("Missing username / password");
            } else if (err.response?.status === 401) {
                setErrorMessage("Unauthorized");
            } else {
                setErrorMessage("Login failed");
            }
        }
    }

    return (
        <div class="flex min-h-full flex-col justify-center px-6 h-screen lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-12 w-auto" src = "../../../icon.png" alt="Flashcards Logo" /> 
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit = {handleSubmit}>
                    <div>
                        <label class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                        <div class="mt-2">
                            <input value = {user} onChange={(e) => setUser(e.target.value)} id="username" name="username" type="username" autoComplete="off" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="off" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a user?
                    <a href="/register" class="font-semibold leading-6 text-blue-500 hover:text-blue-300"> Register a new account</a>
                </p>
                {errorMessage && <p class="mt-10 text-center text-sm text-red-500"> {errorMessage} </p>}
            </div>
        </div>
    );
}