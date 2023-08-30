export class Chandrayaan {
  constructor(x = 0, y = 0, z = 0, direction = "N") {
    this.x = x;
    this.y = y;
    this.z = z;
    this.direction = direction;
  }
  /*
    Private object to convert directions to respective coordinate axis
        1.north(N) and south(S) are related with y axis
        2.east(E) and west(W) are related with x axis
        3.up(UP) and down(DOWN) are related with z axis
   */
  #direction_to_axis = {
    UP: "z",
    DOWN: "z",
    E: "x", //east
    W: "x", //west
    N: "y", //north
    S: "y", // south
  };

  getCoordinates() {
    return [this.x, this.y, this.z];
  }

  processCommands(commands) {
    for (const command of commands) {
      if (command === "f" || command === "b") {
        this.move(command);
      } else {
        this.turn(command);
      }
    }
  }

  /* 
  move function will be responsible for moving one step in the direction of chandrayaan
  we have direction_to_axis object which will convert direction to respective coordinate axis
   */
  move(command) {
    switch (command) {
      case "f":
        if (
          this.direction === "UP" ||
          this.direction === "N" ||
          this.direction === "E"
        ) {
          // now if we in North , east or up direction than to move forward we have to +1;
          // this.#direction_to_axis[this.direction] will used to convert N->y ---> this.y++
          this[this.#direction_to_axis[this.direction]]++;
        } else {
          // but if we in south , west or down direction than to move forward we have to -1;
          this[this.#direction_to_axis[this.direction]]--;
        }
        break;
      case "b":
        if (
          this.direction === "UP" ||
          this.direction === "N" ||
          this.direction === "E"
        ) {
          // now if we in North , east or up direction than to move backword we have to -1;
          this[this.#direction_to_axis[this.direction]]--;
        } else {
          // but if we in south , west or down direction than to move forward we have to +1;
          this[this.#direction_to_axis[this.direction]]++;
        }
        break;
      default:
        console.error("paramaters passed in move function are wrong");
        break;
    }
  }

  /* array that includes four directions in linear plane
    if you want go to rotate left than go to next direction(moveLeft)
    if you want go rotate right than go to previous direction(moveRight)
  */
  #directions = ["N", "E", "S", "W"];
  moveLeft() {
    let curr = 0;
    for (let i = 0; i < 4; i++)
      if (this.#directions[i] === this.direction) curr = i;
    this.direction = this.#directions[(curr + 3) % 4];
  }
  moveRight() {
    let curr = 0;
    for (let i = 0; i < 4; i++)
      if (this.#directions[i] === this.direction) curr = i;
    this.direction = this.#directions[(curr + 1) % 4];
  }

  turn(command) {
    switch (command) {
      case "l":
        if (this.#directions.includes(this.direction)) {
          this.moveLeft();
        } else if (this.direction == "UP") this.direction = "N";
        else if (this.direction == "DOWN") this.direction = "S";
        break;
      case "r":
        if (this.#directions.includes(this.direction)) {
          this.moveRight();
        } else if (this.direction == "UP") this.direction = "S";
        else if (this.direction == "DOWN") this.direction = "N";
        break;
      case "u":
        if (this.#directions.includes(this.direction)) this.direction = "UP";
        else if (this.direction == "DOWN") this.direction = "N";
        break;
      case "d":
        if (this.#directions.includes(this.direction)) this.direction = "DOWN";
        else if (this.direction == "UP") this.direction = "N";
        break;
      default:
        console.error("paramaters passed in turn function are wrong");
        break;
    }
  }
}

const c = new Chandrayaan();
c.processCommands(["f", "r", "u", "b", "l"]);
console.log(c);
