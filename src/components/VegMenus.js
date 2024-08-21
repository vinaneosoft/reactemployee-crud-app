

export function VegMenus(props){
    let vegMenus=["Paneer Masala", "Veg Kadhai", "Mix veg", "Paneer Burji", "Veg Tawa Fry", 'Fried Paneer', 'paav bhaaji']
    let liNodes= vegMenus.filter(vegitem=>vegitem.toLowerCase().includes(props.item))
                        .map((vegitem, i)=><li key={"v"+i}>{vegitem}</li>)
    return (
        <>
         <h3>Veg Main Course</h3>
        <ol>
            {liNodes}   
        </ol>
        </>
    );
}