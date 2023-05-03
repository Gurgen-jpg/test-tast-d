declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

type Reducer<State, Action> =
    (state: State, action: Action) => State;
