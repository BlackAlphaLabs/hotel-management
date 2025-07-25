import React from 'react';
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../components/Form/DefaultInput';
import DefaultBtn from '../components/Buttons/DefultBtn';

const Login = () => {
    const { values, handleChange } = useForm({ email: '', password: '' });
    const { setuser } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center py-16 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h2 className="text-3xl font-semibold text-center text-gray-700">Welcome back to Hotel</h2>
                <form action="" method="post" className="space-y-4">
                    <DefaultInput
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        placeholder={"Email Address"}
                    />
                    <DefaultInput
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        placeholder={"Password"}
                    />
                    <div className="">
                        <DefaultBtn type="submit" label="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
