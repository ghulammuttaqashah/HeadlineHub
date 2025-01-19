import { useState } from "react";
import TopHeadline from "./TopHeadline";
function Category()
{
    let [category,setCategory]=useState("Business");

    function handleCategory(e)
    {
        setCategory(e.target.value);
    }

    return (
        <>
            <div className="category">
                <h1>News Categories</h1>
                <select name="" id="category" value={category} onChange={handleCategory}>  
                    <option value="Business">Business</option>
                    <option value="Technology">Technology</option>
                    <option value="Sports">Sports</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                </select>
            </div>
            <TopHeadline category={category}/>
        </> 
    );
}
export default Category