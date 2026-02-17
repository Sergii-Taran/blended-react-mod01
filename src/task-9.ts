// Задача 9
// Завдання:
// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item: number) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item: string) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  },
};

numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItem(1));

stringContainer.addItem("hello");
stringContainer.addItem("world");
console.log(stringContainer.getItem(0));

function getLastElement<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

console.log(getLastElement(numberContainer.items));
console.log(getLastElement(stringContainer.items));
