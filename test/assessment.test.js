import {
  Assessment,
  findCombination,
  findPermutation,
  possibleCombins,
  possiblePermutations,
  results,
  dimensionObj
} from "../src/assessment";

describe("The Assessment Class methods", () => {
  it("should create random number between 0 - 9", () => {
    const spy = jest.spyOn(Assessment.prototype, "getRandomNum");
    let mockTestDependency = new Assessment();
    expect(mockTestDependency.getRandomNum()).toBeLessThanOrEqual(9);
    spy.mockReset();
    spy.mockRestore();
  });
  it("should return random choices", () => {
    const spy = jest.spyOn(Assessment.prototype, "showRandomChoice");
    let mockTestDependency = new Assessment();
    expect(mockTestDependency.showRandomChoice()).toBeLessThanOrEqual(9);
    spy.mockReset();
    spy.mockRestore();
  });
});

describe("The Assesment", () => {
  it("should calculate the combination of given array", () => {
    var result = [["a", "b"], ["a", "c"], ["b", "c"]];
    expect(findCombination(["a", "b", "c"])).toEqual(result);
  });
  it("should calculate the permutation of given array", () => {
    var combination = findCombination(["a", "b"]);
    var result = [["a", "b"], ["b", "a"]];
    expect(findPermutation(combination)).toEqual(result);
    expect(result.length).toEqual(2);
  });
  it("should have 15 as length of Array for combinations", () => {
    expect(possibleCombins).toHaveLength(15);
  });
  it("should have 30 as length of Array for permutations", () => {
    expect(possiblePermutations).toHaveLength(30);
  });
});

describe("dimensionObj", () => {
  it("should be an object", () => {
    expect(typeof dimensionObj === "object").toBeTruthy();
  });
  it("should have 6 keys", () => {
    expect(Object.keys(dimensionObj).length).toEqual(6);
  });
});

describe("Results", () => {
  it("should be an object", () => {
    expect(typeof results === "object").toBeTruthy();
  });
  it("should have 6 keys", () => {
    expect(Object.keys(results).length).toEqual(6);
  });

  it("should have spesific properties", () => {
    expect(results).toHaveProperty("Adaptive");
    expect(results).toHaveProperty("Integrity");
    expect(results).toHaveProperty("Collaborative");
    expect(results).toHaveProperty("Result");
    expect(results).toHaveProperty("Customer");
    expect(results).toHaveProperty("Detail");
  });
});
