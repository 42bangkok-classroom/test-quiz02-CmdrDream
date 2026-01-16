export function filterUserById(id) {}

try {
    console.log(filterUserById(1));
    } catch (error) {
    console.error("Error fetching user:", error);
    }
import axios from "axios";

export async function filterUserById(id: number) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}` 
        );
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch user data");
    }
}     