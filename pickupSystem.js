
let keyCountDiv = document.getElementById('keyCount')

document.addEventListener('keyup', (e) => {
    let chestLocationRight = document.getElementById(playerID + 1)
    let chestLocationLeft = document.getElementById(playerID-1)
    let chestLocationDown = document.getElementById(playerID+13)
    let chestLocationUp = document.getElementById(playerID-13)
    const playerDiv = document.getElementById(playerID)

    if (e.key == 0) {
        if (chestLocationRight.classList.contains('chest') && playerDiv.classList.contains('playerRight')) {
            chestLocationRight.classList.remove('chest')
            chestLocationRight.classList.add('key')
            chestLocationRight.classList.remove('collider')

        }
        if (chestLocationLeft.classList.contains('chest') && playerDiv.classList.contains('playerLeft')) {
            chestLocationLeft.classList.remove('chest')
            chestLocationLeft.classList.add('key')
            chestLocationLeft.classList.remove('collider')

        }
        if (chestLocationDown.classList.contains('chest') && playerDiv.classList.contains('playerDown')) {
            chestLocationDown.classList.remove('chest')
            chestLocationDown.classList.add('key')
            chestLocationDown.classList.remove('collider')

        }
        if (chestLocationUp.classList.contains('chest') && playerDiv.classList.contains('playerUp')) {
            chestLocationUp.classList.remove('chest')
            chestLocationUp.classList.add('key')
            chestLocationUp.classList.remove('collider')

        }

    }



    if (e.key == 'Q' || e.key == 'q') {
        if (chestLocationRight.classList.contains('key') && playerDiv.classList.contains('playerRight')) {
            chestLocationRight.classList.remove('key')
            chestLocationRight.classList.add('cube')

        }
        if (chestLocationLeft.classList.contains('key') && playerDiv.classList.contains('playerLeft')) {
            chestLocationLeft.classList.remove('key')
            chestLocationLeft.classList.add('cube')

        }
        if (chestLocationDown.classList.contains('key') && playerDiv.classList.contains('playerDown')) {
            chestLocationDown.classList.remove('key')
            chestLocationDown.classList.add('cube')

        }
        if (chestLocationUp.classList.contains('key') && playerDiv.classList.contains('playerUp')) {
            chestLocationUp.classList.remove('key')
            chestLocationUp.classList.add('cube')

        }

    } 

  });