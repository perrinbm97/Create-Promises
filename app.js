//Pull data from backend promise
// fetch("https://jsonplaceholder.typicode.com/users/1")

const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

//How to unlock promise to see individual pieces of data? Two ways:

// 1.) Then

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//   //console.log(response.json())
//   //Need response.json to make backend compatible with frontend, creates new promise
//   response.json().then((data) => {
//     // console.log(data);
//     emailRef.innerHTML = data.email;
//   });
// });

/**Cleanup Version, use Return to merge code into one promise
 * rather than nesting two together
 */

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   });

// 2.) Async/Await

async function main() {
  //Rather than unlock with an argument callback, A/A gets stored in a variable
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //New Promise, A/A again
  const data = await response.json();
//   console.log(data);
  emailRef.innerHTML = data.email;
}

main();

//Create New Promise
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        resolve("Free")
    })
}

// getSubscriptionStatus().then(response => console.log(response));

// async function main2() {
//     const status = await getSubscriptionStatus();
//     statusRef.innerHTML = status;
// }

// main2();

function getVideo(getSubscriptionStatus) {
    return new Promise((resolve, reject) => {
        if(getSubscriptionStatus === "VIP") {
            resolve("Show Video");
        }
        else if (getSubscriptionStatus === "Free") {
            resolve("Show Trailer");
        }
        else {
            reject("No Video");
        }
    })
}

async function main3() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status))
    }
    catch (e) {
        console.log(e);
        videoRef.innerHTML = e;
    }
}

main3();