import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import useAuth from '../hooks/useAuth'
import DefaultInput from '../components/Form/DefaultInput'
import DefaultBtn from '../components/Buttons/DefultBtn'
import API from '../services/api'

const VerifyOTPE = () => {
    const token = localStorage.getItem('emailverify')
    const navigate = useNavigate()
    const { verifyEmailInfo } = useAuth()

    const { values, handleChange } = useForm({ email: verifyEmailInfo.email, otp: '' })

    const headlesubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await API.post('/auth/verify-otp-email', values, {
                headers: { Authorization: `Bearer ${token}` }
            })
            if(res.data.success === true){
                alert(res.data.message)
                navigate('/login', { replace: true })
            }
            else{
                alert(res.data.message)
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!verifyEmailInfo.email || !verifyEmailInfo.otp) {
            localStorage.clear()
            navigate('/login')
        }
    }, [verifyEmailInfo, navigate])

    return (
        <div className="flex justify-center items-center py-16 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h2 className="text-3xl font-semibold text-center text-gray-700">Welcome back to Hotel</h2>

                <form onSubmit={headlesubmit} method="post" className="space-y-4">
                    <DefaultInput
                        type='text'
                        name={'otp'}
                        value={values.otp}
                        onChange={handleChange}
                        required
                        placeholder={"Enter OTP Here"}
                    />

                    <DefaultBtn
                        type='submit'
                        label='Verify OTP'
                    />
                </form>

            </div>
        </div>
    )

}

export default VerifyOTPE