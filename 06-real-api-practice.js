async function getrealusers(params) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    let filteruser = data
      .filter((user) => user.id <= 3)
      .map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        companyName: user.company.name,
        city:user.address.city,
        geo:user.address.geo
      }));
    console.log(filteruser);
  } catch (error) {
    console.log("sorrry");
  }
}   
getrealusers();
