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
export function addUser(newUser: newUser | null) {}

let new_user: newUser = {
  name: "Jane Smith",
  phone: "987-654-3210",
  address: null,
};

addUser(new_user);
addUser(null);

