async function newFormHandler(event) {
    event.preventDefault();
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phoneNum = document.querySelector('input[name="phoneNum"]').value;
    const employeeID = document.querySelector('input[name="employeeID"]').value;
    const role = document.querySelector('input[name="role"]').value;
    const department = document.querySelector('input[name="department"]').value;
    const managerFirst = document.querySelector('input[name="managerFirst"]').value;
    const managerLast = document.querySelector('input[name="managerLast"]').value;
    const salary = document.querySelector('input[name="salary"]').value;

    const response = await fetch(`/api/addemployee`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNum,
        employeeID,
        role,
        department,
        managerFirst,
        managerLast,
        salary
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
  };

  $('#continue').click(newFormHandler);
  // document.getElementById("continue").addEventListener("click", newFormHandler);