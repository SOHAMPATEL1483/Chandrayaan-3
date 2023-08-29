import { Chandrayaan } from "../chandrayaan";

test("initial test", () => {
  expect(1).toBe(1);
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

describe("Tests for move operations", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });

  describe("should move forward correctly", () => {
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

  describe("should move backword correctly", () => {
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
