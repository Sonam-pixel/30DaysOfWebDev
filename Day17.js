function fetchUsers() {
  const userList = document.getElementById('userList');
  const errorMessage = document.getElementById('errorMessage');

  userList.innerHTML = '';
  errorMessage.textContent = '';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
      });
    })
    .catch(error => {
      errorMessage.textContent = error.message;
    });
}
