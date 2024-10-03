import React, { useEffect, useState } from 'react'
import { Container, Postcard } from "../index"
import  service from '../../appwrite/config';
import { set } from 'react-hook-form';

function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {}, [])

    service.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex-wrap felx'>
                {posts.map((post) => {
                    <div key={post.$id} className='w-1/4 p-2'>
                        <Postcard post = {post} />
                    </div>
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts