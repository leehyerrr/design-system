export const extractSprinkleProps = <T extends object>(
    props: T,
    keys: (keyof T)[],
) => {
    const result: Partial<T> = {};

    keys.forEach((key) => {
        const value = props[key];

        if (value !== undefined) {
            result[key] = value;
        }
    });

    return result;
};