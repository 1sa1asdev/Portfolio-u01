async function fetchData() {
    try {

        const response = await fetch(`./experience.json`);

        if(!response.ok){throw new Error("Could not fetch resource");}


        const data = await response.json(); 



        }

    
    
    
        catch (error){
        console.log(error);
    }
}