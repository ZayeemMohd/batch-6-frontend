function saveMsg1() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train 1 reached ");
      } else {
        reject("Train 1 crashed");
      }
    }, delay * 1000);
  });
}

function saveMsg2() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train 2 reached");
      } else {
        reject("Train 2 crashed");
      }
    }, delay * 1000);
  });
}

function saveMsg3() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4);
    let isDBAvailable = Math.random() > 0.4;

    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Train 3 reahced");
      } else {
        reject("Train 3 crashed");
      }
    }, delay * 1000);
  });
}

// promise consumption:
// approach 1: .then().catch() (promise chaining)
// approach 2: async await

// async function approach2() {
//   try {
//     let resolveMsg1 = await saveMsg1();
//     console.log(resolveMsg1);

//     let resolveMsg2 = await saveMsg2();
//     console.log(resolveMsg2);

//     let resolveMsg3 = await saveMsg3();
//     console.log(resolveMsg3);

//     console.log("All trains reached");
//   } catch (rejectMsg) {
//     console.log(rejectMsg)
//   }
// }

// approach2();

// Example 2: Registeration form

// step1: submitting registration form

// creating promisified async function using 2. new Promise keyword
// function register() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
//     let isPass = Math.random() > 0.2;
//     setTimeout(() => {
//       if (isPass) {
//         resolve("Registraion form submitted by user");
//       } else {
//         reject("Registration form not submitted by user");
//       }
//     }, delay);
//   });
// }

// creating promisified async function using 2. async keyword
async function register() {
  let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
  let isPass = Math.random() > 0.2;
  setTimeout(() => {
    if (isPass) {
      return "Registraion form submitted by user"; // return is equal to resolove() in async wala promisified fn
    } else {
      throw new Error("Registration form not submitted by user"); // throw is equal to reject() in async wala promisified fn
    }
  }, delay);
}

function sendVerificationEmail() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
    let isPass = Math.random() > 0.2;
    setTimeout(() => {
      if (isPass) {
        resolve("Verified by user");
      } else {
        reject("User didn't verify the email");
      }
    }, delay);
  });
}

function saveToDB() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
    let isPass = Math.random() > 0.2;
    setTimeout(() => {
      if (isPass) {
        resolve("User saved to DB");
      } else {
        reject("User not saved to DB");
      }
    }, delay);
  });
}

function welcomeSMS() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3) * 1000; // creating a random delay in milliseconds
    let isPass = Math.random() > 0.2;
    setTimeout(() => {
      if (isPass) {
        resolve("Welcome sms send");
      } else {
        reject("Welcome sms unable to send");
      }
    }, delay);
  });
}

async function newUserRegistraiton() {
  try {
    let response1 = await register();
    console.log(response1);

    let response2 = await sendVerificationEmail();
    console.log(response2);

    let response3 = await saveToDB();
    console.log(response3);

    let response4 = await welcomeSMS();
    console.log(response4);

    console.log("User succesfully registered and all steps completed");
  } catch (rejectMsg) {
    console.log(rejectMsg);
  }
}

newUserRegistraiton();
