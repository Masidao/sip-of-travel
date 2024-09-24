import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "../../pages/Login";
import { BrowserRouter } from "react-router-dom";

describe("Login Component", () => {
  it("카카오 로그인 버튼이 표시된다", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
    expect(screen.getByAltText("kakao_login")).toBeInTheDocument();
  });
});
