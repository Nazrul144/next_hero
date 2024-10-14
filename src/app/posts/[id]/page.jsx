import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button"

export const generateMetadata = async ({params}) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
        title: {
        absolute: `${data.title}`
        },
       
    }
}


const getPostData = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json()
   
    return data 
}

const DetailsPage = async ({params}) => {
   const getPost = await getPostData(params.id)
    return (
        <div>
            <h1>Details Page</h1>
            <div className='border-2 border-green-400 rounded-lg shadow-lg bg-orange-200 w-96 p-6'>
            <h1>Title:{getPost.title}</h1>
            <h1>Description:{getPost.body}</h1>
            <Button><Link href={'/posts'}>Back to home</Link></Button>
            </div>
        </div>
    );
}

export default DetailsPage;
