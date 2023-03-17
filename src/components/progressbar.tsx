import React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import cn from "classnames";

const Progressbar = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      renderThumb={(props, state) => (
        <div
          {...props}
          className={cn({
            "h-full": !isVertical,
            "w-full": isVertical,
            "aspect-square before:content-[''] before:bg-[url(/images/emoji.png)] before:bg-contain before:bg-no-repeat before:bg-center before:w-20 before:h-20 before:-top-24 before:absolute relative rounded-full bg-white border-[8px] border-primary py-2 text-xs text-primary flex items-center justify-center cursor-grab":
              true,
          })}
        >
          {state.valueNow}
        </div>
      )}
      renderTrack={(props, state) => {
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index != 0;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn({
              "h-1/4 top-1/2 -translate-y-1/2": !isVertical,
              "w-1/4 left-1/2 -translate-x-1/2": isVertical,
              "rounded-full": true,
              "bg-shade/20": isMulti ? isFirst || isLast : isLast,
              "bg-primary": isMulti ? !isFirst || !isLast : isFirst,
            })}
          ></div>
        );
      }}
      renderMark={(props) => {
        return (
          <div
            {...props}
            className={cn({
              "top-1/2 -translate-y-1/2": !isVertical,
              "left-1/2 -translate-x-1/2": isVertical,
              "h-1 w-1": true,
              "rounded-full bg-primary": true,
            })}
          ></div>
        );
      }}
    />
  );
};
export default Progressbar;
