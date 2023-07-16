import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BiSolidUserCircle } from 'react-icons/bi';
import { BsPersonFillAdd } from 'react-icons/bs';


import Card from "../Components/Card"
import NewUser from "../Modals/NewUser";
import NewPosition from "../Modals/NewPosition";
import DeleteUser from "../Modals/DeleteUser";

const Home = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = React.useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const [positions, setPositions] = useState([])
    const [position, setPosition] = useState("");


    const [selectedUser, setSelectedUser] = useState("")

    const icon = <BiSolidUserCircle />

    const openAddNewUser = () => {
        setModalOpen(true);
    }
    const openDeleteUser = () => {
        setModalOpen1(true);
    }
    const openNewPosition = () => {
        setModalOpen2(true);
    }
    const getPositions = async () => {
        try {
            const result = await axios.get('http://localhost:8002/api/position/').then((response) => {

                setPositions(response.data)
                setPosition(response.data[0])
            })
            console.log(result)
        } catch (error) {
            console.log(error);
        }
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
        getPositions()
    }, [modalOpen, modalOpen1, modalOpen2])

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
            <div
                style={{
                    float: "right",
                    marginRight: "20px",
                    paddingTop: "15px",
                }}
            >
                <div
                    className=" flex justify-end px-3"
                    style={{
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                        padding: "10px"
                    }}
                >

                    <button
                        className="
                fixed bottom-5 right-24 bg-blue-500 hover:drop-shadow-xl text-white
                font-bold py-2 px-4 rounded transition duration-300 ease-in-out shadow-lg
              "
                        onClick={openNewPosition}
                    >
                        Add Position
                    </button>
                </div>
            </div>
            <NewUser
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                fetchData={fetchData}
                positions={positions}
                position={position}
                setPosition={setPosition}
            />
            <DeleteUser
                modalOpen1={modalOpen1}
                setModalOpen1={setModalOpen1}
                selectedUser={selectedUser}
            />
            <NewPosition
                modalOpen2={modalOpen2}
                setModalOpen2={setModalOpen2}
                fetchData={fetchData}
            />

        </div >
    )

};
export default Home;