
import { getPosts } from "@/services/postApi";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button"
import { redirect } from "next/dist/server/api-utils";


const PostPage = async () => {
  const postData = await getPosts();
  console.log(postData);
 
  return (
    <div>
      <h1>All Posts:{postData.length}</h1>
      <div className="grid grid-cols-4 gap-6 ">
        {postData.slice(50, 70)?.map((singleData) => (
          <div key={singleData.id} className="border-2 border-red-600 shadow-xl rounded-xl p-4">
            <h1>Id: {singleData.id}</h1>
            <h1>Title: {singleData.title}</h1>
            <h1>Body: {singleData.body}</h1>
            <Button variant="outline" className="font-bold bg-orange-400"><Link href={`posts/${singleData.id}`}>Details</Link></Button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
