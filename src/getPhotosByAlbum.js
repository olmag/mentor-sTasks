import axios from "axios";

const getPhotosByAlbum = async (album) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${album}/photos`)
    const data = response.data
    
    return data
}

export default getPhotosByAlbum;