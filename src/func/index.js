class Dino {
    /**
     * @param {HTMLElement} dino
     */
    constructor(dino) {
        this.dino = dino
    }

    jump() {

    }

    right() {
        
    }

    left () {

    }

    update() {

    }
    
}

const $dino = document.querySelector('#dino')
const dino = new Dino($dino)

function update () {
    dino.update()
    window.requestAnimationFrame(update)
}

window.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
        dino.jump()
    }

    if (e.keyCode === 39) {
        dino.right()
    }

    if (e.keyCode === 37) {
        dino.left()
    }
})



update()
