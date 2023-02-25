class Character {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 5;
    this.sprite = document.createElement('div');
    this.sprite.classList.add('character');
    document.body.appendChild(this.sprite);
    this.addEventListeners();
  }

  moveUp() {
    this.y -= this.speed;
    this.sprite.style.top = `${this.y}px`;
  }

  moveDown() {
    this.y += this.speed;
    this.sprite.style.top = `${this.y}px`;
  }

  moveLeft() {
    this.x -= this.speed;
    this.sprite.style.left = `${this.x}px`;
  }

  moveRight() {
    this.x += this.speed;
    this.sprite.style.left = `${this.x}px`;
  }

  addEventListeners() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          this.moveUp();
          break;
        case 'ArrowDown':
          this.moveDown();
          break;
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'ArrowRight':
          this.moveRight();
          break;
      }
    });

    const upButton = document.getElementById('up-button');
    if (upButton) {
      upButton.addEventListener('click', () => this.moveUp());
    }

    const downButton = document.getElementById('down-button');
    if (downButton) {
      downButton.addEventListener('click', () => this.moveDown());
    }

    const leftButton = document.getElementById('left-button');
    if (leftButton) {
      leftButton.addEventListener('click', () => this.moveLeft());
    }

    const rightButton = document.getElementById('right-button');
    if (rightButton) {
      rightButton.addEventListener('click', () => this.moveRight());
    }
  }
}

const character = new Character();
