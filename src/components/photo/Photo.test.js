import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {Photo} from "./Photo";


const MockComponent = () => (
  <BrowserRouter>
        <Photo
            photo={{
                albumId: 3,
                id: 101,
                thumbnailUrl: "https://via.placeholder.com/150/e743b",
                title: "incidunt alias vel enim",
                url: "https://via.placeholder.com/600/e743b",
            }}

            searchTerm="lorem"
    />
  </BrowserRouter>
);

describe("Photo", () => {
  it("renders Photo correctly", async () => {
    render(<MockComponent />, { root: "concurrent" });
    const view = await screen.findByTestId("photo");
    expect(view).toBeInTheDocument();
  });

  it('should have correct image in its source', async () => {
    render(<MockComponent />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/150/e743b');
    expect(imageElement).toHaveAttribute('alt', 'incidunt alias vel enim');
  });

  it('should have title', async () => {
    render(<MockComponent />);
    const paraElement = screen.getByTestId('photo-title');
    expect(paraElement).toHaveTextContent("incidunt alias vel enim");
  });
});