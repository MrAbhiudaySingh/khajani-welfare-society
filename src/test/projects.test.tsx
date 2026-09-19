import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it } from "vitest";
import ProjectsPage from "../pages/ProjectsPage";

describe("ProjectsPage", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProjectsPage />
      </BrowserRouter>
    );
  });
});
