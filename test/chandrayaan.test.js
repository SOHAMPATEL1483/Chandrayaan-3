import { Chandrayaan } from "../chandrayaan";

test("sample test given in assessement", () => {
  const spaceship = new Chandrayaan();
  spaceship.processCommands(["f", "r", "u", "b", "l"]);
  expect(spaceship.getCoordinates()).toEqual([0, 1, -1]);
  expect(spaceship.direction).toEqual("N");
});

describe("Initialization", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });

  it("should initialize with default values", () => {
    expect(spaceship.getCoordinates()).toEqual([0, 0, 0]);
    expect(spaceship.direction).toBe("N");
  });

  it("should initialize with custom values", () => {
    const customSpaceship = new Chandrayaan(2, -1, 3, "E");
    expect(customSpaceship.getCoordinates()).toEqual([2, -1, 3]);
    expect(customSpaceship.direction).toBe("E");
  });
});

describe("Movement", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });

  it("should move forward and backward correctly", () => {
    spaceship.processCommands(["f", "f", "b", "b"]);
    expect(spaceship.getCoordinates()).toEqual([0, 0, 0]);
  });

  it("should move up and down correctly", () => {
    spaceship.direction = "UP";
    spaceship.processCommands(["f", "b", "f"]);
    expect(spaceship.getCoordinates()).toEqual([0, 0, 1]);
  });

  it("should move in a circular path", () => {
    spaceship.processCommands(["f", "r", "f", "r", "f", "r", "f"]);
    expect(spaceship.getCoordinates()).toEqual([0, 0, 0]);
    expect(spaceship.direction).toBe("W");
  });
});

describe("Turning", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });

  it("should turn left and right correctly", () => {
    spaceship.processCommands(["r", "r", "l", "l"]);
    expect(spaceship.direction).toBe("N");
  });

  it("should handle turning up and down", () => {
    spaceship.processCommands(["u", "d", "d", "u"]);
    expect(spaceship.direction).toBe("N");
  });
});

describe("Edge Cases", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });
  it("should handle a large sequence of commands", () => {
    const commands = Array(10000).fill("f");
    spaceship.processCommands(commands);
    expect(spaceship.getCoordinates()).toEqual([0, commands.length, 0]);
  });
});

describe("Additional Tests for move operations", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });

  describe("should move forward with different initial direction", () => {
    it("for initial direction North(N)", () => {
      spaceship.processCommands(["f"]);
      expect(spaceship.getCoordinates()).toEqual([0, 1, 0]);
    });

    it("for initial direction South(S)", () => {
      spaceship.direction = "S";
      spaceship.processCommands(["f"]);
      expect(spaceship.getCoordinates()).toEqual([0, -1, 0]);
    });

    it("for initial direction East(E)", () => {
      spaceship.direction = "E";
      spaceship.processCommands(["f"]);
      expect(spaceship.getCoordinates()).toEqual([1, 0, 0]);
    });

    it("for initial direction West(W)", () => {
      spaceship.direction = "W";
      spaceship.processCommands(["f"]);
      expect(spaceship.getCoordinates()).toEqual([-1, 0, 0]);
    });

    it("for initial direction Up(UP)", () => {
      spaceship.direction = "UP";
      spaceship.processCommands(["f"]);
      expect(spaceship.getCoordinates()).toEqual([0, 0, 1]);
    });

    it("for initial direction Down(DOWN)", () => {
      spaceship.direction = "DOWN";
      spaceship.processCommands(["f"]);
      expect(spaceship.getCoordinates()).toEqual([0, 0, -1]);
    });
  });

  describe("should move backword with different initial direction", () => {
    it("for initial direction North(N)", () => {
      spaceship.processCommands(["b"]);
      expect(spaceship.getCoordinates()).toEqual([0, -1, 0]);
    });

    it("for initial direction South(S)", () => {
      spaceship.direction = "S";
      spaceship.processCommands(["b"]);
      expect(spaceship.getCoordinates()).toEqual([0, 1, 0]);
    });

    it("for initial direction East(E)", () => {
      spaceship.direction = "E";
      spaceship.processCommands(["b"]);
      expect(spaceship.getCoordinates()).toEqual([-1, 0, 0]);
    });

    it("for initial direction West(W)", () => {
      spaceship.direction = "W";
      spaceship.processCommands(["b"]);
      expect(spaceship.getCoordinates()).toEqual([1, 0, 0]);
    });

    it("for initial direction Up(UP)", () => {
      spaceship.direction = "UP";
      spaceship.processCommands(["b"]);
      expect(spaceship.getCoordinates()).toEqual([0, 0, -1]);
    });

    it("for initial direction Down(DOWN)", () => {
      spaceship.direction = "DOWN";
      spaceship.processCommands(["b"]);
      expect(spaceship.getCoordinates()).toEqual([0, 0, 1]);
    });
  });
});
