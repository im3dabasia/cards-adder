import React, { useState, useEffect } from 'react'
import axios from "axios";
import Modal from "./Modal";
import { showSuccessToast, showErrorToast } from "../Utils/toastUtils";



const NewUser = (props) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const modalOpen = props.modalOpen;
    const setModalOpen = props.setModalOpen;
    const positions = props.positions
    const position = props.position
    const setPosition = props.setPosition

    //data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    const closeModal = () => {
        setModalOpen(false);
    };

    const clearData = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setDate("")
    }

    const Submit = async (e) => {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            date,
            position
        }
        try {
            const result = await axios.post('http://localhost:8002/api/users/', data).then((response) => {

                console.log(response.data.Message);
                showSuccessToast(response && response.data && response.data.Message)
            }).then(() => {
                clearData()
                closeModal()

            })
        } catch (error) {
            console.log(error);
            showErrorToast("Error in Creating User")

        }
    }


    return (
        <div>
            <Modal isOpen={modalOpen} onClose={closeModal} className="mt-12">
                <div className="flex items-center justify-center">
                    <div className="bg-white w-full max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-6 text-center rounded-lg">Create New User</h3>
                        {/* <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-8 bg-gray-100 rounded shadow-md"> */}
                        <form className="max-w-3xl mx-auto p-8 bg-gray-100 rounded shadow-md">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        First Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="John"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="w-full md:w-1/2 px-3 ">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                        onChange={(e) => setLastName(e.target.value)}

                                    />
                                </div>
                            </div>


                            <div className="flex flex-wrap -mx-3 mb-8">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-city"
                                        type="text"
                                        placeholder="recruits@flow.com"
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                                        Start Date
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-city" type="date"
                                        placeholder="Albuquerque"
                                        onChange={(e) => setDate(e.target.value)}

                                    />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        Position type
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                                            onChange={(e) => { setPosition(e.target.value) }}

                                        >
                                            {
                                                positions && positions.map((position, index) => {
                                                    return <option key={index} value={position._id}>
                                                        {position.positionType}
                                                    </option>

                                                })
                                            }
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                onClick={(e) => Submit(e)}
                                disabled={isProcessing}
                                className={`${isProcessing ? " bg-gray-500 hover:bg-gray-700" : "bg-blue-500 hover:bg-blue-700"} flex mx-auto  text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
                            >
                                Submit
                            </button>
                        </form>
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.41 12l4.29-4.29a1 1 0 1 0-1.41-1.41L12 10.59 7.71 6.29a1 1 0 0 0-1.41 1.41L10.59 12l-4.3 4.29a1 1 0 0 0 1.42 1.42L12 13.41l4.29 4.3a1 1 0 0 0 1.42-1.42L13.41 12z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default NewUser