import React,{useState,useEffect} from "react";

export default function Progressbar() {
  const [value,onChange]=useState(1);
  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}%`;
    }
  })
  return (
    <div className="slider-parent">
      <input type="range" min="1" max="500" step={4} value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <div className="buble"> 
      {value}
      </div>
    </div>
  );
}