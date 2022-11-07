import type { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "./Navbar.css";
import Navbar from "./Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

export const Home = () => <Navbar />;
