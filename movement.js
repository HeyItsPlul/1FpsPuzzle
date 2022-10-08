let playerID;
let bushHitVal = 5
let stickCount = 0
let sheerCount = 0
let sheer = 0

const stickCountDiv = document.getElementById('stickCount')
const sheerCountDiv = document.getElementById('sheerCount')

document.addEventListener('keyup', (e) => {
    if (document.getElementById('151'))
    if (e.code === "ArrowUp") {
        movement('up')
    }
    if (e.code === "ArrowDown") {
        movement('down')
    }
    if (e.code === "ArrowLeft") {
        movement('left')
    }
    if (e.code === "ArrowRight") {
        movement('right')
    }
    if (e.key === "s" || e.code === "S" ) {
        if (sheer == 1 && sheerCount > 0) {
            sheer = 0
            toolEquipped = 0
            document.getElementById('sheerCountDiv').style.borderColor = 'rgb(0, 223, 223) '
        } else if (sheerCount > 0) {
            sheer = 1
            toolEquipped = 1
            document.getElementById('sheerCountDiv').style.borderColor = 'green'
        }
    }


  });

function movement(direction) {

    if (direction == 'left' 
        && playerID != 1
        && playerID != 14
        && playerID != 27
        && playerID != 40
        && playerID != 53
        && playerID != 66
        && playerID != 79
        && playerID != 92
        && playerID != 95
        && playerID != 105
        && playerID != 118
        && playerID != 131
        && playerID != 144
        && playerID != 157) {


        let moveTo = document.getElementById(playerID - 1)
        let remove = document.getElementById(playerID)

        const Colision = document.getElementById(playerID - 1)

        if (Colision.classList.contains('collider') == false) {
            moveTo.classList.add('player')
            moveTo.classList.remove('cube')
            moveTo.classList.add('playerLeft')
        
            remove.classList.add('cube')
            remove.classList.remove('player')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerDown')
            remove.classList.remove('playerRight')
            playerID--

            if (moveTo.classList.contains('key')) {
                moveTo.classList.remove('key')

                keyCount++
                keyCountDiv.innerText = keyCount
            }
            if (moveTo.classList.contains('stick')) {
                moveTo.classList.remove('stick')

                stickCount++
                stickCountDiv.innerText = stickCount
            }
            if (moveTo.classList.contains('sheer')) {
                moveTo.classList.remove('sheer')

                sheerCount++
                sheerCountDiv.innerText = sheerCount
            }
        } else {
            remove.classList.add('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerDown')
            remove.classList.remove('playerRight')

            if (moveTo.classList.contains('door') && keyCount > 0 && remove.classList.contains('playerLeft') && moveTo.classList.contains('doorRight')) {
                moveTo.classList.remove('collider')
                moveTo.classList.remove('door')

                moveTo.classList.add('doorLeftOpen')
                keyCount--
                keyCountDiv.innerText = keyCount
                moveTo.classList.remove('doorLeft')
            }
            if (moveTo.classList.contains('bush')&& remove.classList.contains('playerLeft') && sheer == 1) {
                bushHitVal--
                console.log(bushHitVal)

                if (bushHitVal <= 0) {
                    moveTo.classList.remove('bush')
                    moveTo.classList.remove('collider')
                    moveTo.classList.add('stick')
                    bushHitVal = 5
                }

            }
        }

    }

    if (direction == 'right'
        && playerID != 13
        && playerID != 26
        && playerID != 39
        && playerID != 52
        && playerID != 65
        && playerID != 78
        && playerID != 91
        && playerID != 104
        && playerID != 117
        && playerID != 130
        && playerID != 143
        && playerID != 156
        && playerID != 169) {



        let moveTo = document.getElementById(Number(playerID) + 1)
        let remove = document.getElementById(Number(playerID))
    
        const Colision = document.getElementById(Number(playerID) + 1)

        if (Colision.classList.contains('collider') == false) {
            moveTo.classList.add('player')
            moveTo.classList.remove('cube')
            moveTo.classList.add('playerRight')
        
            remove.classList.add('cube')
            remove.classList.remove('player')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerDown')
            remove.classList.remove('playerRight')

            if (moveTo.classList.contains('key')) {
                moveTo.classList.remove('key')

                keyCount++
                keyCountDiv.innerText = keyCount
            }
            playerID++

            if (moveTo.classList.contains('stick')) {
                moveTo.classList.remove('stick')

                stickCount++
                stickCountDiv.innerText = stickCount
            }

            if (moveTo.classList.contains('sheer')) {
                moveTo.classList.remove('sheer')

                sheerCount++
                sheerCountDiv.innerText = sheerCount
            }
        }  else {
            remove.classList.add('playerRight')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerDown')

            if (moveTo.classList.contains('door') && keyCount > 0 && remove.classList.contains('playerRight') && moveTo.classList.contains('doorLeft')) {
                moveTo.classList.remove('collider')
                moveTo.classList.remove('door')

                moveTo.classList.add('doorRightOpen')
                keyCount--
                keyCountDiv.innerText = keyCount
                moveTo.classList.remove('doorRight')
            }
            
            if (moveTo.classList.contains('bush') && sheer == 1 && remove.classList.contains('playerRight')) {
                bushHitVal--
                console.log(bushHitVal)

                if (bushHitVal == 0) {
                    moveTo.classList.remove('bush')
                    moveTo.classList.remove('collider')
                    moveTo.classList.add('stick')
                    bushHitVal = 5
                }

            }
        }

    }

    if (direction == 'up'
    && playerID != 1
    && playerID != 2
    && playerID != 3
    && playerID != 4
    && playerID != 5
    && playerID != 6
    && playerID != 7
    && playerID != 8
    && playerID != 9
    && playerID != 10
    && playerID != 11
    && playerID != 12
    && playerID != 13) {

        let moveTo = document.getElementById(playerID - 13)
        let remove = document.getElementById(playerID)
    
        const Colision = document.getElementById(playerID -13)

        if (Colision.classList.contains('collider') == false) {
            moveTo.classList.add('player')
            moveTo.classList.remove('cube')
            moveTo.classList.add('playerUp')
        
            remove.classList.add('cube')
            remove.classList.remove('player')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerDown')
            remove.classList.remove('playerRight')
            playerID -= 13

            if (moveTo.classList.contains('key')) {
                moveTo.classList.remove('key')

                keyCount++
                keyCountDiv.innerText = keyCount
            }
            if (moveTo.classList.contains('stick')) {
                moveTo.classList.remove('stick')

                stickCount++
                stickCountDiv.innerText = stickCount
            }

            if (moveTo.classList.contains('sheer')) {
                moveTo.classList.remove('sheer')

                sheerCount++
                sheerCountDiv.innerText = sheerCount
            }
        }  else {
            remove.classList.add('playerUp')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerDown')
            remove.classList.remove('playerRight')

            if (moveTo.classList.contains('door') && keyCount > 0 && remove.classList.contains('playerUp') && moveTo.classList.contains('doorUp')) {
                moveTo.classList.remove('collider')
                moveTo.classList.remove('door')

                moveTo.classList.add('doorUpOpen')
                keyCount--
                keyCountDiv.innerText = keyCount
                moveTo.classList.remove('doorUp')
            }
            if (moveTo.classList.contains('bush') && sheer == 1 && remove.classList.contains('playerUp')) {
                bushHitVal--
                console.log(bushHitVal)

                if (bushHitVal == 0) {
                    moveTo.classList.remove('bush')
                    moveTo.classList.remove('collider')
                    moveTo.classList.add('stick')
                    bushHitVal = 5
                }

            }
        }
    }

    if (direction == 'down'
    && playerID != 169
    && playerID != 168
    && playerID != 167
    && playerID != 166
    && playerID != 165
    && playerID != 164
    && playerID != 163
    && playerID != 162
    && playerID != 161
    && playerID != 160
    && playerID != 159
    && playerID != 158) {

        let moveTo = document.getElementById(playerID + 13)
        let remove = document.getElementById(playerID)
    
        const Colision = document.getElementById(playerID + 13)

        if (Colision.classList.contains('collider') == false) {
            moveTo.classList.add('player')
            moveTo.classList.remove('cube')
            moveTo.classList.add('playerDown')
        
            remove.classList.add('cube')
            remove.classList.remove('player')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerDown')
            remove.classList.remove('playerRight')
            playerID += 13

            if (moveTo.classList.contains('key')) {
                moveTo.classList.remove('key')

                keyCount++
                keyCountDiv.innerText = keyCount
            }
            if (moveTo.classList.contains('stick')) {
                moveTo.classList.remove('stick')
            }

            if (moveTo.classList.contains('sheer')) {
                moveTo.classList.remove('sheer')

                sheerCount++
                sheerCountDiv.innerText = sheerCount
            }
        } else {
            remove.classList.add('playerDown')
            remove.classList.remove('playerLeft')
            remove.classList.remove('playerUp')
            remove.classList.remove('playerRight')

            if (moveTo.classList.contains('door') && keyCount > 0 && remove.classList.contains('playerDown') && moveTo.classList.contains('doorDown')) {
                moveTo.classList.remove('collider')
                moveTo.classList.remove('door')

                moveTo.classList.add('doorDownOpen')
                keyCount--
                keyCountDiv.innerText = keyCount
                moveTo.classList.remove('doorDown')
            }
            if (moveTo.classList.contains('stick')) {
                moveTo.classList.remove('stick')

                stickCount++
                stickCountDiv.innerText = stickCount
            }
            if (moveTo.classList.contains('bush') && sheer == 1&& remove.classList.contains('playerDown')) {
                bushHitVal--
                console.log(bushHitVal)

                if (bushHitVal == 0) {
                    moveTo.classList.remove('bush')
                    moveTo.classList.remove('collider')
                    moveTo.classList.add('stick')
                    bushHitVal = 5
                }

            }
        }

    }

}


