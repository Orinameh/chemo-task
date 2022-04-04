import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Photos from ".";

const MockComponent = () => (
  <BrowserRouter>
    <Photos />
  </BrowserRouter>
);

describe("index(Photos)", () => {
  it("renders loading component", async () => {
    render(<MockComponent />, { root: "concurrent" });

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Loading Photos...")
    );
  });
  it("renders photos component", async () => {
    render(<MockComponent />, { root: "concurrent" });
    await waitFor(
      () => expect(screen.getByTestId("photos").childElementCount).toEqual(4),
      1000
    );
  });

  it("contains h3 element with title Photos", async () => {
    render(<MockComponent />, { root: "concurrent" });
    const h3Element = await screen.findByTestId("title");
    expect(h3Element).toBeInTheDocument();
  });

  it("fetches all albums", async () => {
    const mockedRes = jest.spyOn(window, "fetch").mockResolvedValue({
      json: async () => [
        {
          albumId: 3,
          id: 101,
          thumbnailUrl: "https://via.placeholder.com/150/e743b",
          title: "incidunt alias vel enim",
          url: "https://via.placeholder.com/600/e743b",
        },

        {
          albumId: 3,
          id: 102,
          thumbnailUrl: "https://via.placeholder.com/150/a393af",
          title:
            "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
          url: "https://via.placeholder.com/600/a393af",
        },

        {
          albumId: 3,
          id: 103,
          thumbnailUrl: "https://via.placeholder.com/150/35cedf",
          title: "et eius nisi in ut reprehenderit labore eum",
          url: "https://via.placeholder.com/600/35cedf",
        },

        {
          albumId: 3,
          id: 104,
          thumbnailUrl: "https://via.placeholder.com/150/313b40",
          title: "et natus vero quia totam aut et minima",
          url: "https://via.placeholder.com/600/313b40",
        },
      ],
    });
    const result = await (await mockedRes()).json();
    expect(mockedRes).toHaveBeenCalled();
    expect(result.length).toBe(4);
  });
});
