import { useEffect, useState } from "react"

export default function Pagination(){
   const [currentPageNumber, setCurrentPageNumber] = useState(1);
   const [data, setData] = useState([])
   const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(5)

   //load some dummy data
   useEffect(()=>{
    const dummyData = [];
    for (let i = 1; i <= 22; i++) {
      dummyData.push({ id: i, name: `Item ${i}` });
    }
    setData(dummyData);
   }, [])

   //each page contains 5 items, so 20 items will have 20/5 = 4 pages
   //set current page number
   //determine next page number
   //calculate first item, last item index for current page

   const indexOfLastItem = currentPageNumber * numberOfItemsPerPage;
   const indexOfFirstItem = indexOfLastItem - numberOfItemsPerPage;
   const currentItemsForCurrentPage = data.slice(indexOfFirstItem, indexOfLastItem);
   console.log("123", currentItemsForCurrentPage);

   const paginate = currentPageNumber => setCurrentPageNumber(currentPageNumber);

  

    return(
        <div> 
           {
            currentItemsForCurrentPage.map((currentItem)=>(
                <li key={currentItem.id}>{currentItem.name}</li>
            ))}
            {Array.from({ length: Math.ceil(data.length / numberOfItemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
        </div>
    )
}