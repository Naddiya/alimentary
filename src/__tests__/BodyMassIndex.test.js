
import React from "react";
import BodyMassIndex from "../Components/BodyMassIndex";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";


afterEach(cleanup);
describe("Components/BodyMassIndex", () => {
  it("should be rendered properly", () => {
    const { container } = render(<BodyMassIndex />);

    container.querySelector('#bmi');
    container.querySelector('#weight');
    container.querySelector('#height');

    screen.getByRole('heading', { name: /Calculer l'indice de masse corporelle/i });
    screen.getByRole('button', { name: /Calcul du BMI/i });
    screen.getByRole('button', { name: /Initialiser/i });
    screen.getByLabelText(/Taille:/i);
    screen.getByLabelText(/Poids:/i);
    screen.getByLabelText(/Resultat:/i);
  });
});

describe('button calculate', () => {
  it('should call props.onClick when clicked', () => {
    const mockedCalculate = jest.fn();
    const { getByText } = render(
      <button id="button-calculate" className="button-calculate" onClick={mockedCalculate}>Calcul du BMI</button>
    );
    fireEvent.click(getByText(/Calcul du BMI/i));
    expect(mockedCalculate).toHaveBeenCalledTimes(1);
  });
});

describe('function calculate', () => {

})
