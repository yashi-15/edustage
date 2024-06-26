
// DUMMY REGISTRATION

const register = () => {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    let isValid = true;

    if (name === "" || phone === "" || email === "") {
        document.getElementById("Error").innerHTML = "All feilds are required";
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById("Error").innerHTML = "Invalid phone number format";
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("Error").innerHTML = "Invalid email address format";
        isValid = false;
    } else {
        document.getElementById("Error").innerHTML = "";
    }
    if (!isValid) {
        console.log("error in user provided input");
    } else {
        alert("Registered!"); //DUMMY REGISTRATION
    }
};

// ANIMATION ON TIMER ON REGISTER NOW COLUMN

window.onload = () => {
    const registerElement = document.getElementById("register");

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                const daysElement = document.getElementById("days");
                const hoursElement = document.getElementById("hours");
                const minsElement = document.getElementById("mins");
                const secsElement = document.getElementById("secs");

                const targetValues = [150, 23, 47, 59];

                function animateNumber(element, targetValue) {
                    let currentValue = 0;
                    const interval = setInterval(() => {
                        currentValue += 1;
                        element.textContent = currentValue;
                        if (currentValue >= targetValue) {
                            clearInterval(interval);
                        }
                    }, 10);
                }

                animateNumber(daysElement, targetValues[0]);
                animateNumber(hoursElement, targetValues[1]);
                animateNumber(minsElement, targetValues[2]);
                animateNumber(secsElement, targetValues[3]);
            }
        },
        { threshold: 1.0 }
    );

    observer.observe(registerElement);
};
