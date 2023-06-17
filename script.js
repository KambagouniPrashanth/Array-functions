let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr.filter(employee => employee.profession === "developer");
  developers.map(employee => {
    console.log(employee);
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filteredEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log(filteredEmployees);
}

function concatenateArray() {
  const additionalEmployees = [
    { id: 4, name: "emma", age: "22", profession: "developer" },
    { id: 5, name: "mark", age: "21", profession: "designer" },
    { id: 6, name: "lisa", age: "23", profession: "developer" }
  ];

  const combinedArray = arr.concat(additionalEmployees);
  console.log(combinedArray);
}
