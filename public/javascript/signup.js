
async function signupFormHandler(event) {
    event.preventDefault();
    console.log('signup works')
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response =  await fetch('/api/users/signup', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          
          email,
          password
        }),
      });
      console.log(response)

      //check the response status
      if(response.ok){
        console.log('success')
        document.location.replace('/')
      }else{
        alert(response.statusText);
      }
      
    }
  }

  document.getElementById('button3').addEventListener('click', signupFormHandler)