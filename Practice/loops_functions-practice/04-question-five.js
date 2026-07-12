// A loop repeating until correct password is inserted.
while(true) {
    let password = prompt("Insert password: ");

    if(password === "javascript"  ) {
        alert("Correct password!");
        break;
    }
}
