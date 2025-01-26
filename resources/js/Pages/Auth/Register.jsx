import React from "react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import DarkModeToggle from "../../Components/DarkModeToggle";
import NavLink from "@/Components/NavLink";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        user_type: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
    {/* Dark Mode Toggle */}
    <div className="block px-2 py-2 bg-none  ">
                                            <DarkModeToggle className="tranfla" />
                                        </div>
            <form onSubmit={submit}>
                {/* First Name */}
                <div>
                    <InputLabel htmlFor="first_name" value="First Name" />
                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-gray-900 border border-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                        autoComplete="given-name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />
                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                {/* Last Name */}
                <div className="mt-4">
                    <InputLabel htmlFor="last_name" value="Last Name" />
                    <TextInput
                        id="last_name"
                        name="last_name"
                        value={data.last_name}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-gray-900 border border-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                        autoComplete="family-name"
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />
                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300  text-gray-900 border border-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Phone */}
                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="Phone" />
                    <TextInput
                        id="phone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-gray-900 border border-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                        autoComplete="tel"
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>

                {/* Gender */}
                <div className="mt-4">
                    <InputLabel htmlFor="gender" value="Gender" />
                    <select
                        id="gender"
                        name="gender"
                        value={data.gender}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-gray-900 border focus:outline-none dark:text-gray-900 dark:border-gray-600"
                        onChange={(e) => setData('gender', e.target.value)}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <InputError message={errors.gender} className="mt-2" />
                </div>

                {/* User Type */}
                <div className="mt-4">
                    <InputLabel htmlFor="user_type" value="User Type" />
                    <select
                        id="user_type"
                        name="user_type"
                        value={data.user_type}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-gray-900 border  focus:outline-none dark:text-gray-900 dark:border-gray-600"
                        onChange={(e) => setData('user_type', e.target.value)}
                        required
                    >
                        <option value="client">Client</option>
                        <option value="admin"></option>
                      
                    </select>
                    <InputError message={errors.user_type} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300 text-gray-900 border border-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>


                {/* Password Confirmation */}
                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="w-full h-14 px-4 rounded-lg bg-gray-300  border border-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-900 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <NavLink className="ms-4" disabled={processing}>
                        Register
                    </NavLink>
                </div>
            </form>
        </GuestLayout>
    );
}