import { Box as _Box } from "@foundation/react-components-layout";
import "@foundation/react-components-layout/style.css";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "20",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "full",
    marginX: "10",
    marginRight: "16",
  },
};
