async function newFormHandler(event) {
  event.preventDefault();
  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;
  const department = document.querySelector('input[name="department"]').value;
  const email = document.querySelector('input[name="email"]').value;

  const response = await fetch(`/api/addemployee`, {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      department,
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/api/employees");
  } else {
    alert(response.statusText);
  }
}
document.getElementById("continue").addEventListener("click", newFormHandler);
