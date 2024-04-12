/* eslint-disable react/prop-types */
const FacebookIcon = ({
  fill = "var(--foreground)",
  size = "32",
  className,
}) => {
  return (
    <svg
      id="FacebookIcon"
      viewBox="0 0 35.9 35.9"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={size}
      height={size}
      className={className}
    >
      <path
        className="cls-1"
        d="m17.95,35.73v-.17c-4.87,0-9.27-1.97-12.46-5.16C2.3,27.22.33,22.82.33,17.95s1.97-9.27,5.16-12.46C8.68,2.3,13.08.33,17.95.33c4.87,0,9.27,1.97,12.46,5.16,3.19,3.19,5.16,7.59,5.16,12.46s-1.97,9.27-5.16,12.46c-3.19,3.19-7.59,5.16-12.46,5.16v.33c9.91,0,17.95-8.04,17.95-17.95S27.86,0,17.95,0,0,8.04,0,17.95s8.04,17.95,17.95,17.95v-.17Z"
      />
      <path
        className="cls-1"
        d="m15.55,27.48h3.84v-9.61h2.68l.29-3.22h-2.96v-1.83c0-.76.15-1.06.89-1.06h2.08v-3.34h-2.66c-2.86,0-4.14,1.26-4.14,3.67v2.57h-2v3.26h2v9.57Z"
      />
    </svg>
  );
};

export default FacebookIcon;
