class Character {
  private x: number;
  private y: number;
  private speed: number;
  private sprite: HTMLDivElement;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 5;
    this.sprite = document.createElement('div');
    this.sprite.classList.add('character');
    document.body.appendChild(this.sprite);
  }

  public moveUp(): void {
    this.y -= this.speed;
    this.sprite.style.top = `${this.y}px`;
  }

  public moveDown(): void {
    this.y += this.speed;
    this.sprite.style.top = `${this.y}px`;
  }

  public moveLeft(): void {
    this.x -= this.speed;
    this.sprite.style.left = `${this.x}px`;
  }

  public moveRight(): void {
    this.x += this.speed;
    this.sprite.style.left = `${this.x}px`;
  }

  public handleSwipe(direction: string): void {
    switch (direction) {
      case 'up':
        this.moveUp();
        break;
      case 'down':
        this.moveDown();
        break;
      case 'left':
        this.moveLeft();
        break;
      case 'right':
        this.moveRight();
        break;
    }
  }
}

const character = new Character();

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      character.moveUp();
      break;
    case 'ArrowDown':
      character.moveDown();
      break;
    case 'ArrowLeft':
      character.moveLeft();
      break;
    case 'ArrowRight':
      character.moveRight();
      break;
  }
});

let xStart: number = 0;
let yStart: number = 0;

document.addEventListener('touchstart', (event) => {
  xStart = event.touches[0].clientX;
  yStart = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
  const xEnd = event.changedTouches[0].clientX;
  const yEnd = event.changedTouches[0].clientY;

  const xDiff = xEnd - xStart;
  const yDiff = yEnd - yStart;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      character.handleSwipe('right');
    } else {
      character.handleSwipe('left');
    }
  } else {
    if (yDiff > 0) {
      character.handleSwipe('down');
    } else {
      character.handleSwipe('up');
    }
  }
});
