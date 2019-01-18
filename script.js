function greet() {

    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');

    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // validate name is reasonable, clear inputs after greet?

    var greeting = 'hello ' + firstName + ' ' + lastName + '!';   
    
    var greeter = document.getElementById('greeter');
    greeter.textContent = greeting;
}

