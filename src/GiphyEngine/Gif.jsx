import "../giffy.css"

export default function Gif({giffies}){
console.log(111, giffies)

    return(
        <div> 
            {
                giffies.map((giffyItem)=>(
                    <div className="giffycard">
                    <p><span><strong>Title: </strong></span>{giffyItem.title}</p>
                    <p><span><strong>Date Time: </strong></span>{giffyItem.import_datetime}</p>
                    <img src={giffyItem.images.fixed_height.url} alt={giffyItem.title} width="256px" height="128px"/>
                    </div>
                ))
            }

        </div>
    )
}