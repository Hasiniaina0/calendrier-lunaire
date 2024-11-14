import DayView from "./DayView";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

describe("Show images of moon's phase", () => {
  it("show image and title when user choose a date", () => {
    const imageUrl = "https://example.com/image.jpg";
    const title = "new moon";

    render(<DayView imageUrl={imageUrl} title={title} />);

    // Vérifie que l'image apparaît avec le bon lien et le bon texte alternatif
    // screen.getByRole() permet de trouver un élément
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", imageUrl);
    expect(image).toHaveAttribute("alt", title);

    // Vérifie que le titre s'affiche avec le bon texte
    // screen.getByText() permet de chercher un texte
    const titreElement = screen.getByText(title);
    expect(titreElement).toBeInTheDocument();
  });
});
