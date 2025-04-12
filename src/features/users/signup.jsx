import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@hooks/userHook";

export default function Signup() {
    const { registerUser } = useAuth();
    const navigate = useNavigate();

    const initialform  = {
        username: "",
        email: "",
        password: "",
    };

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser(form);
        setForm(initialform); 
        navigate('/dashboard');
    };

    return (
        <Card shadow={true} className="p-6 dark:bg-neutral-800 dark:text-white min-h-screen rounded-none">
            <Typography variant="h4" className="text-center dark:text-white">
                Create an Account
            </Typography>
            <Typography className="mt-2 text-center dark:text-white font-light">
                Join us today! Fill in your details to get started.
            </Typography>
            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md mx-auto">
                <div className="mb-4 flex flex-col gap-4">
                    <Input
                        size="lg"
                        name="username"
                        placeholder="Your Name"
                        value={form.username}
                        onChange={handleChange}
                        className="focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        size="lg"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="focus:ring-2 focus:ring-blue-500"
                    />
                    <Input
                        type="password"
                        size="lg"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox containerProps={{ className: "-ml-2" }} />
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-light dark:text-white"
                    >
                        I agree to the
                        <a href="#" className="font-medium text-blue-500 hover:underline ml-1">
                            Terms and Conditions
                        </a>
                    </Typography>
                </div>
                <Button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600" fullWidth>
                    Sign Up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-light dark:text-white">
                    Already have an account?{" "}
                    <a href="/signin" className="font-medium text-blue-500 hover:underline">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}
