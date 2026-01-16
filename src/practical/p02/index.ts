type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
const createUser = (user: newUser): void => {
  console.log("User created:", user);
};

createUser({
  name: "John Doe",
  phone: "123-456-7890",
  address: null,
});
export {};
