import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { calculateMoonPhaseByDate } from "../application/MoonPhaseCalculator";

// Mock de la fonction calculateMoonPhaseByDate
jest.mock("../application/MoonPhaseCalculator", () => ({
  calculateMoonPhaseByDate: jest.fn(),
}));

describe("Test Suite Homepage", () => {
  //Cette fonction est exécutée avant chaque test
  beforeEach(() => {
    // Mock de la phase par défaut pour garantir des tests déterministes

    calculateMoonPhaseByDate.mockReturnValue("waning-crescent"); //Configure la fonction simulée pour retourner "waning-crescent"
  });

  it("renders the page correctly and displays the default image and title", async () => {
    render(
      // Utilisé pour afficher un composant dans un environnement de test.
      // BrowserRouter est nécessaire pour prendre en charge la navigation
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Vérifier que le titre "Dernier croissant" est affiché
    expect(screen.getByText(/Dernier croissant/i)).toBeInTheDocument(); // screen fournit des fonctions pour trouver des éléments affichés dans le composant rendu.

    // Vérifier que l'image de la phase de la lune est affichée
    await waitFor(() => {
      // Attente pour vérifier les éléments asynchrones
      const image = screen.getByAltText(/Dernier croissant/i);
      expect(image).toBeInTheDocument();
      expect(image.src).toContain("waning-crescent.png");
    });
  });
});
