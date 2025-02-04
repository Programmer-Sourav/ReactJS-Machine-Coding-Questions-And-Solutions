import { useState } from "react"
import "./calculator.css"

export default function Calculator(){

  const [result, setResult] = useState(0)
  const [numberSelected, setNumberSelected] = useState({operand1:"", operator:"", operand2:""})
  

    const onClickNumber = (selectedNumber) =>{
      if (numberSelected.operand1 === "" && numberSelected.operator === "") {
        setNumberSelected({...numberSelected, operand1: selectedNumber});
      } else if (numberSelected.operand2 === "" && numberSelected.operator !== "") {
        setNumberSelected({...numberSelected, operand2:  selectedNumber});
      }
      else if (numberSelected.operator === "") {
       setNumberSelected({
      ...numberSelected,
      operand1: `${numberSelected.operand1}${selectedNumber}`,
       });
      } else if (numberSelected.operator !== "" && numberSelected.operand2 !== "") {
        setNumberSelected({
           ...numberSelected,
         operand2: `${numberSelected.operand2}${selectedNumber}`,
      });
  }
  }
    

    const handleOperation = (operatorSelected) =>{
        switch(operatorSelected){
            case "%":
               if(numberSelected.operator===""){
                setNumberSelected({...numberSelected, operator: operatorSelected})
               }
               else{
                let operand1 =  parseInt(numberSelected.operand1);
                let operand2 =  parseInt(numberSelected.operand2);
                let result = operand1 * (operand2/100);
            
                setResult(result);
               }
                break;
                case "/":
                  if(numberSelected.operator===""){
                    setNumberSelected({...numberSelected, operator: operatorSelected})
                   }
                   else{
                    let operand1 =  parseInt(numberSelected.operand1);
                    let operand2 =  parseInt(numberSelected.operand2);
                    let result = operand1 / operand2;
                    setResult(result);
                   }
                    break;
                    case "*":
                      if(numberSelected.operator===""){
                        setNumberSelected({...numberSelected, operator: operatorSelected})
                       }
                       else{
                        let operand1 =  parseInt(numberSelected.operand1);
                        let operand2 =  parseInt(numberSelected.operand2);
                        let result = operand1 * operand2;
            
                        setResult(result);
                       }
                        break;
                        case "-":
                              if(numberSelected.operator===""){
                                setNumberSelected({...numberSelected, operator: operatorSelected})
                              
                               }
                               else{
                                let operand1 =  parseInt(numberSelected.operand1);
                                let operand2 =  parseInt(numberSelected.operand2);
                                let result = operand1 - operand2;
                  
                                setResult(result);
                               }
                                break;
                                case "+":
                                  if(numberSelected.operator===""){
                                    setNumberSelected({...numberSelected, operator: operatorSelected})
                                   
                                   }
                                   else{
                                    let operand1 =  parseInt(numberSelected.operand1);
                                    let operand2 =  parseInt(numberSelected.operand2);
                                    let result = operand1 + operand2;

                                    setResult(result);
                                   }
                                    break;        
        }
    }

    const calculateResult = (numberSelected) =>{
        console.log(2333322, numberSelected, numberSelected.operator)
        handleOperation(numberSelected.operator)
       
    }

    const clearAll = () =>{
        setResult(0)
        setNumberSelected({operand1:"", operator:"", operand2:""})
    }
  
    return(
        <div className="calculator"> 
        <div className="displaytop"> {result ? result : `${numberSelected.operand1}${numberSelected.operator}${numberSelected.operand2}`|| 0}  </div>
        <div className="buttons">
        <button onClick={clearAll} className="display">AC</button>
        {['%', '/', '*', '-', '+'].map((op) => (
          <button key={op} onClick={() => handleOperation(op)} className="display">
            {op.replace('*', '×').replace('/', '÷')}
          </button>
               ))}  
          {
            Array.from({length: 10}).map((_, index)=>(
                <div className="display">
                <button  onClick={()=>{onClickNumber(index)}}>{index}</button>
                </div>
            ))
          }  
            <button onClick={() => calculateResult(numberSelected)} className="display">=</button>
        </div>    
       </div>
    )
}