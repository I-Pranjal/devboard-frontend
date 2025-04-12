import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import userHook from "@hooks/userHook";
import { useNavigate } from "react-router";



export default function Signin() {
    const initialDetails = {
        email: "",
        password: "",
    }
    const [details, setDetails] = useState(initialDetails);
    const { loginUser } = userHook();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log("Sign-in details:", details);       // Sign in details for debugging
       await loginUser(details);
        setDetails(initialDetails); 
        navigate("/project-tracker"); 
    }; 

    




    return (
        <Card shadow={true} className="p-6 dark:bg-neutral-800 dark:text-white min-h-screen rounded-none">
            <Typography variant="h4" className="text-center dark:text-white">
                Sign In
            </Typography>
            <Typography className="mt-2 text-center dark:text-white font-light">
                Welcome back! Please enter your details to sign in.
            </Typography>
            <form className="mt-6 w-full max-w-md mx-auto">
                <div className="mb-4 flex flex-col gap-4">
                    <Input
                        name="email"
                        size="lg"
                        placeholder="Your Email"
                        className="focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={details.email}
                    />
                    <Input
                        type="password"
                        name="password" 
                        size="lg"
                        onChange={handleChange}
                        value={details.password}
                        placeholder="Password"
                        className="focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            containerProps={{ className: "-ml-2" }}
                        />
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-light dark:text-white"
                        >
                            Remember me
                        </Typography>
                    </div>
                    <a
                        href="#"
                        className="font-medium text-blue-500 hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>
                <Button className="mt-6 bg-blue-500 hover:bg-blue-600" onClick={handleSubmit} fullWidth>
                    Sign In
                </Button>
                <Typography color="gray" className="mt-4 text-center font-light">
                    Don't have an account?{" "}
                    <a href="signup" className="font-medium text-blue-500 hover:underline">
                        Create account
                    </a>
                </Typography>
            </form>
        </Card>
    );
}
