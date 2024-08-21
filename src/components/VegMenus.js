

export function VegMenus(){
    let vegMenus=["Paneer Masala", "Veg Kadhai", "Mix veg", "Paneer Burji", "Veg Tawa Fry", 'Fried Paneer']
    let liNodes= vegMenus./* filter(vegitem=>vegitem.toLowerCase().includes('paneer')). */
    map((vegitem, i)=><li key={"v"+i}>{vegitem}</li>)
    return (
        <>
         <h3>Veg Main Course</h3>
        <ol>
            {liNodes}   
        </ol>
        </>
    );
}