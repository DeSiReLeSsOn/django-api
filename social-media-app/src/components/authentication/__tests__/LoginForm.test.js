import { render, screen } from "../../../helpers/test-utils";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import { faker } from "@faker-js/faker";
import userFixtures from "../../../helpers/fixtures/user";


const userData = userFixtures();

test("rebders Login form", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const loginForm = screen.getByTestId("login-form");
    expect(loginForm).toBeInTheDocument();

    const usernameField = screen.getByTestId("username-field");
    expect(usernameField).toBeInTheDocument();

    const passwordInput = screen.getByTestId("password-field");
    expect(passwordInput).toBeInTheDocument();

});
