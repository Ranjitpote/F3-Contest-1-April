let employeeArray = [];
let employeeCount = employeeArray.length;

document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;
  let employeeExist = false;

  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].name === name && employeeArray[i].profession === profession && employeeArray[i].age === age) {
      employeeExist = true;
      break;
    }
  }

  if (employeeExist) {
    document.getElementById("error").innerHTML = "Employee already exists.";
    document.getElementById("success").innerHTML = "";
  } else if (!name || !profession || !age) {
    document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
    document.getElementById("success").innerHTML = "";
  } else {
    let newEmployee = {
      id: employeeCount + 1,
      name: name,
      profession: profession,
      age: age
    }
    employeeArray.push(newEmployee);
    employeeCount++;
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "Success : Employee Added!";
    updateTable();
  }
});


function updateTable() {
  let employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";
  if (employeeArray.length === 0) {
    employeeList.innerHTML = "You have 0 employees.";
  } else {
    for (let i = 0; i < employeeArray.length; i++) {
      let employee = employeeArray[i];
      employeeList.innerHTML += `
        <tr>
          <td>${employee.id}.</td>
          <td>Name : ${employee.name}</td>
          <td>Profession : ${employee.profession}</td>
          <td>Age : ${employee.age}</td>
          <td><button onclick="deleteEmployee(${employee.id})">Delete</button></td>
        </tr>
      `;
    }
  }
}


function deleteEmployee(id) {
  let newArray = employeeArray.filter((employee) => employee.id !== id);
  employeeArray = newArray;
  updateTable();
}
