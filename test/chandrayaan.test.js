import { Chandrayaan } from "../chandrayaan";

test("initial test", () => {
  expect(1).toBe(1);
});

describe("Tests for move operations", () => {
  let spaceship;

  beforeEach(() => {
    spaceship = new Chandrayaan();
  });

  it("should move forward correctly", () => {
    spaceship.processCommands(["f"]);
    expect(spaceship.x).toBe(0);
    expect(spaceship.y).toBe(1);
    expect(spaceship.z).toBe(0);
  });
  it("should move backword correctly", () => {
    spaceship.processCommands(["b"]);
    expect(spaceship.x).toBe(0);
    expect(spaceship.y).toBe(-1);
    expect(spaceship.z).toBe(0);
  });
});
