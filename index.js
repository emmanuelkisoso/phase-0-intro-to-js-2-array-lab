let cats=["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat() {
    cats.pop('Garfield')
}
function destructivelyRemoveFirstCat() {
    cats.shift('Milo')
}
function appendCat(name) {
    let copyOfCats=cats.slice();
    copyOfCats.push('Broom');
    return copyOfCats;
}
function prependCat(name) {
    let copyOfCats=cats.slice();
    copyOfCats.unshift('Arnold');
    return copyOfCats;
}
function removeLastCat(name) {
    let copyOfCats=cats.slice();
    copyOfCats.pop('Garfield');
    return copyOfCats;
}
function removeFirstCat(name) {
    let copyOfCats=cats.slice();
    copyOfCats.shift('Milo');
    return copyOfCats;
}
