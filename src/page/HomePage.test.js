import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";

it("render the page correctly and display the default image and title", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  // Vérifier que le titre "Dernier croissant" est affiché selon la phase calculée pour la date par défaut
  expect(screen.getByText(/Dernier croissant/i)).toBeInTheDocument();

  // Vérifier que l'image de la phase de la lune est affichée
  const image = screen.getByAltText(/Dernier croissant/i);
  expect(image).toBeInTheDocument();
  expect(image.src).toContain("waning-crescent.png");
});

it("display the correct phase after calculating the moon phase for the default date", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  // Vérifier que l'image correspond à la phase "Dernier croissant" pour la date par défaut
  const image = screen.getByAltText(/Dernier croissant/i);
  expect(image).toBeInTheDocument();
  expect(image.src).toContain("waning-crescent.png");
  expect(screen.getByText(/Dernier croissant/i)).toBeInTheDocument();
});
