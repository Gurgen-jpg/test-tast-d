
type Mod = { [key: string]: boolean | undefined}


export function classNames(cls: string, mods: Mod = {}, additional: Array<string | undefined> = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([name, value]) => name)
    ]
        .join(' ');
}
