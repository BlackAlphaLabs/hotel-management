import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import useAuth from '../hooks/useAuth'

const VerifyOTPE = () => {
    const token = localStorage.getItem('emailverify')
    const navigate = useNavigate()
    const { verifyEmailInfo } = useAuth()

    const [values, headleonChange] = useForm({ email: '', otp: '' })

    useEffect(() => {
        if(!verifyEmailInfo.email || !verifyEmailInfo.otp){
            localStorage.clear()
            navigate('/login')
        }
    }, [verifyEmailInfo, navigate])

    return (
        <div>
            
        </div>
    )

}

export default VerifyOTPE