import logo from './logo.svg';
import './App.css';
// import Pagination from './Pagination';
// import WorkerExample from './WorkerExample';
//import CountdownTimer from './CountdownTimer';
import DateTimeComponent from './DateTimeComponent';
import AddRemoveItem from './AddRemoveItem';
import CounterComponent from './CounterComponent';
import DataFetchingComponent from './DataFetchingComponent';
import ToggleComponent from './ToggleComponent';
import LocalStorageComponent from './LocalStorageComponent';
import UsePreviousComponent from './UsePreviousComponent';
import DebounceComponent from './DebounceComponent';
import WindowSizeComponent from './WindowSizeComponent';
import RatingComponent from './RatingComponent';
//import InfiniteScroll from './InfiniteScroll';
import TicTacToe from './TicTacToe';
import PaginationRevise from './PaginationRevise';
//import Parent from './Parent';
import Usememo from './Usememo';
import InputFocus from './InputFocus';
import UseCallbackRevise from './UseCallbackRevise';
import UseMemoRevise from './UseMemoRevise';
import Accordian from './Accordian/Accordian';
import AnalogClock from './AnalogClock/AnalogClock';
import  slides from "../src/Carousel/data/carouselData.json"
import Carousel from './Carousel/Carousel';
import Timer from './CountdownTimer/Timer';
import CountdownTimer from './CountdownTimer/CountdownTimer';
import InfiniteScroll from './InfinteScroll/InfiniteScroll';
import { createContext, useContext, useEffect, useState } from 'react';
import ToggleTheme from './ToggleTheme';
import ProgressBar from './ProgressBar/ProgressBar';
import Form from './Form';
import CountdownTimerRevise from './CountdownTimerRevise';
import HandleWindowSize from './HandleWindowSize';
import CountdownTimerR from './CountdownTimer/CountdownTimerR';
import ProgressbarRevise from './ProgressBar/ProgressbarRevise';
import StarRatingComponent from './StarRatingComponent';
import ToastNotification from './ToastNotification/ToastNotification';
import TodoList from './TodoList/TodoList';
import StarRating from './StarRating/StarRating';
import Typeahead from './typeaheadcopied/Typeahead';
import TypeAhead from './TypeAhead/TypeAhead';
import { ChildButton, ClickCounterWrapper } from './WrapperComponent/ClickCounterWrapper';
import EmailTemplates from './EmailTemplates/EmailTemplates';
import StopWatch from './Stopwatch/StopWatchVTwo';
import StopwatchvOne from './Stopwatch/StopwatchvOne';
import JsonAccordian from './Json-accordian/JsonAccordian';
import { DataParent } from './DataPassing';
import Counter from './UseReducerDemo.js';
import MyForm from './MyForm.jsx';
import Greeting from './GreetingProptypes.js';
import Parent from './UseCallbackDemo.jsx';
import UseRefDemo from './UseRefDemo.jsx';
import InputComponentHook from './InputCustomHook.jsx';
import TraficLight from './TraficLight.jsx';
import Tabs from './TabSelection/Tabs.jsx';
//import NestedComments from './NestedComments/NestedComments.jsx';
import NestedCommentsRJS2 from './NestedComments/NestedCommentsRJS2.jsx';
import NestedComponents from './NestedComments/NestemCommentsFull/NestedComponents.jsx';
import CommentsData from "./NestedComments/NestemCommentsFull/data/comments.json"
import NestedComments from './NestedComments/NestemCommentsFull/components/NestedComments.jsx';
import MainFile from './NestedComments/NestedComments/MainFile.jsx';
import FilterList from './ApiIntegration/FilterList.jsx';
import useTimeout from './CustomHooks/useTimeout.jsx';
import usePrevious from './usePrevious.js';
import useHover from './CustomHooks/useHover.jsx';
import useToggle from './CustomHooks/useToggle.jsx';
import useDebounce from './useDebounce.js';
import useFocus from './CustomHooks/useFocus.jsx';
import useCopyToClipboard from './CustomHooks/useCopyToClipboard.jsx';
import useDarkMode from './CustomHooks/useDarkMode.jsx';
import TransferList from './ListTransfer/TransferList.jsx';
import MultiSelectDropdown from './MultiSelectDropdown/MultiSelectDropdown.jsx';
import MyRouter from './Router/MyRouter.jsx';
//import useToggle from './useToggle.js';

//import NestedCommentsLatest from './NestedComments/NestedCommentsLatest.jsx';
// import EmailTemplates from './EmailTemplatesCopied/EmailTemplates';
//import Accordian from './Accordian';



function App() {
  const [message, setMessage] = useState("Waiting!")
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)
  const [hoverRef, isHovering] = useHover()
  const [toggleState, toggleFunction] = useToggle()
  const [searchInputValue, setSearchInputValue] = useState("")
  const [ref, focus] = useFocus()
  const [copiedText, copy] = useCopyToClipboard() 

  const debouncedSearchValue = useDebounce(searchInputValue, 500)

  const {selectedMode, changeMode} = useDarkMode();
  console.log(123, selectedMode)

  useEffect(()=>{
    if (debouncedSearchValue) {
      console.log(`Searching for ${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue])
  // useTimeout(()=>{setMessage("Completed execution!")}, 5000)


  // useEffect(() => {
  //   console.log(
  //     `Current count is ${count}, Previous Count is ${previousCount || 0}`
  //   );
  // }, [count]);

  const navigate = (path) =>{
     // Use the browser history API to change the path without reloading
     window.history.pushState({}, "", path)
     // Dispatch a 'popstate' event to trigger re-render
     window.dispatchEvent(new PopStateEvent("popstate"))
  }
  return (
    <div className="App">
      {/* <Pagination/>
      <WorkerExample/> */}
      {/* <CountdownTimer/>
      <DateTimeComponent/> */}
      {/* <AddRemoveItem/> */}
      {/* <CounterComponent/> */}
      {/* <DataFetchingComponent/> */}
      {/* <ToggleComponent/> */}
      {/* <LocalStorageComponent/> */}
      {/* <UsePreviousComponent/> */}
      {/* <DebounceComponent/> */}
      {/* <WindowSizeComponent/> */}
      {/* <RatingComponent  readRating={3.5}/> */}
      {/* <InfiniteScroll/> */}
      {/* <TicTacToe/> */}
      {/* <PaginationRevise/> */}
      {/* <Parent/> */}
      {/* <Usememo/> */}
      {/* <InputFocus/> */}
      {/* <UseCallbackRevise/> */}
      {/* <UseMemoRevise/> */}
      {/* <Accordian/> */}
      {/* <AnalogClock/> */}
      {/* <Carousel data={slides.slides}/> */}
      {/* <Timer/> */}
      {/* <CountdownTimer/> */}
      {/* <InfiniteScroll/> */}
      {/* <ToggleTheme/> */}
      {/* <ProgressBar/> */}
      {/* <Form/> */}
      {/* <CountdownTimerRevise/> */}
      {/* <Usememo/> */}
      {/* <UseMemoRevise/> */}
      {/* <HandleWindowSize/> */}
      {/* <CountdownTimerR/> */}
      {/* <ProgressbarRevise/> */}
      {/* <StarRatingComponent/> */}
      {/* <ToastNotification/> */}
      {/* <TodoList/> */}
      {/* <StarRating/> */}
      {/* <Typeahead/> */}
      {/* <TypeAhead/> */}
       {/* <ClickCounterWrapper>
      <ChildButton/>
      </ClickCounterWrapper> */}
      {/* <EmailTemplates/> */}
      {/* <EmailTemplates/> */}
      {/* <StopWatch/> */}
      {/* <StopwatchvOne/> */}
      {/* <StopWatch/> */}
      {/* <JsonAccordian/> */}
       {/* <DataParent/> */}
       {/* <Counter/> */}
       {/* <MyForm/> */}
       {/* <Greeting name="Sourav" age="35"/> */}
       {/* <Parent/> */}
       {/* <UseRefDemo/> */}
       {/* <InputComponentHook/> */}
       {/* <TraficLight/> */}
       {/* <Tabs/> */}
       {/* <NestedComments/> */}
       {/* <NestedComments2/> */}
       {/* <NestedCommentsRJS/> */}
       {/* <NestedCommentsRJS2/> */}
       {/* <NestedCommentsLatest/> */}
        {/* <NestedComments initialcomments = {CommentsData}
                        onSubmit = {()=>{}}
                        onEdit = {()=>{}}
                        onDelete= {()=>{}}
                        onUpvote = {()=>{}}
                        onDownvote= {()=>{}}/> */}
        {/* <MainFile/>                 */}
        {/* <FilterList/> */}
       {/* <h1>{message}</h1> */}
       {/* <button onClick={()=>setCount(count+1)}>Increment Count</button> */}
       {/* <p ref={hoverRef} style={{color:isHovering ? "blue" : "black"}}>
       {isHovering
          ? "You're hovering over me!"
          : "I'm not being hovered over."}
       </p> */}
       {/* <button onClick={toggleFunction}>{toggleState ? "ON" : "OFF"}</button> */}
       {/* <input
        type='text'
        onChange={(e) => setSearchInputValue(e.target.value)}
        placeholder='Please search here...'
        value={searchInputValue}
      /> */}
      {/* <input ref={ref}/>
      <p>{focus ? "Focused" : "Not Focused"}</p> */}
      {/* <button onClick={()=>copy('YOU HAVE COPIED THIS!!')}>Copy Text</button>
      {copiedText && <span>Copied: {copiedText}</span>} */}
      {/* <p>{!selectedMode? <button onClick={changeMode}>Change To Dark Mode</button>  : <button onClick={changeMode}>Change To Ligth Mode</button> }</p> */}
      {/* <TransferList/> */}
      {/* <MultiSelectDropdown/> */}
      <nav>
                <button onClick={() => navigate('/home')} style={{margin:"2px"}}>Home</button>
                <button onClick={() => navigate('/pageone')} style={{margin:"2px"}}>Page One</button>
                <button onClick={() => navigate('/user/123')} style={{margin:"2px"}}>User 123</button>
                <button onClick={() => navigate('/user/456')} style={{margin:"2px"}}>User 456</button>
            </nav>
      <MyRouter/>
    </div>
  );
}

export default App;
