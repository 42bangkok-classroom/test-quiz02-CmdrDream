export function getPostalAddress() {}

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        const user = response.data;
        console.log(getPostalAddress());
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};
export function getUserById(id: number): User | null {
    return null;
}