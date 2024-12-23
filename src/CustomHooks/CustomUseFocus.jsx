import useFocusRevise from "./useFocusRevise";

export default function CustomUseFocus(){

 const { ref, focused } = useFocusRevise();
     console.log(111, ref, focused)
    return(
        <div> 
              <p ref={ref} tabIndex={0}>I am now {focused ? "Focused" : "Not Focused"}</p>
        </div>
    )
}