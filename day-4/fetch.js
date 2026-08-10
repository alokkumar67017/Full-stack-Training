// The Promise is rejected and .catch() executes.

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
  
//     return response.json();
//   })
//   .then((data) => {
   
//     console.log(data);
//   })
//   .catch((error) => {
    
//     console.log("Error:", error);
//   });

// async function getData() {
//   try {
//     // Fetch data from the server
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");

//     // Convert response into JSON
//     const data = await response.json();

//     // Print the received data
//     console.log(data);
//   } catch (error) {
//     // Handle any error that occurs
//     console.log("Error", error);
//   }
// }

// getData();


// fetch the user data and print the user name and email in the console
async function getUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        for (let i = 0; i < data.length; i++) 
            console.log(`Name: ${data[i].id},  name: ${data[i].name}, Email: ${data[i].email}`);
       
    } catch (error) {
        console.log("Error", error);
    }
}

getUserData();