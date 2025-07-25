import React, { useState } from 'react'
import DateInput from '../../components/Form/DateInput'
import DefaultInput from '../../components/Form/DefaultInput'
import Dropdown from '../../components//Form/Dropdown'
import FileInput from '../../components/Form/FileInput'
import TextAreaInput from '../../components/Form/TextAreaInput'
import DefaultBtn from '../../components/Buttons/DefultBtn'

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        bio: '',
        file: null,
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (files) {
            setFormData({ ...formData, [name]: files[0] })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md"
        >
            <DefaultInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
            />
            <DateInput
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
            />
            <Dropdown
                label="Gender"
                name="gender"
                onChange={handleChange}
                required
                options={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                    { label: 'Other', value: 'other' },
                ]}
            />
            <TextAreaInput
                label="Short Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself"
            />
            <FileInput
                label="Upload Profile Picture"
                name="file"
                onChange={handleChange}
                accept="image/*"
            />

            <DefaultBtn type="submit" label="Submit" />
        </form>
    )
}

export default Home
