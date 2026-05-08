// 1. Interface (Data ka structure define karne ke liye)
interface Product {
    id: number;
    name: string;
    category: string;
}

// 2. Deep Clone function with Generics
function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

// 3. Array GroupBy function
function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((result, currentValue) => {
        const groupKey = String(currentValue[key]);
        (result[groupKey] = result[groupKey] || []).push(currentValue);
        return result;
    }, {} as Record<string, T[]>);
}

// Testing Sample
const inventory: Product[] = [
    { id: 101, name: "Laptop", category: "Electronics" },
    { id: 102, name: "Phone", category: "Electronics" },
    { id: 103, name: "Table", category: "Furniture" }
];

console.log("TS GroupBy Result:", groupBy(inventory, "category"));