

export default async function getUser(id:string) {

    const res =await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!res.ok) {
        // throw new Error('faild to fetch user data')

        return undefined
    }
    
    
      return await res.json()
    }