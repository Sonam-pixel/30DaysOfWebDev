function check() {
      let n = document.getElementById("num").value;
      let result = "";

      if (n > 0) {
        result = "Positive number";
      } else if (n < 0) {
        result = "Negative number";
      } else if (n == 0) {
        result = "Zero";
      } else {
        result = "Please enter a number";
      }

      document.getElementById("result").innerText = result;
    }