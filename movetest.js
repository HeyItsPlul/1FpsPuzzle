let playerID = 15;
let bushHitVal = 5
let stickCount = 0
let sheerCount = 0
let plankCount = 0
let sheer = 0
let directionVal;
let toolEquipped = 0
let keyCount = 0
let playerHealth = 5
let EnemyHealth = 10
let stringCount = 0
let bucketCount = 0
let filledBucket = 0
let fillbucketFunc;
let bow = 0
let bowCount = 0
let lockCount = 0

const stickCountDiv = document.getElementById('stickCount')
const sheerCountDiv = document.getElementById('sheerCount')
const stickCraft = document.getElementById('stickCraftBtn')
const plankCountDivBtn = document.getElementById('plankCountBtn')
const keyEnemyHealthNum = document.getElementById('keyEnemyHealth')
const keyEnemyHealthDiv = document.getElementById('keyEnemyHealthDiv')
const HealthDiv = document.getElementById('playerHealth')
const emptyCountBtnDiv = document.getElementById('EmptyCountBtnDiv')
const filledBucketDiv = document.getElementById('filledBucket')
const stringCountDiv = document.getElementById('stringCount')
const lockCountDiv = document.getElementById('lockCount')

function fillbtkfuncfunc() {
    fillbtkfuncfunc
}

function bowCraft() {
    if (plankCount > 1 && stringCount > 0) {
        plankCount -= 2
        stringCount--
        plankCountDivBtn.innerText = plankCount
        stringCountDiv.innerText = stringCount
        bowCount++
        document.getElementById('bowCount').innerText = bowCount
    }
}
function plankCraft() {

    if (stickCount > 0 ) {
        stickCount--
        plankCount++
        stickCountDiv.innerText = stickCount
        plankCountDivBtn.innerText = plankCount
    }
}

function bucketCraft() {
    if (stickCount > 0 && stringCount > 0) {
        stickCount--
        stringCount--

        bucketCount++
        stickCountDiv.innerText = stickCount
        emptyCountBtnDiv.innerText = bucketCount
        stringCountDiv.innerText = stringCount
    }
}

document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp") {
        movement(-13, 'playerUp', 'doorUp', 'doorUpOpen')

    }
    if (e.code === "ArrowDown") {
        movement(+13, 'playerDown', 'doorDown', 'doorDownOpen')
    }
    if (e.code === "ArrowLeft") {
        movement(-1, 'playerLeft', 'doorLeft', 'doorLeftOpen')
    }
    if (e.code === "ArrowRight") {
        movement(+1, 'playerRight', 'doorRight', 'doorRightOpen')
    }
    
    if (e.key === "s" || e.key === "S" ) {
        if (sheer == 1 && sheerCount > 0 && toolEquipped == 1) {
            sheer = 0
            toolEquipped = 0
            document.getElementById('sheerCountDiv').style.borderColor = 'rgb(0, 223, 223) '
        } else if (sheerCount > 0 && toolEquipped != 1) {
            sheer = 1
            toolEquipped = 1
            document.getElementById('sheerCountDiv').style.borderColor = 'green'
        }
    }

    if (e.key === "b" || e.key === "B" ) {
        if (bow == 1 && bowCount >= 0 && toolEquipped == 1) {
            bow = 0
            toolEquipped = 0
            document.getElementById('bowCountDiv').style.borderColor = 'rgb(0, 223, 223) '
        } else if (bowCount >= 0 && toolEquipped != 1) {
            bow = 1
            toolEquipped = 1
            document.getElementById('bowCountDiv').style.borderColor = 'green'
        }
    }


  });

function movement(directionValue, playerDirection, doorDirecrion, doorDirectionOpen) {

    let moveTo = document.getElementById(Number(playerID) + Number(directionValue))
    let remove = document.getElementById(Number(playerID))
    let coll = playerID + directionValue
    const collision = document.getElementById(coll)

    if (collision.classList.contains('collider') == false) {
        moveTo.classList.add('player')
        moveTo.classList.remove('cube')
        moveTo.classList.add(playerDirection)
    
        remove.classList.add('cube')
        remove.classList.remove('player')
        remove.classList.remove('playerLeft')
        remove.classList.remove('playerUp')
        remove.classList.remove('playerDown')
        remove.classList.remove('playerRight')
        playerID += directionValue
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
        if (moveTo.classList.contains('string')) {
            moveTo.classList.remove('string')

            stringCount++
            stringCountDiv.innerText = stringCount
        }

        if (moveTo.classList.contains('flag')) {
            moveTo.classList.remove('flag')

            endScreen()
        }

        if (moveTo.classList.contains('lock')) {
            moveTo.classList.remove('lock')

            lockCount += 2
            lockCountDiv.innerText = lockCount
        }

        if (moveTo.classList.contains('key')) {
            moveTo.classList.remove('key')

            keyCount += 1
            keyCountDiv.innerText = keyCount
        }

        let targetValue = document.getElementById(playerID + directionValue + directionValue)



        function fillBkt() {
            if (moveTo.classList.contains('water') || moveTo.classList.contains('waterBridge') && bucketCount > 0) {
                bucketCount--
                filledBucket++
                emptyCountBtnDiv.innerText = bucketCount
                filledBucketDiv.innerText = filledBucket
            }
        }

        fillbucketFunc = fillBkt()

    } else {
        remove.classList.remove('playerLeft')
        remove.classList.remove('playerUp')
        remove.classList.remove('playerRight')
        remove.classList.remove('playerDown')
        remove.classList.add(playerDirection)

        if (keyCount >= 1 && remove.classList.contains(playerDirection) && moveTo.classList.contains("door")) {
            moveTo.classList.remove('collider')
            moveTo.classList.remove('door')

            moveTo.classList.add(doorDirectionOpen)
            keyCount--
            keyCountDiv.innerText = keyCount
            moveTo.classList.remove(doorDirecrion)
        }
        if (moveTo.classList.contains('stick')) {
            moveTo.classList.remove('stick')

            stickCount++
            stickCountDiv.innerText = stickCount
        }
        if (moveTo.classList.contains('string')) {
            moveTo.classList.remove('string')

            stringCountDiv++
            stringCountDiv.innerText = stickCount
        }

        if (moveTo.classList.contains('fire') && filledBucket > 0) {
            moveTo.classList.remove('fire')
            moveTo.classList.remove('collider')
        }
        if (moveTo.classList.contains('target') && bowCount > 0 && bow == 1 ) {
            moveTo.classList.remove('collider')
            moveTo.classList.remove('target')
            bowCount--
            document.getElementById('bowCount').innerText = bowCount
        }
        if (moveTo.classList.contains('bush') && sheer == 1 && remove.classList.contains(playerDirection)) {
            bushHitVal--
            console.log(bushHitVal)

            if (bushHitVal == 0) {
                moveTo.classList.remove('bush')
                moveTo.classList.remove('collider')
                moveTo.classList.add('stick')
                bushHitVal = 5
            }

        }
        if (moveTo.classList.contains('water') && plankCount > 0 && remove.classList.contains(playerDirection)) {
            moveTo.classList.remove('water')
            moveTo.classList.add('waterBridge')
            moveTo.classList.remove('collider')
            plankCount--
            plankCountDivBtn.innerText = plankCount
        }
        if (moveTo.classList.contains('safe') && lockCount > 0) {
            lockCount--
            moveTo.classList.remove('collider')
            moveTo.classList.remove('safe')
            lockCountDiv.innerText = lockCount
        }
        if (moveTo.classList.contains('keyEnemy') && sheer == 1 && remove.classList.contains(playerDirection)) {
            EnemyHealth--

            keyEnemyHealthDiv.style.opacity = '1'
            keyEnemyHealthNum.innerText = EnemyHealth

            let enemyDamage = Math.floor(Math.random() * 7)

            if (enemyDamage == 2) {
                playerHealth--
                console.log(playerHealth)
                HealthDiv.innerText = playerHealth

            }

            if (playerHealth <= 0) {
                window.location.reload()
            }

            if (EnemyHealth <= 0) {
                moveTo.classList.remove('keyEnemy')
                moveTo.classList.remove('collider')
                moveTo.classList.add('key')
                keyEnemyHealthNum.innerText = 10
                EnemyHealth = 10 - 5
                keyEnemyHealthDiv.style.opacity = '0'
            }
             
        }
        if (moveTo.classList.contains('sheep') && sheer == 1 && remove.classList.contains(playerDirection)) {
            EnemyHealth--

            keyEnemyHealthDiv.style.opacity = '1'
            keyEnemyHealthNum.innerText = EnemyHealth

            let enemyDamage = Math.floor(Math.random() * 8)

            if (enemyDamage == 2) {
                playerHealth--
                console.log(playerHealth)
                HealthDiv.innerText = playerHealth

            }

            if (playerHealth <= 0) {
                window.location.reload()
            }

            if (EnemyHealth <= 0) {
                moveTo.classList.remove('sheep')
                moveTo.classList.remove('collider')
                moveTo.classList.add('string')
                keyEnemyHealthNum.innerText = 10
                EnemyHealth = 5
                keyEnemyHealthDiv.style.opacity = '0'
            }
             
        }
        
    }


}

function bucketCraft() {
    if (stringCount > 0 && stickCount > 1) {
        stringCount--
        stickCount--
        stickCount--

        bucketCount++
        emptyCountBtnDiv.innerText = bucketCount
        stringCountDiv.innerText = stringCount
        stickCountDiv.innerText = stickCount
    }
}
function endScreen() {

    document.body.innerText = `You Win!!`    
    setTimeout(() =>window.location.reload(), 2000)

document.getElementById('lvlBtnsDiv').style.opacity = '1'
}



