import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {Album} from "./Album";


const MockComponent = () => (
  <BrowserRouter>
        <Album
            album={{
                id: 3,
                title: "omnis laborum odio",
                user: {
                  id: 1,
                  name: "Leanne Graham",
                  username: "Bret",
                  email: "Sincere@april.biz",
                  address: {},
                },
                userId: 1,
              }}
    />
  </BrowserRouter>
);

describe("Album", () => {
  it("renders Album correctly", async () => {
    render(<MockComponent />, {root: 'concurrent'});
    const view = await screen.findByTestId("album");
    expect(view).toBeInTheDocument();
  });

  it('should have correct image in its source', async () => {
    render(<MockComponent />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/150/00ff');
    expect(imageElement).toHaveAttribute('alt', 'omnis laborum odio icon by t-rex');
  });

  it('should have title', async () => {
    render(<MockComponent />);
    const paraElement = screen.getByTestId('album-title');
    expect(paraElement).toHaveTextContent("omnis laborum odio");
  });
});