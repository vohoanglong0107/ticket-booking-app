import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Navbar from "./Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const user = {
  email: "",
};

export const WithoutUser = () => <Navbar user={null} />;
export const WithUser = () => <Navbar user={user} />;
