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

  addUser(newUser: newUser | null) {}
function addUser(newUser: newUser | null) {
  if (newUser === null) {
    console.log("No user data provided.");
    return;
  }
  
  const {
    name,
    username = "N/A",
    email = "N/A",
    address,
    phone,
    website = "N/A",
    company,
  } = newUser;
  const addressInfo = address
    ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode} (Lat: ${address.geo.lat}, Lng: ${address.geo.lng})`
    : "N/A";
  const companyInfo = company
    ? `${company.name}, ${company.catchPhrase}, ${company.bs}`
    : "N/A";

  console.log(`Name: ${name}`);
  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Address: ${addressInfo}`);
  console.log(`Phone: ${phone}`);
  console.log(`Website: ${website}`);
  console.log(`Company: ${companyInfo}`);
}

