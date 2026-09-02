import { vars } from "@foundation/themes";
import { clsx } from "clsx";
import * as React from "react";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { BoxProps } from "./types";

const resolveThemeColor = (value?: string, tone = 700) => {
    if (!value) {
        return undefined;
    }

    const palette = vars.colors.$scale as Record<string, Record<number, string>>;

    return palette[value]?.[tone] ?? value;
};

const buildBoxStyle = (props: BoxProps) => ({
    color: resolveThemeColor(props.color, 700),
    background: resolveThemeColor(props.background, 100),
});

const Box = (props: BoxProps): React.ReactElement => {
    const {
        as: Component = "div",
        color,
        background,
        className,
        children,
        ref,
        style,
        ...rest
    } = props;

    const sprinkleProps = extractSprinkleProps(
        props,
        Array.from(StyleSprinkles.properties),
    );

    return React.createElement(
        Component,
        {
            ...rest,
            ref,
            className: clsx([
                StyleSprinkles(sprinkleProps),
                className,
            ]),
            style: {
                ...buildBoxStyle(props),
                ...style,
            },
        },
        children,
    );
};

export { Box };

