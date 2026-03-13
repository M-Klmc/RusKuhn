"use client";

import { Button, Form, Input, input } from '@heroui/react';
import { useState } from 'react';

interface IProps {
    onClose: () => void;
}   

const RegisterForm = (props: IProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        });

        const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        };

        const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        props.onClose();
        };

        return (
            <Form className='w-full' onSubmit={handleSubmit}>
                <Input 
                    aria-label='Email'
                    isRequired
                    name="email"
                    placeholder='enter Email'
                    type='email'
                    value={formData.email}
                    classNames={{
                        inputWrapper: "bg-default-100",
                        input: "text-sm focus:outline-none"
                    }}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    validate={(value) => {
                        if (!value) return "Email is required";
                        if (!validateEmail(value)) return "Invalid email format";
                        return null;
                    }}
                />

                <Input
                    isRequired
                    name='password'
                    placeholder='enter password'
                    type='password'
                    value={formData.password}
                    classNames={{
                        inputWrapper: "bg-default-100",
                        input: "text-sm focus:outline-none"
                    }}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    validate={(value) => {
                        if (!value) return "Password is required";
                        if (value.length < 6) return "Password must be at least 6 characters long";
                        return null;
                    }}
                />

                <Input
                    isRequired
                    name='confirmPassword'
                    placeholder='confirm password'
                    type='password'
                    value={formData.confirmPassword}
                    classNames={{
                        inputWrapper: "bg-default-100",
                        input: "text-sm focus:outline-none"
                    }}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    validate={(value) => {
                        if (!value) return "Please confirm your password";
                        if (value !== formData.password) return "Passwords do not match";
                        return null;
                    }}
                />

                <div className='flex w-[100] gap-4 items-center pt-8 justify-end'>
                    <Button variant='light' onPress={props.onClose}>
                        Cancel
                    </Button>
                    <Button color='primary' type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        )

}

export default RegisterForm;