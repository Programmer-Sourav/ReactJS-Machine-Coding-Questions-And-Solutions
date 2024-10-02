import useWindowSize from "./useWindowSize";

export default function WindowSizeComponent(){
  const { width, height} = useWindowSize();

  return (
    <div>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
    </div>
);
}