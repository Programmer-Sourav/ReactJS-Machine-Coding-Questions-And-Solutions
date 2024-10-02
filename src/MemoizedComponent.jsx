import { memo } from "react";

const MemoizedComponent = React.memo(function AnyComponentWillGoHere(props){
    return <div>{props.value}</div>
})

export default MemoizedComponent;