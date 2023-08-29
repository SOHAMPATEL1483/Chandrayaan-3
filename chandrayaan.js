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

  printall() {
    console.log(this);
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

  move(command) {
    switch (command) {
      case "f":
        if (
          this.direction === "U" ||
          this.direction === "N" ||
          this.direction === "E"
        )
          this[this.#direction_to_axis[this.direction]]++;
        else this[this.#direction_to_axis[this.direction]]--;
        break;
      case "b":
        if (
          this.direction === "U" ||
          this.direction === "N" ||
          this.direction === "E"
        )
          this[this.#direction_to_axis[this.direction]]--;
        else this[this.#direction_to_axis[this.direction]]++;
        break;
      default:
        console.error("paramaters passed in move function are wrong");
        break;
    }
  }

  turn(command) {}
}
