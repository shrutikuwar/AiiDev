import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: { blue_500: "bg-blue-500 text-gray-300", white_A700: "bg-white-A700" },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-4", lg: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_500", "white_A700"]),
};

export { Button };
