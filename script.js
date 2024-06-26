const register = () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    let isValid = true;
  
    if (name === '' || phone === '' || email === '') {
      document.getElementById('Error').innerHTML = 'All feilds are required';
      isValid = false;
    } 
    else if (!/^\d{10}$/.test(phone)) {
      document.getElementById('Error').innerHTML = 'Invalid phone number format';
      isValid = false;
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      document.getElementById('Error').innerHTML = 'Invalid email address format';
      isValid = false;
    } else {
      document.getElementById('Error').innerHTML = '';
      }
    if (!isValid) {
        console.log("error in user provided input")
    } else {
       alert('Registered!'); //DUMMY REGISTRATION
    }
  }