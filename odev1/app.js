import axios from "axios";

const getData = async (userId) => {
    const users = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const posts = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

    const data = users + posts;
    
    return data;
} 

export default getData;