import { RotatingLines } from "react-loader-spinner";

export default function ButtonLoader() {
  return (
    <>
      <RotatingLines
        visible={true}
        width="24"
        strokeWidth="5"
        strokeColor="white"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </>
  );
}
