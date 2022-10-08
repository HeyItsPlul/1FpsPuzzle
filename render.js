const gameWindow = document.getElementById('parent')
const startBtn = document.getElementById('startBtn')
const controlsDiv = document.getElementById('controlsDiv')
const lvlBtnsDiv = document.getElementById('lvlBtnsDiv')

const lvl1 = {  bush: [28],
                wall: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 144, 131, 118, 105, 92, 79, 66, 53, 40, 27, 14, 20, 33, 59, 72, 85, 86, 87, 89, 90, 71, 70, 69, 68, 67, 98, 111, 124, 137, 150],
                chest: [17],
                doorUp: [],
                doorDown: [],
                doorLeft: [46],
                doorRight: [124],
                sheer: [58],
                water: [88],
                keyEnemy: [127],
                flag: [145]
                }

const lvl2 = {bush: [29, 31, 61],
    wall: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 168, 167, 166, 165, 164, 163, 162, 161, 160, 159, 158, 157, 156, 144, 131, 118, 105, 92, 79, 66, 53, 40, 27, 14, 41, 42, 43, 44, 45, 46, 47, 48, 49, 62, 75, 88, 114, 115, 116, 127, 140, 139, 138, 137, 136, 135, 122, 109, 108, 106, 96, 70, 57],
    chest: [103],
    doorUp: [],
    doorDown: [],
    doorLeft: [151],
    doorRight: [101],
    sheer: [123],
    water: [83],
    keyEnemy: [121],
    flag: [155],
    fire: [107],
    sheep: [56]}

function levelSelection() {
    lvlBtnsDiv.style.opacity = '1'
    startBtn.remove()
    lvlBtnsDiv.style.height = 'fit-content'
    lvlBtnsDiv.style.width = 'fit-content'

}

function render(Lvl) {
    lvlBtnsDiv.remove()

    for (let i = 1; i <= 13 * 13; i++ ) {
        setTimeout(() => gameWindow.innerHTML += `<div class="cube " id="${i}" ></div>`, 50)
        
    }

    setTimeout(() => player = document.getElementById(15).classList.remove('cube') , 250)
    setTimeout(() => player = document.getElementById(15).classList.add('player') , 250)


    controlsDiv.style.opacity = '1'

    
    setTimeout(() => mapRender(Lvl), 4000)

}

function mapRender(Lvl) {

    for (let i = 0; i < Lvl.bush.length; i++) {
    
        let wall = document.getElementById(Lvl.bush[i])
        wall.classList.add('bush')
        wall.classList.add('collider')
        wall.classList.remove('cube')
        wall.classList.remove('wall')
        wall.classList.remove('chest')
    
        }

    for (let i = 0; i < Lvl.wall.length; i++) {
    
        let wall = document.getElementById(Lvl.wall[i])
        wall.classList.add('wall')
        wall.classList.add('collider')
        wall.classList.remove('cube')
        wall.classList.remove('bush')
        wall.classList.remove('chest')
    
        }

    for (let i = 0; i < Lvl.chest.length; i++) {
    
        let chest = document.getElementById(Lvl.chest[i])
        chest.classList.add('chest')
        chest.classList.add('collider')
        chest.classList.remove('cube')
        chest.classList.remove('bush')
        chest.classList.remove('wall')
    
        }

    for (let i = 0; i < Lvl.doorDown.length; i++) {
    
        let door = document.getElementById(Lvl.doorDown[i])
        door.classList.add('door')
        door.classList.add('collider')
        door.classList.add('doorDown')
        door.classList.remove('cube')
        door.classList.remove('bush')
        door.classList.remove('wall')
        door.classList.remove('chest')
    
        }

    for (let i = 0; i < Lvl.doorUp.length; i++) {
    
        let door = document.getElementById(Lvl.doorUp[i])
        door.classList.add('doorUp')
        door.classList.add('door')
        door.classList.add('collider')
        door.classList.remove('cube')
        door.classList.remove('bush')
        door.classList.remove('wall')
        door.classList.remove('chest')
        
        }

    for (let i = 0; i < Lvl.doorLeft.length; i++) {
    
        let door = document.getElementById(Lvl.doorLeft[i])
        door.classList.add('doorLeft')
        door.classList.add('door')
        door.classList.add('collider')
        door.classList.remove('cube')
        door.classList.remove('bush')
        door.classList.remove('wall')
        door.classList.remove('chest')
        
        }
    for (let i = 0; i < Lvl.doorRight.length; i++) {
    
        let door = document.getElementById(Lvl.doorRight[i])
        door.classList.add('doorRight')
        door.classList.add('door')
        door.classList.add('collider')
        door.classList.remove('cube')
        door.classList.remove('bush')
        door.classList.remove('wall')
        door.classList.remove('chest')
        
        }

    for (let i = 0; i < Lvl.sheer.length; i++) {
    
        let door = document.getElementById(Lvl.sheer[i])
        door.classList.add('sheer')
        door.classList.remove('door')
        door.classList.remove('cube')
        door.classList.remove('bush')
        door.classList.remove('wall')
        door.classList.remove('chest')
        
        }

    for (let i = 0; i < Lvl.water.length; i++) {
    
        let door = document.getElementById(Lvl.water[i])
        door.classList.add('water')
        door.classList.add('collider')
        door.classList.remove('cube')
        
        }

    for (let i = 0; i < Lvl.keyEnemy.length; i++) {
    
        let door = document.getElementById(Lvl.keyEnemy[i])
        door.classList.add('keyEnemy')
        door.classList.add('collider')
        door.classList.remove('cube')
        
        }

    for (let i = 0; i < Lvl.flag.length; i++) {
    
        let door = document.getElementById(Lvl.flag[i])
        door.classList.add('flag')
        door.classList.remove('cube')
        
        }

    for (let i = 0; i < Lvl.fire.length; i++) {
    
        let door = document.getElementById(Lvl.fire[i])
        door.classList.add('fire')
        door.classList.add('collider')
        door.classList.remove('cube')
        
        }

    for (let i = 0; i < Lvl.sheep.length; i++) {
    
        let door = document.getElementById(Lvl.sheep[i])
        door.classList.add('sheep')
        door.classList.add('collider')
        door.classList.remove('cube')
        
        }


}


