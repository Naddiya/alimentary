
import React from "react";
import ReactDOM from "react-dom";
import BMI from "../Components/BMI";
import { render, fireEvent } from '@testing-library/react';

const container = document.createElement("div");
ReactDOM.render(<BMI />, container);
it("it works", () => {
  expect(container.querySelector("h2").textContent).toBe("Calculer l'indice de masse corporel");
});
