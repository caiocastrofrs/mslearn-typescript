/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.
    TODO: Add and apply a type variable. */
var DataStore = /** @class */ (function () {
    function DataStore() {
        this._data = new Array(10);
    }
    DataStore.prototype.AddOrUpdate = function (index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            console.log("Index is greater than 10");
        }
    };
    DataStore.prototype.GetData = function (index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    };
    return DataStore;
}());
var cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
var numbers = new DataStore();
numbers.AddOrUpdate(0, 1);
numbers.AddOrUpdate(1, 2);
numbers.AddOrUpdate(2, 3);
numbers.AddOrUpdate(3, 4);
console.log(numbers.GetData(1));
console.log(numbers.GetData(2));
var pessoas = new DataStore();
var caio = { nome: "Caio", idade: 23 };
var icaro = { nome: "Ícaro", idade: 22 };
pessoas.AddOrUpdate(0, caio);
pessoas.AddOrUpdate(1, icaro);
console.log(pessoas.GetData(0));
console.log(pessoas.GetData(1));
