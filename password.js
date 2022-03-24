const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }

  const getKey = [
    function uppercase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowercase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function numbers() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbols() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];

  


  function createPassword() {
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const number = document.getElementById("numbers").checked;
    const symbol = document.getElementById("symbols").checked;
    console.log(upper);
    if (upper + lower + number + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const resultEl = document.getElementById('result');
    const length = document.getElementById("length");
    if(parseInt(length.value) > 3000){
        alert("Password should be less than or equal to 30");
        return;
    }
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    resultEl.innerHTML = password;
  }

const generateEl = document.getElementById('generate');

generateEl.addEventListener('click',createPassword);