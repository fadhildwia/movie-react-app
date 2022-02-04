import React from "react"
import "./Star.scss";

type Props = {
  value: number
  height: number
  width: number
  spacing: number
  className?: string
}

const Star: React.FC<Props> = ({
  value,
  height,
  width,
  spacing,
  className
}) => {
  const decimals = Number(value) % 1

  const star = []
  let leftPos = 0
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width
    star.push(
      <div className="star" key={`star-${index}`} style={{ left: index * width, height: height, width: width, marginRight: spacing }}></div>
    )
  }

  //   eslint-disable-next-line no-undef
  if (decimals > 0 && value <= 5) {
    star.push(
      <div key={`starwithdecimals`} className="star" style={{ left: leftPos, height: height, width: decimals * width - spacing }}></div>
    )
  }

  const startPlaceholder: any[] = []
  for (let index = 0; index < 5; index++) {
    leftPos = leftPos + width
    star.push(
      <div className="star placeholder" key={`placeholder-${index}`} style={{ left: index * width, height: height, width: width, marginRight: spacing, cursor: 'auto' }}></div>
    )
  }

  return (
    <>
      <div className={["stars", className].join(" ")} style={{ height: height }}>
        {startPlaceholder}
        {star}
      </div>
    </>
  );
}

export { Star }
