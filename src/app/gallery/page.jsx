import Image from 'next/image';
import React from 'react';

const getTime = async ()=>{
    const res = await fetch('http://localhost:3000/time', {next:{revalidate: 5}})
    const data = await res.json()
    return data.currentTime
}

const Page = () => {
    const Now = getTime();
    console.log("Time", Now);
    return (
        <div>
        <h1>This is gallery page</h1>
        <h1 className='text-center font-bold text-3xl text-green-400'>Current Time is now:{Now}</h1>
        <div>
            {
                ['book1', 'book2', 'book3', 'book4', 'book5']?.map((photo) => (
                    <Image 
                        key={photo} 
                        className='w-96 h-72' // Fixed height class
                        src={`/${photo}.JPEG`}  // Correct path without /public
                        alt="image" 
                        width={1920} 
                        height={1080} 
                    />
                ))
            }
        </div>
    </div>
    
    );
}

export default Page;
