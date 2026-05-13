import { expect, test } from "vitest";
import { helloWorld } from "./index";

test("adds 1 + 2 to equal 3", () => {
  expect(helloWorld()).toBe("Hello World");
});
