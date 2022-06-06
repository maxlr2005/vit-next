import { fireEvent, render, screen } from '@testing-library/react'
import { InMemoryRepository } from "../core/InMemoryRepository";
import { executeSearch } from "../components/SearchBar";
import { IndexPage } from "../pages/index";

const IndexTitle = `VIT, a curated feed of tons of interesting articles, news, tutorials... things.`;

describe("Home", () => {

  describe("Body", () => {
    it("should have a title", () => {
      const { getByText } = render(<IndexPage/>);

      const matchedEl = getByText(IndexTitle);

      expect(matchedEl).toBeTruthy();
    });

    it("should have a search bar", () => {
      const { container } = render(<IndexPage/>);

      const matchedEl = container.querySelector("input");

      expect(matchedEl).toBeTruthy();
    });

    it("appears two cards of results below the search bar", () => {
      const { container } = render(<IndexPage/>);

      // container
    });

    it("shows more results when scrolled", () => {

    });

    // it("hides title when scrolls down", () => {
    //   const { container, getByText } = render(<IndexPage/>);
    //
    //   expect(container.firstElementChild).toBeInTheDocument();
    //
    //   fireEvent.scroll(container.firstElementChild!, { target: { scrollY: 100 } });
    //
    //   const titleEl = getByText(IndexTitle);
    //   expect(titleEl).toHaveClass("hidden");
    // });

  });

  // describe("Search fn is used", () => {
  //
  //   it("should retrieve all content when input string is empty", async () => {
  //     const repository = new InMemoryRepository();
  //     repository.data = [{id: "1"}, {id: "2"}];
  //
  //     const searchTerm = "";
  //     const result = await executeSearch(repository, searchTerm);
  //
  //     expect(result).toStrictEqual(repository.data);
  //   });
  //
  //   it("should retrieve filtered content when input has a value", () => {
  //
  //   });
  // });

})