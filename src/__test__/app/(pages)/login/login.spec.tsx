import LoginPage from "@/app/(pages)/login/page";
import LoginPageLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";

describe("Login Page", () => {
  it("should render", () => {
    const page = render(
      <LoginPageLayout>
        <LoginPage />
      </LoginPageLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
