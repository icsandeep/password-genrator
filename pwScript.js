
      let passwordBox = document.getElementById("password");
      let length = 15;
      let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowerCase = "abcdefghijklmnopqrstuvwxyz";
      let number = "0123456789";
      let symbol = "~!@#$%^&*_-?<>";

      let allChar = upperCase + lowerCase + number + symbol;

      function createPassword() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while (length > password.length) {
          password += allChar[Math.floor(Math.random() * allChar.length)];
        }
        passwordBox.value = password;
      }

      function copyPassword() {
        passwordBox.select();
        document.execCommand("copy");
      }
   