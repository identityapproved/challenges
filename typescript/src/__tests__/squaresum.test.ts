import type * as TestFunctions from "../codewars/squaresum";

const {squareSum} = jest.requireActual("../codewars/squaresum.ts")

const successCases = [
  {
    id:0,
    input:[1,2],
    output:5
  },
  {
    id:1,
    input:[0, 3, 4, 5],
    output:50
  },
  {
    id:2,
    input:[],
    output:0
  },
];

describe("Test Square(n) Sum function", () => {
  it.each(successCases)("success case $id", ({ input, output }) => {
    expect(squareSum(input)).toBe(output);
  });
});
