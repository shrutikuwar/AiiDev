import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtPlusJakartaSansRomanBold18: "font-bold font-plusjakartasans",
  txtInterBold25: "font-bold font-inter",
  txtInterRegular16IndigoA200: "font-inter font-normal",
  txtInterBold28: "font-bold font-inter",
  txtPlusJakartaSansRomanMedium32: "font-medium font-plusjakartasans",
  txtInterBold24: "font-bold font-inter",
  txtPlusJakartaSansRomanBold32: "font-bold font-plusjakartasans",
  txtInterBold20: "font-bold font-inter",
  txtActorRegular18: "font-actor font-normal",
  txtInterMedium50: "font-inter font-medium",
  txtInterMedium50WhiteA700b1: "font-inter font-medium",
  txtMetamorphous60: "font-metamorphous font-normal",
  txtActorRegular30: "font-actor font-normal",
  txtMichroma50: "font-michroma font-normal",
  txtActorRegular18Gray700: "font-actor font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium50Black90001: "font-inter font-medium",
  txtInterRegular16WhiteA70097: "font-inter font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtPlusJakartaSansRegular16: "font-normal font-plusjakartasans",
  txtInterBold20Lightblue800b1: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterBold20WhiteA700b1: "font-bold font-inter",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
