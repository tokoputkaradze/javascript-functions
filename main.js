// ფუნქცია 1: რიცხვი არის თუ არა 5-ის ჯერადი
function isMultipleOfFive(number) {
    return number % 5 === 0;
}

// ფუნქცია 2: ფასდაკლეების შედეგ გადასახდელი თანხა
function calculateDiscountPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}

// ფუნქცია 3: ვალუტის კოდის შესაბამისი სიმბოლო
function getCurrencySymbolFromCode(code) {
    switch (code) {
        case 'USD': return '$';
        case 'EUR': return '€';
        case 'GEL': return 'ლ';
        default: return 'Unknown currency code';
    }
}

// ფუნქცია 4: Uppercase სტრინგის გადაყვანა Lowercase-ში
function toLowerCaseString(input) {
    return input.toLowerCase();
}

// ფუნქცია 5: კენტი რიცხვებას გაფილტვრა
function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

// ფუნქცია 6*: უმცირესი ფასის მქონე ელემენტის პოვნა
function findCheapestProduct(products) {
    return products.reduce((cheapest, product) => {
        return product.price < cheapest.price ? product : cheapest;
    });
}

// ფუნქცია 7*: find ფუნქცია კონკრეტული title ველისთვის
function findObjectByTitle(objects, title) {
    return objects.find(obj => obj.title === title) || 'Object not found';
}

// ტესტის მონაცემები და გამოყენება
function main() {
    console.log("1. რიცხვი არის თუ არა 5-ის ჯერადი:");
    console.log(isMultipleOfFive(10)); // true
    console.log(isMultipleOfFive(7));  // false

    console.log("\n2. ფასდაკლების შემდეგ გადასახდელი თანხა:");
    console.log(calculateDiscountPrice(1000, 10)); // 900

    console.log("\n3. ვალუტის კოდის შესაბამისი სიმბოლო:");
    console.log(getCurrencySymbolFromCode('USD')); // $
    console.log(getCurrencySymbolFromCode('GEL')); // ლ
    console.log(getCurrencySymbolFromCode('JPY')); // yen

    console.log("\n4. Uppercase სტრინგის გადაყვანა Lowercase-ში:");
    console.log(toLowerCaseString("MY NAME IS JANE")); // my name is jane

    console.log("\n5. კენტი რიცხვების გაფილტვრა:");
    console.log(filterOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]

    const products = [
        { id: 1, name: 'Product A', price: 50 },
        { id: 2, name: 'Product B', price: 30 },
        { id: 3, name: 'Product C', price: 20 }
    ];
    console.log("\n6*. უმცირესი ფასის მქონე ელემენტის პოვნა:");
    console.log(findCheapestProduct(products)); // { id: 3, name: 'Product C', price: 20 }

    const items = [
        { id: 1, title: 'Book A' },
        { id: 2, title: 'Book B' },
        { id: 3, title: 'Book C' }
    ];
    console.log("\n7*. find ფუნქცია კონკრეტული title ველისთვის:");
    console.log(findObjectByTitle(items, 'Book B')); // { id: 2, title: 'Book B' }
    console.log(findObjectByTitle(items, 'Book Z')); // Object not found
}

main();