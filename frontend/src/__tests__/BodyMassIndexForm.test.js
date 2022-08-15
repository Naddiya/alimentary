import React from "react";
import BodyMassIndexForm from "../components/tools/bodyMassIndex/BodyMassIndexForm";
import { calculateBmi, evaluateBmiLevel } from "../utils/bodyMassIndexUtils";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";

afterEach(cleanup);
describe("BodyMassIndexForm", () =>
{
  it("should be rendered properly", () =>
  {
    const { container } = render(
      <Provider store={ store }>
        <BodyMassIndexForm />
      </Provider>
    );

    container.querySelector("#bmi");
    container.querySelector("#weight");
    container.querySelector("#height");

    screen.getByRole("heading", {
      name: /Indice de masse corporelle/i,
    });
    screen.getByRole("button", { name: /Calcul du BMI/i });
    screen.getByRole("button", { name: /Initialiser/i });
    screen.getByLabelText(/Taille/i);
    screen.getByLabelText(/Poids/i);
    screen.getByText(/IMC :/i);
  });
});

describe("button calculate", () =>
{
  it("should call props.onClick when clicked", () =>
  {
    const mockedCalculate = jest.fn();
    const { getByText } = render(
      <button onClick={ mockedCalculate }>Calcul du BMI</button>
    );
    fireEvent.click(getByText(/Calcul du BMI/i));
    expect(mockedCalculate).toHaveBeenCalledTimes(1);
  });
});

describe("button clear", () =>
{
  it("should call props.onClick when clicked", () =>
  {
    const mockedClearForm = jest.fn();
    const { getByText } = render(
      <button onClick={ mockedClearForm }>Initialiser</button>
    );
    fireEvent.click(getByText(/Initialiser/i));
    expect(mockedClearForm).toHaveBeenCalledTimes(1);
  });
});

describe("calculate weight", () =>
{
  test("height = 172 and weight = 116 should returns 31.29", () =>
  {
    expect(calculateBmi(116, 172)).toEqual(39.21);
  });
  test("height is undefined or weight is undefined returns 0", () =>
  {
    expect(calculateBmi(undefined, 172)).toEqual(0);
  });
});

describe("evaluate bmi", () =>
{
  test("if bmi equals 17.26 evaluateBmi should return insufficient", () =>
  {
    expect(evaluateBmiLevel(17.26)).toBe("insufficient");
  });
  test("if bmi equals 38.86 evaluateBmi should return normal", () =>
  {
    expect(evaluateBmiLevel(22.91)).toBe("normal");
  });
  test("if bmi equals 38.86 evaluateBmi should return over-weight", () =>
  {
    expect(evaluateBmiLevel(26.6)).toBe("over-weight");
  });
  test("if bmi equals 38.86 evaluateBmi should return class1_obesity", () =>
  {
    expect(evaluateBmiLevel(34)).toBe("class1_obesity");
  });
  test("if bmi equals 38.86 evaluateBmi should return class2_obesity", () =>
  {
    expect(evaluateBmiLevel(38.86)).toBe("class2_obesity");
  });
  test("if bmi equals 38.86 evaluateBmi should return class2_obesity", () =>
  {
    expect(evaluateBmiLevel(42.74)).toBe("class3_obesity");
  });
});
