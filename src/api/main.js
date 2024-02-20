export const getPosts = async ()=>{
    const post = await fetch('https://jsonplaceholder.typicode.com/posts',
    {method : 'GET'})

    return await post.json()
}