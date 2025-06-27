function formatNames() {
      let input = document.getElementById("nameInput").value;
      let names = input.split(",");
      let result = document.getElementById("outputList");

      result.innerHTML = "";

      // Using FOR loop to display on screen
      for (let i = 0; i < names.length; i++) {
        let name = names[i].trim();
        let formatted = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        let li = document.createElement("li");
        li.textContent = "Name: " + formatted;
        result.appendChild(li);
      }

      // WHILE loop
      let i = 0;
      while (i < names.length) {
        console.log("While Loop:", names[i].trim());
        i++;
      }

      // DO WHILE loop
      let j = 0;
      do {
        console.log("Do While Loop:", names[j].trim());
        j++;
      } while (j < names.length);

      // FOR OF loop
      for (let name of names) {
        console.log("For of Loop:", name.toUpperCase());
      }

    }
    