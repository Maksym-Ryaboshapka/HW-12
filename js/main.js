// Task 1

const user = {
  hobby: "football",
  premium: false,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);

for (const key of userKeys) {
	console.log(`${key}: ${user[key]}`);
}

// Task 2

const countProps = (obj) => {
	const objEntries = Object.entries(obj);

  return objEntries.length;
};

const testObj = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(countProps(testObj));

// Task 3

const findBestEmployee = (employees) => {
  const employeeTasks = Object.values(employees);
  const maxTasks = Math.max(...employeeTasks);
  const employeesEntries = Object.entries(employees);

  let message;

  for (const employee of employeesEntries) {
    if (employee[1] === maxTasks) {
      message = `${employee[0]}: ${employee[1]}`;
    }
  }

  return message;
};

const employees = {
  john: 16,
  bob: 11,
  mark: 15,
};

console.log(findBestEmployee(employees));

// Task 4

const countTotalSalary = (employees) => {
  const employeesValues = Object.values(employees);
  let totalSalary = 0;

  for (const employee of employeesValues) {
    totalSalary += employee;
  }

  return totalSalary;
};

const employeesSalary = {
  john: 13000,
  bob: 10000,
  mark: 11500,
};

console.log(countTotalSalary(employeesSalary));

// Task 5

const getAllPropValues = (arr, prop) => {
  const arrOfAllPropValues = [];

  for (const item of arr) {
    arrOfAllPropValues.push(item[prop]);
  }

  return arrOfAllPropValues;
};

const arrOfObj = [
  {
    x: 1,
    y: 2,
    z: 3,
  },
  {
    x: 8,
    y: 7,
    z: 6,
  },
  {
    x: 5,
    y: 9,
    z: 1,
  },
];

console.log(getAllPropValues(arrOfObj, "y"));

// Task 6

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalProductPrice; 
 
  for (const item of allProdcuts) {
    if (item["name"] === productName) {
      totalProductPrice = item["price"] * item["kilograms"];
    }
  }

  return totalProductPrice;
};

const products = [
  {
    name: "груша",
    price: 60,
    kilograms: 4,
  },
  {
    name: "огірок",
    price: 45,
    kilograms: 2,
  },
  {
    name: "кавун",
    price: 80,
    kilograms: 1.5,
  },
];

console.log(calculateTotalPrice(products, "груша"));