/*
import { useState } from "react"

type DisplayListProp={
    lists:string[],
    countt:number,
}

export default function DisplayList({lists,countt}:DisplayListProp){
    const [show,setShow]=useState(false);
    let count=0;
    function handleShowMore(){
        setShow((prev)=>!prev)
    }

    return(
        <>
        {
             show?
                lists.map((list)=>(
                    <p key={list}>
                        {list}
                    </p>
                ))
                :
                lists.map((list)=>{
                    count++;
                    if(count>countt){
                        return
                    }
                    return <p key={list}>{list}</p>
                })
        }
        <button onClick={handleShowMore}>{show?"showLess":`showMore:${lists.length-countt}`}</button>
        </>
    )
}
*/

import { useState } from "react";

export default function useDisplayList(){
    const [expended,setExpended]=useState(false);
    
    function handleExpendedToggle(){
        setExpended(prev=>!prev)
    }

    return{expended,handleExpendedToggle}
}