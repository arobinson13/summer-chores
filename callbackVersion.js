function mowYard(name, callback) {
    setTimeout(function () {
        console.log(`${name} mowed the yard.`)
        callback();
    }, 2000);
}

function weedEat(name, callback) {
    setTimeout(function () {
        if (Math.random() > .2) {
            console.log(`${name} finished using the weed eater.`)
        callback();
        }
        else {
            console.log(`${name} fell asleep after mowing the yard.`)
        }
    }, 1500);
}

function trimHedges(name, callback) {
    setTimeout(function () {
        if (Math.random() > .4) {
            console.log(`${name} finished trimming the hedges.`)
        callback();
        }
        else {
            console.log(`${name} fell asleep after weed eating the yard.`)
        }
    }, 1000);
}

function collectWood(name, callback) {
    setTimeout(function () {
        if (Math.random() > .6) {
            console.log(`${name} finished collecting wood.`)
        callback();
        }
        else {
            console.log(`${name} fell asleep after trimming the hedges.`)
        }
    }, 2500);
}

function waterGarden(name, callback) {
    setTimeout(function () {
        if (Math.random() > .8) {
            console.log(`${name} finished watering the garden.`)
        callback();
        }
        else {
            console.log(`${name} fell asleep after collecting wood.`)
        }
    }, 500);
}

function finishedChores(name) {
    console.log(`${name} finished their chores!`)
}

function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        finishedChores(name);
                    });
                });
            });
        });
    });
}

doSummerChores('Alesha');