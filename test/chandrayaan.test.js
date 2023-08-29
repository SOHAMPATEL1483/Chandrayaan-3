import { Chandrayaan } from "../chandrayaan";

test("initial test", () => {
  expect(1).toBe(1);
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
