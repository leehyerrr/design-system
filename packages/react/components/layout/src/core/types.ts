import { vars } from "@foundation/themes";
import type { JSX } from "react";
import { StyleSprinkles } from "./style.css";

type ColorToken = keyof typeof vars.colors.$scale & string;

type AsProps<T extends keyof JSX.IntrinsicElements = "div"> = {
    as?: T;
};

type ElementProps<T extends keyof JSX.IntrinsicElements = "div"> = Omit<
    React.ComponentPropsWithoutRef<T>,
    "as" | "color" | "background"
>;

export type AsElementProps<T extends keyof JSX.IntrinsicElements = "div"> = AsProps<T> & ElementProps<T>;

export type ColorProps = {
    color?: ColorToken | string;
    background?: ColorToken | string;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;