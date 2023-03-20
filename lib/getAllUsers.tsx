

export default  async function getAllUsers() {


const res =await fetch('https://jsonplaceholder.typicode.com/users')
console.log('ok');
if (!res.ok) {
    throw new Error('faild to fetch data')
}


  return await res.json()
}
