import { useState } from "react"
import { Link } from "react-router-dom"
import { fileUploadHandler } from "../../service/fileService"
import { Alert } from "../UI/Alert"

export const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        resume: null
    })
    const [alert, setAlert] = useState({ messages: [], type: '' })
    const [loading, setLoading] = useState(false)

    const changeHandler = (e) => {
        const { name, value, files } = e.target
        if (name === 'resume'){
            setFormData(prevState => ({ ...prevState, resume: files[0] }))
        } 
        else {
            setFormData(prevState => ({ ...prevState, [name]: value }))
        }
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        setLoading(true)
        let resumePath = ''
        let errors = []
        if (formData.resume) {
            const formDataResume = new FormData()
            formDataResume.append('resume', formData.resume)
            try {
                resumePath = await fileUploadHandler(formDataResume)
            }
            catch(err){
                errors.push(`Failed loading resume: ${err.message}`)
            }
        }
        if(errors.length === 0){
            const candidateData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                resume: resumePath
            }
            try {
                const response = await fetch('http://localhost:3000', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(candidateData)
                })
                if (!response.ok) {
                    const errorData = await response.json()
                    if (errorData.errors && Array.isArray(errorData.errors)) errors = errorData.errors.map(error => error.msg)
                    else errors.push('Failed saving candidate data')
                }
                setAlert({ messages: ['Candidate data saved successfully'], type: 'Success' })
            } 
            catch(err){
                errors.push(`Failed saving candidate data: ${err.message}`)
            }
        }
        if(errors.length > 0) setAlert({ messages: errors, type: 'Error' })
        setLoading(false)
    }

    const handleAlertClose = () => {
        setAlert({ messages: [], type: '' })
      }

      
    return (
        <section className="bg-[#e5f7ff] py-12 md:py-24 lg:py-32">
        <div className="container px-6 md:px-12 grid gap-12">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Sign Up for YourHR</h2>
                <p className="text-lg md:text-xl text-black">
                    Fill out the form below to get started with your job search.
                </p>
            </div>
            <div className="bg-[#e7f2f6] p-6 rounded-lg shadow-md">
            {alert.messages.length > 0 && (
              <Alert messages={alert.messages} type={alert.type} onClose={handleAlertClose}
              />
            )}
            <form className="grid gap-6" onSubmit={submitHandler}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name">Name</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" id="name" name="name" placeholder="Name" type="text" required onChange={changeHandler} value={formData.name}/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" id="email" name="email" placeholder="Email" type="email" required onChange={changeHandler} value={formData.email}/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="phone">Phone</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" id="phone" name="phone" placeholder="Phone" type="tel" required onChange={changeHandler} value={formData.phone}/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="location">Location</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" id="location" name="location" placeholder="Location" type="text" required onChange={changeHandler} value={formData.location}/>
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="resume">Resume</label>
                    <input type="file" id="resume" className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm file:text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" onChange={changeHandler} name="resume"/>
                </div>
                <div className="space-y-2">
                By Signing In, I accept the yourHR's <Link to="/" className="font-semibold text-[#ff5fa1]">Terms & Conditions and Privacy Policy</Link>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-[#F3C3D7] px-6 py-3 font-medium shadow-sm transition-colors hover:bg-black hover:text-[#F3C3D7] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" disabled={loading}>
                    {loading? 'Submitting....': 'Submit'}
                </button>
            </form>
        </div>
    </div>
    </section>
    )
}