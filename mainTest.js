let username = window.prompt("Enter name:")
username = username.trim()

let letter = username.charAt()
letter = letter.toUpperCase()

let extraChars = username.slice(1)
extraChars = extraChars.toLowerCase()
username = letter + extraChars

console.log(username)

// METHOD CHAINING

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

// console.log(username)
