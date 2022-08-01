import { expect, test } from "@jest/globals";
import HomePage from "../pages/HomePage";

test("returns component App", () => {
  expect(HomePage).toBeDefined();
});
