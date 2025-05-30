function mowYard(callback, name) {
    setTimeout(function () {
        console.log("PERSON'S NAME mowed the yard.")
        callback(weedEat, name);
    }, 2000);
}

function weedEat(callback, name) {
    setTimeout(function () {
        console.log("PERSON'S NAME finished using the weed eater.")
        callback(trimHedges, name);
    }, 1500);
    console.log("PERSON'S NAME fell asleep after mowing the yard.")
}

function trimHedges(callback, name) {
    setTimeout(function () {
        console.log("PERSON'S NAME finished trimming the hedges.")
        callback(collectWood, name);
    }, 1000);
    console.log("PERSON'S NAME fell asleep after weed eating the yard.")
}

function collectWood(callback, name) {
    setTimeout(function () {
        console.log("PERSON'S NAME finished collecting wood.")
        callback(waterGarden, name);
    }, 2500);
    console.log("PERSON'S NAME fell asleep after trimming the hedges.")
}

function waterGarden(callback, name) {
    setTimeout(function () {
        console.log("PERSON'S NAME finished watering the garden.")
        callback(doSummerChores, name);
    }, 500);
    console.log("PERSON'S NAME fell asleep after collecting wood.")
}

function doSummerChores(name) {
    mowYard();
    console.log("PERSON'S NAME finsihed all their chores!")
}

mowYard(weedEat, 'Bob');