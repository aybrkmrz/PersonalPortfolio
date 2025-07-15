import AnimatedCursor from "react-animated-cursor";

const Cursor = () => (
  <AnimatedCursor
    innerSize={8}
    outerSize={24}
    color="0, 0, 0"
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={4}
    clickables={[
      'a',
      'button',
      '.link',
      '.cursor-pointer',
    ]}
  />
);

export default Cursor;
