import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BiSolidUserCircle } from 'react-icons/bi';
import { BsPersonFillAdd } from 'react-icons/bs';


import Card from "../Components/Card"
import NewUser from "../Modals/NewUser";
import DeleteUser from "../Modals/DeleteUser";


const Home = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = React.useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [selectedUser, setSelectedUser] = useState("")

    const icon = <BiSolidUserCircle />

    const openAddNewUser = () => {
        setModalOpen(true);
    }
    const openDeleteUser = () => {
        setModalOpen1(true);
    }
    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await axios.get('http://localhost:8002/api/users/all')
            setUsers(result.data)
            console.log(result)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [modalOpen])

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

            <div className="flex mt-20 px-5 flex-wrap justify-start w-100 animate-slide-out">

                {users.map((user) => (

                    <Card
                        key={user._id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        startDate={user.startDate}
                        icon={icon}
                        id={user._id}
                        openDeleteUser={openDeleteUser}
                        setSelectedUser={setSelectedUser}
                    />

                ))}
                <button onClick={openAddNewUser}>
                    <Card
                        firstName="Add New User"
                        icon={<BsPersonFillAdd />}

                    />
                </button>
            </div>
            <NewUser
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                fetchData={fetchData}
            />
            <DeleteUser
                modalOpen1={modalOpen1}
                setModalOpen1={setModalOpen1}
                selectedUser={selectedUser}
            />

        </div >
    )

};
export default Home;