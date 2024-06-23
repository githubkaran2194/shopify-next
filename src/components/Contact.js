'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Contact() {
    const [contactStates, setContactStates] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setContactStates({
            ...contactStates,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: "POST", body: JSON.stringify(contactStates), headers: {
                    "Content-Type": "application/json"
                }
            })
            if (contactStates.email.trim() === '' || contactStates.subject.trim() === '' || contactStates.message.trim() === '') {
                alert('fill all fields')
            } else {

                alert("data submitted successfully")
            }

            const data = await response.json()
            setContactStates({
                email: '',
                subject: '',
                message: ''
            })
        } catch (err) {
            alert(err, "error submitting data")
        }
    }
    return (
        <div className="font-sans text-base text-gray-900 sm:px-10">
            <div className="text-base text-gray-900">
                <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
                        <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">Contact us</h1>
                        <div className="text-lg sm:text-xl xl:text-xl">
                            <div className="text-gray-900">
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
                <form className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text mb-2 block font-medium" for="email">Your e-mail:</label>
                        <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="email" type="email" required="" name="email" value={contactStates.email} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="text mb-2 block font-medium" for="subject">Subject:</label>
                        <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="subject" type="subject" required="" name="subject" value={contactStates.subject} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="text mb-2 block font-medium" for="message">Message:</label>
                        <textarea className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="message" required="" name="message" value={contactStates.message} onChange={handleChange}>
                        </textarea>
                    </div>
                    <div className="flex items-center">
                        <div className="flex-1"></div>
                        <button className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</button>
                    </div>
                </form>
                <div className="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
                    <div className="">
                        <p className="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
                        <p className="mb-4">Monday – Thursday: 08:00 – 16:00</p>
                        <p className="mb-4">Friday: 08:00 - 15:00</p>
                        <p className="mb-4">Weekend: Closed</p>
                        <p className="mb-4">
                            Email:
                            <Link href="#" className="font-semibold underline">shopify@gmail.com</Link>
                        </p>
                        <p className="mb-4">
                            Phone:
                            <Link href="#" className="font-semibold underline">+91 9850502194</Link>
                        </p>
                        <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
                    </div>
                </div>
            </div>
        </div>

    )
}
