import React, { useState } from 'react'
import Header from '../components/HeroSec'
import Footer from '../components/Footer'
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import Navbar from '../components/navbar/Navbar'


function ContactUs() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Box className='bg-[#F5F5F5] h-fit flex flex-col items-center'>
            <Navbar />
            <Header />
            <Box
                sx={{
                    width: { sm: 786, md: 1024 },
                    display: "flex",
                    flexDirection: { sm: 'column', md: 'column' },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                className=' h-full bg-white justify-center items-center'
            >
                <div className=''>
                    <h3 className='text-center'>Let's get in touch.</h3>
                </div>

                <Box
                    sx={{
                        width: { sm: 786, md: 1024 },
                        display: 'flex',
                        flexDirection: { sm: "column", md: "row" }
                    }}
                    className='flex items-center ml-20 mb-10'>
                    <Box
                        sx={{
                            width:{sm:786, md:1024},
                            display: 'flex',
                            flexDirection: { sm: 'row', md: 'column' },
                            marginTop:{sm:5},
                            justifyContent:{sm:"space-evenly"}
                        }}
                    >
                        <div>
                            <h7 className="font-bold">Address:</h7>
                            <p className='text-sm'>486 Lynnwood</p>
                            <p className='text-sm mt-[-12px]'>Pretoria </p>
                        </div>
                        <div>
                            <h7 className="font-bold">Contact:</h7>
                            <p className='text-sm'>Bookins@mail.com</p>
                            <p className='text-sm mt-[-12px]'>+277 458 9658</p>
                        </div>
                        <div>
                            <h7 className="font-bold">Follow Us:</h7>
                            <p className='text-sm'>facebook</p>
                            <p className='text-sm mt-[-12px]'>twitter</p>
                        </div>
                    </Box>
                    <div className=' justify-center items-center mt-12 ml-[-140px]'>
                        <form className='w-[900px] flex flex-col justify-center items-center'>
                            <div className='block my-2'>
                                <label className='block  my-1'>First Name:</label>
                                <input
                                    required
                                    id="firstName"
                                    name="firstName"
                                    className='w-[400px] border'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='block'>
                                <label className='block  my-1'>Last Name:</label>
                                <input
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="First name"
                                    className='w-[400px] border'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='block my-2'>
                                <label className='block my-1'>Email:</label>
                                <input
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    className='w-[400px] border'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='block'>
                                <label className='block my-1'>Subject:</label>
                                <input
                                    required
                                    id="firstName"
                                    name="firstName"
                                    className='w-[400px] border'
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>
                            <div className='block my-2'>
                                <label className='block my-1'>Message:</label>
                                <textarea
                                    required
                                    id="firstName"
                                    name="firstName"
                                    className='w-[400px] border'
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button className='w-[150px] h-[35px] bg-[#0088a9] rounded-xl text-white'>Send</button>
                        </form>
                    </div>
                </Box>
            </Box>

            <Footer />

        </Box>
    )
}

export default ContactUs

