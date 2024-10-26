import { useContext } from "react"
import { GlobalContext } from "../../context"



export default function Home(){

    const {} = useContext(GlobalContext);aa
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ?
             : null
        }
    </div>
}