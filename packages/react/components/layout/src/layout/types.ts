import type { Ref } from "react";
import { AsElementProps, StyleProps } from "../core/types";

export type BoxProps = AsElementProps<"div"> & StyleProps & { ref?: Ref<HTMLElement>; };