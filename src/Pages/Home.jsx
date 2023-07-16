import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BiSolidUserCircle } from 'react-icons/bi';
import Card from "../Components/Card"

const Home = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = React.useState(false);
    const icon = <BiSolidUserCircle />

    const navigate = useNavigate();

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
    }, [])

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <div className="flex mt-20 px-5 flex-wrap justify-start w-100 animate-slide-out">
                {users.map((user) => (
                    <div
                        className="mr-5 hover:scale-105 transform transition duration-300 cursor-pointer"
                        key={user._id}
                    >
                        <div>
                            <Card
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                startDate={user.startDate}
                                icon={icon}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

};
export default Home;