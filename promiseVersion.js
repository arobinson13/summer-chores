function mowYard(name) {
    
    return new Promise((resolve, reject) => {
        setTimeout(function () {
        resolve(`${name} mowed the yard.`)
    }, 2000);
    })
    
}

function weedEat(name) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
        if (Math.random() > .2) {
            resolve(`${name} finished using the weed eater.`)
        }
        else {
            reject(`${name} fell asleep after mowing the yard.`)
        }
    }, 1500);
    })
    
}

function trimHedges(name) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
        if (Math.random() > .4) {
            resolve(`${name} finished trimming the hedges.`)
        }
        else {
            reject(`${name} fell asleep after weed eating the yard.`)
        }
    }, 1000);
    })
}

function collectWood(name) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
        if (Math.random() > .6) {
            resolve(`${name} finished collecting wood.`)
        }
        else {
            reject(`${name} fell asleep after trimming the hedges.`)
        }
    }, 2500);
    })
}

function waterGarden(name) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
        if (Math.random() > .8) {
            resolve(`${name} finished watering the garden.`)
        }
        else {
            reject(`${name} fell asleep after collecting wood.`)
        }
    }, 500);
    })
}

function doSummerChores(name) {

    mowYard('Alesha').then(value => { console.log(value); return weedEat('Alesha') })
    .then(value => { console.log(value); return trimHedges('Alesha') })
    .then(value => { console.log(value); return collectWood('Alesha') })
    .then(value => { console.log(value); return waterGarden('Alesha') })
    .then(value => { console.log(value); console.log(`${name} finished their chores!`) })
    .catch(error => console.error(error));
}

doSummerChores('Alesha')