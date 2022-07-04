

// async function signupFormHandler(event) {
//     event.preventDefault();
//     console.log('signup works')
  
//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (username && email && password) {
//       const response =  await fetch('/api/users/signup', {
//         method: 'post',
//         body: JSON.stringify({
//           username,
          
//           email,
//           password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
//       console.log(response)

//       //check the response status
//       if(response.ok){
//         console.log('success')
//         document.location.replace('login')
//       }else{
//         alert(response.statusText);
//       }
  
//     }
//   }

async function loginFormHandler(event) {
    event.preventDefault();
    console.log('loginworks')
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  

    console.log(email)
    console.log(password)
    if (email && password) {
      const response =  await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password,

        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response)

      //check the response status
      if(response.ok){

        document.location.replace('homepage')
      }else{
        alert(response.statusText);
      }
    }
  }

document.getElementById('button1').addEventListener('click', loginFormHandler)

