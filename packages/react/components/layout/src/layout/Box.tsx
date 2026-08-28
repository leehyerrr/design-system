import { vars } from "@foundation/themes";
import { clsx } from "clsx";
import * as React from "react";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { BoxProps } from "./types";

const Box = (props: BoxProps): React.ReactElement => {
    const {
        as = "div",
        color,
        background,
        children,
        ref,
        ...rest
    } = props;

    return React.createElement(
        as,
        {
            ...rest,
            ref,
            className: clsx([
                StyleSprinkles(
                    extractSprinkleProps(
                        props,
                        Array.from(StyleSprinkles.properties),
                    ),
                ),
                props.className,
            ]),
            style: {
                color: vars.colors.$scale?.[color]?.[700] ?? color,
                background: vars.colors.$scale?.[background]?.[100] ?? background,
                ...props.style,
            },
        },
        children,
    );
};

export { Box };

