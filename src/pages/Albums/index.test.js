import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Albums from ".";

const MockComponent = () => (
  <BrowserRouter>
    <Albums />
  </BrowserRouter>
);

beforeEach(() => {
  jest.clearAllMocks();
});
describe("index(Albums)", () => {
    it("renders loading component", async () => {
      render(<MockComponent />, { root: "concurrent" });

      await waitForElementToBeRemoved(
        () => screen.queryByText("Loading Albums...."),
      );
    });
  it("renders albums component", async () => {
    render(<MockComponent />, { root: "concurrent" });
    await waitFor(
      () => expect(screen.getByTestId("albums").childElementCount).toEqual(3),
      1000
    );
  });

  it("fetches albums", async () => {
    const mockedRes = jest.spyOn(window, "fetch").mockResolvedValue({
      json: async () => [
        {
          id: 1,
          title: "quidem molestiae enim",
          user: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {},
          },
          userId: 1,
        },
        {
          id: 2,
          title: "sunt qui excepturi placeat culpa",
          user: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {},
          },
          userId: 1,
        },
        {
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
        },
      ],
    });
    const result = await (await mockedRes()).json();
    expect(mockedRes).toHaveBeenCalled();
    expect(result.length).toBe(3);
  });
});
