function getUser() {
  const userDiv = document.getElementById("user");
  userDiv.innerHTML = "Loading user data...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const randomUser = data[Math.floor(Math.random() * data.length)];
      userDiv.innerHTML = `
        <h3>${randomUser.name}</h3>
        <p><strong>Email:</strong> ${randomUser.email}</p>
        <p><strong>City:</strong> ${randomUser.address.city}</p>
        <p><strong>Company:</strong> ${randomUser.company.name}</p>
      `;
    })
    .catch(error => {
      userDiv.innerHTML = "Failed to fetch user data. Please try again.";
      console.error("Error:", error);
    });
}