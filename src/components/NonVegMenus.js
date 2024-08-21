
export function NonVegMenus({item}){
    let nonvegMenus=["Chicken Masala", "Mutton Masala", "Prawns Fry", "Chicken Kheema", "Fish Tawa Fry"]
    let liNodes= nonvegMenus.filter(nonvegitem=>nonvegitem.toLowerCase().includes(item))
                            .map((nonvegitem, i)=><li key={"n"+i}>{nonvegitem}</li>)
    return (
        <>
         <h3>NonVeg Main Course</h3>
        <ol>
            {liNodes}   
        </ol>
        </>
    );
}