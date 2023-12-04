import axios from "axios";

const getAllAlbums = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    const data = response.data
    
    return data
}

export default getAllAlbums;