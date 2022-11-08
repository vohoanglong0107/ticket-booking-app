import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = () => <Footer />;
