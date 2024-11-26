import { render, screen, fireEvent } from "@testing-library/react";
import DateSelectorView from "./DateSelectorView";
import userEvent from "@testing-library/user-event"; // Pour simuler les interactions utilisateur

describe("DateSelectorView Component", () => {
  it("renders with default props and shows the passed date", () => {
    const selectedDate = new Date(2024, 10, 26); // 26 November 2024
    const handleDateChange = jest.fn();

    render(
      <DateSelectorView
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
    );

    // Vérifie que l'élément input affiche la date au bon format
    const dateInput = screen.getByDisplayValue("26/11/2024");
    expect(dateInput).not.toBeNull(); // S'assure que le champ existe

    // Vérifie que l'icône calendrier est visible
    const calendarIcon = screen.getByRole("img", { name: "Calendar icon" });
    expect(calendarIcon).not.toBeNull(); // Vérifie que l'élément existe
  });

  // Test pour vérifier que le calendrier s'affiche lors d'un clic sur l'icône calendrier
  it("shows the calendar when clicking the calendar icon", async () => {
    const selectedDate = new Date();
    const handleDateChange = jest.fn();

    render(
      <DateSelectorView
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
    );

    // Clic sur l'icône calendrier
    const calendarIcon = screen.getByRole("img", { name: "Calendar icon" });
    userEvent.click(calendarIcon);

    // Vérifie que le calendrier s'affiche (en vérifiant l'existence d'un élément avec un rôle spécifique)
    const calendar = await screen.findByRole("dialog"); // Popper utilisé par react-datepicker
    expect(calendar).not.toBeNull();
  });

  it("executes the handleDateChange function with the new date", () => {
    const selectedDate = new Date(2024, 10, 26); // Initial date: 26 November 2024
    const handleDateChange = jest.fn();
    const newDate = new Date(2024, 10, 27); // Nouvelle date : 27 novembre 2024

    render(
      <DateSelectorView
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
    );

    // Trouver l'input du date picker
    const dateInput = screen.getByDisplayValue("26/11/2024");

    // Simuler un changement de date
    fireEvent.change(dateInput, { target: { value: "27/11/2024" } });

    // Vérifiez que la fonction est appelée une fois
    expect(handleDateChange).toHaveBeenCalledTimes(1);

    // Vérifiez que la fonction est appelée avec une date équivalente
    const receivedDate = handleDateChange.mock.calls[0][0]; // Récupère le premier appel et son argument
    expect(receivedDate.getDate()).toBe(newDate.getDate()); // Compare le jour
    expect(receivedDate.getMonth()).toBe(newDate.getMonth()); // Compare le mois
    expect(receivedDate.getFullYear()).toBe(newDate.getFullYear()); // Compare l'année
  });
});
