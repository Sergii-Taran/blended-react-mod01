// Задача 5

// function createUser({name, age}) {
//   return {
//     name,
//     age,
//     isAdmin: false
//   };
// }

// createUser({ name: "Alice", age: 30 });

// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.

// -----------------------------

// function createUser({ name, age }: { name: string; age: number }): {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// } {
//   return {
//     name,
//     age,
//     isAdmin: false,
//   };
// }

// createUser({ name: "Alice", age: 30 });

// -----------------------------

interface CreateUserParams {
  name: string;
  age: number;
}

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: CreateUserParams): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
