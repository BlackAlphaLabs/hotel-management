import React from 'react';
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import DefaultInput from '../components/Form/DefaultInput';
import DefaultBtn from '../components/Buttons/DefultBtn';
import API from '../services/api';

const Login = () => {
    const { values, handleChange } = useForm({ email: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const headlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/auth/login', values)
            if(res.data.success === true ){
                login(res.data.token)
                alert(res.data.message)
                navigate('/dashboard/home')
            }
            else if(res.data.success === false ) {
                alert(res.data.message)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center items-center py-16 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h2 className="text-3xl font-semibold text-center text-gray-700">Welcome back to Hotel</h2>
                <form onSubmit={headlesubmit} method="post" className="space-y-4">
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
