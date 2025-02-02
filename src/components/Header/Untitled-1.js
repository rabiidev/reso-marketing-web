/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from 'react';

import { Link } from "react-router-dom";
import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Field, Label, Switch } from '@headlessui/react'
import axios from 'axios';

export default function Example() {
    const [agreed, setAgreed] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: "",
        password: "",
        phoneNumber: "",
        cPassword: "",
    })


    const handleChange = async (e) => {
        const { value, name } = e.target

        setFormData(prev => ({ ...prev, [name]: value }))

    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!formData.name) {
                alert("Name is required")
            }

            console.log(formData);

            const { data } = await axios.post('http://192.168.100.7:5001/api/v1/user/signup', formData)
            console.log(data);
            if (!data.error) {
                alert("Signup Successful")
            } else {
                alert("signup unsuccessfull")
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Sign up</h2>
            </div>
            <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div className="sm:col-span-2">
                        <label htmlFor="fullname" className="block text-sm/6 font-semibold text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='Enter Your Full Name '
                                id="company"
                                name="name"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='Enter Your Email '
                                id="first-name"
                                name="email"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                            Phone Number
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='Enter Your Phone'

                                id="first-name"
                                name="phoneNumber"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                onChange={handleChange}
                                value={formData.phoneNumber}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                            Password
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='Enter Your Password'

                                id="first-name"
                                name="password"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2.5">
                            <input
                                placeholder='Enter Your Confirmed Password'
                                id="last-name"
                                name="cPassword"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                onChange={handleChange}
                                value={formData.cPassword}
                            />
                        </div>
                    </div>



                </div>
                <p className="text-end text-sm mt-7
        text-indigo-600">
                    Forget Password?
                </p>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Let's talk
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-indigo-600">Log in</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
