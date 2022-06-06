import { act, fireEvent, render } from "@testing-library/react";
import {NavBar, FEED_LABEL, SAVED_LABEL} from "./NavBar";

describe("NavBar", () => {

  it("should have two items on the left side", () => {
    const { container, getByText } = render(<NavBar/>);
    
    const feedLabel = getByText(FEED_LABEL);
    const savedLabel = getByText(SAVED_LABEL);

    expect(feedLabel).not.toBeFalsy();
    expect(savedLabel).not.toBeFalsy();

    expect(container).toMatchSnapshot();
  });

  it("has Feed Item active by default", () => {
    const { getByText } = render(<NavBar/>);

    const feedLabel = getByText(FEED_LABEL);

    expect(feedLabel).toHaveClass("text-black-400");
  });

  it("set Saved Tab active when clicked", async () => {
    const { getByText } = render(<NavBar/>);

    const feedLabel = getByText(FEED_LABEL);

    act(() => { fireEvent.click(feedLabel); });

    expect(feedLabel.className).toContain("text-black");
  });

  it("set Saved Tab active when clicked", async () => {
    const { getByText } = render(<NavBar/>);

    const savedLabel = getByText(SAVED_LABEL);

    act(() => { fireEvent.click(savedLabel); });

    expect(savedLabel.className).toContain("text-black");
  });

  it("has icon menus on the right side", async () => {
    const { container } = render(<NavBar/>);

    // look for next/image component
    const items = container.firstElementChild!.querySelectorAll("span > span > img");

    expect(items.length).toBeGreaterThan(0);
  });
});
