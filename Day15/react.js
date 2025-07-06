class User {
  constructor(name, role) {
    if (!name) throw new Error("Name cannot be empty");
    this.name = name;
    this.role = role;
  }

  getInfo() {
    return `${this.name} (${this.role})`;
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "Admin");
  }

  getInfo() {
    return `Admin: ${this.name}`;
  }
}

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value;

  try {
    let user;
    if (role === "Admin") {
      user = new Admin(name);
    } else {
      user = new User(name, role);
    }

    const li = document.createElement("li");
    li.textContent = user.getInfo();
    userList.appendChild(li);

    form.reset();
  } catch (err) {
    alert(err.message);
  }
});