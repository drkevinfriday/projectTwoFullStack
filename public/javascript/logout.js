async function logout(event) {
    console.log('clicked logout')
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
};
  
document.getElementById('log-out').addEventListener('click', logout);
  