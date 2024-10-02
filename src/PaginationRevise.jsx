import { useEffect, useState } from "react"

export default function PaginationRevise(){
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  const numberOfItemsPerPage = 5;
  

  useEffect(()=>{
    const dummyData = [];
    for (let i = 1; i <= 30; i++) {
      dummyData.push({ id: i, name: `Item ${i}` });
      setData(dummyData);
    }
  }, [])

  //no of items per page
  //determine index based on no of items per page
  //currentPage no

  const indexOfLastItem = page*numberOfItemsPerPage;  //2*5 = 10
  const indexOfFastItem = indexOfLastItem - numberOfItemsPerPage; //10-5
  const currentItemsForCurrentPage = data.slice(indexOfFastItem, indexOfLastItem);
  const totalNumberOfPage = data.length/numberOfItemsPerPage;

  console.log(12345, Array.from(totalNumberOfPage).map((_, index)=>(<button onClick={getCurrentPageNumber(index+1)}></button>)));

  console.log(123, data, indexOfFastItem, indexOfLastItem, currentItemsForCurrentPage, totalNumberOfPage)
  
  const getCurrentPageNumber = (currentPageNumber) =>{
    setPage(currentPageNumber)
  }

    return(
        <div> 
           {
             currentItemsForCurrentPage.map((dataItem)=>{
                <li>{dataItem.id} - {console.log(dataItem.name)}</li>
             })
             
           }
           {Array.from(totalNumberOfPage).map((_, index)=>(<button onClick={getCurrentPageNumber(index+1)}></button>))}
        </div>
    )
}