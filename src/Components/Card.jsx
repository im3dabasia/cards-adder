import React from 'react'

const Card = (props) => {
    const { firstName, lastName, icon, email, startDate } = props;

    return (
        <div className='mb-4'>
            <div className={`block max-w-s p-6 bg-gray-100 border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
                <div className='flex flex-col justify-start'>
                    <h5 className={`flex flex-row p-2 px-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>
                        <div className='mr-2 text-4xl'>
                            {icon}

                        </div>
                        <div>
                            {firstName} {lastName}
                        </div>
                    </h5>

                    {(firstName !== 'Add New User') && < div className={`flex flex-col px-4 text-sm font-bold tracking-tight text-gray-900 dark:text-white`}>
                        <div className='mr-2'>
                            Email ID: {email}
                        </div>

                        <div>
                            Start Date: {new Date(startDate).toDateString()}
                        </div>
                    </div>

                    }
                </div>
            </div>
        </div >
    )
}

export default Card