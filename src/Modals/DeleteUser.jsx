import React, { useState, useEffect } from 'react'
import axios from "axios";
import Modal from "./Modal";
import { showSuccessToast, showErrorToast } from "../Utils/toastUtils";


const NewUser = (props) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const modalOpen1 = props.modalOpen1;
    const setModalOpen1 = props.setModalOpen1;
    const selectedUser = props.selectedUser;

    const closeModal = () => {
        setModalOpen1(false);
    };

    const Submit = async (e) => {
        e.preventDefault();
        console.log(selectedUser)

        if (selectedUser === "" || selectedUser == null) {
            showErrorToast("Please Select A User")
            return;
        }
        try {
            const result = await axios.delete(`http://localhost:8002/api/users/${selectedUser}`).then((response) => {
                console.log(response.data.Message);
                showSuccessToast(response && response.data && response.data.Message)

            }).then(() => {
                closeModal()
            })
        } catch (error) {
            showErrorToast("Error in Deleting User")

            console.log(error);
        }
    }

    return (
        <div>
            <Modal isOpen={modalOpen1} onClose={closeModal} className="mt-12">
                <div className="flex items-center justify-center">
                    <div className="bg-white w-full max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-6 text-center rounded-lg">Delete User</h3>
                        {/* <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-8 bg-gray-100 rounded shadow-md"> */}
                        <form className="max-w-3xl mx-auto p-8 bg-gray-100 rounded shadow-md flex flex-col items-center justify-start">
                            <div className="flex flex-wrap -mx-3 mb-6 text-xl text-center">


                                Are you sure you want to delete?

                            </div>
                            <div className='flex flex-row'>

                                <button
                                    type="submit"
                                    onClick={closeModal}
                                    disabled={isProcessing}
                                    className={`${isProcessing ? " bg-gray-500 hover:bg-gray-700" : "bg-gray-500 hover:bg-gray-700"} mr-2 flex mx-auto  text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    onClick={(e) => Submit(e)}
                                    disabled={isProcessing}
                                    className={`${isProcessing ? " bg-gray-500 hover:bg-gray-700" : "bg-blue-500 hover:bg-blue-700"} flex mx-auto  text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
                                >
                                    Submit
                                </button>
                            </div>
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