// Задача 7

// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
// ];

// Завдання:
// Створіть інтерфейс User, який описує структуру об’єкта з іменем і віком.
// Типізуйте змінну users.
// Додайте ще одного користувача до масиву, дотримуючись структури.
// Переконайтеся, що TypeScript не дозволяє додати об’єкт без обов’язкових полів (name, age).

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Sergio", age: 55 },
];

users.push({ name: "Tom" }); // ❌ помилка — немає age
users.push({ age: 40 }); // ❌ помилка — немає name
users.push({ name: "Eva", age: 22 }); // ✅
