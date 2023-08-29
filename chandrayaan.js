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

  /* 
  move function will be responsible for moving one step in the direction of chandrayaan
  we have direction_to_axis object which will convert direction to respective coordinate axis
   */
  move(command) {
    switch (command) {
      case "f":
        if (
          this.direction === "U" ||
          this.direction === "N" ||
          this.direction === "E"
        ) {
          // now if we in North , east or up direction than to move forward we have to +1;
          this[this.#direction_to_axis[this.direction]]++;
        } else {
          // but if we in south , west or down direction than to move forward we have to -1;
          this[this.#direction_to_axis[this.direction]]--;
        }
        break;
      case "b":
        if (
          this.direction === "U" ||
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

  turn(command) {
    switch (command) {
      case "l":
        if (this.direction == "N") this.direction = "W";
        else if (this.direction == "W") this.direction = "S";
        else if (this.direction == "S") this.direction = "E";
        else if (this.direction == "E") this.direction = "N";
        else if (this.direction == "U") this.direction = "N";
        else if (this.direction == "D") this.direction = "S";
        break;
      case "r":
        if (this.direction == "N") this.direction = "E";
        else if (this.direction == "E") this.direction = "S";
        else if (this.direction == "S") this.direction = "W";
        else if (this.direction == "W") this.direction = "N";
        break;
      case "u":
        if (
          this.direction == "N" ||
          this.direction == "S" ||
          this.direction == "E" ||
          this.direction == "W"
        )
          this.direction = "UP";
        else if (this.direction == "DOWN") this.direction = "DOWN";
        break;
      case "d":
        break;

      default:
        console.error("paramaters passed in turn function are wrong");
        break;
    }
  }
}
