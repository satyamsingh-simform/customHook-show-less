import { type ReactNode } from "react";
import useDisplayList from "./useDisplayList";

type DisplayListProps={
    lists:ReactNode[],
    Maxcount:number,
}

export default function DisplayList({lists, Maxcount}:DisplayListProps){
    const {expended,handleExpendedToggle}=useDisplayList();

    return(
        <>
            {
                expended?
                lists.map((list,index)=>(
                    <p key={`${list}-${index}`}>{list}</p>
                ))
                :
                lists.slice(0,Maxcount).map((list,index)=>(
                    <p key={`${list}-${index}`}>{list}</p>
                ))
            }
            <button onClick={handleExpendedToggle}>{expended?`showLess:${Maxcount}`:`showMore:${lists.length-Maxcount}`}</button>
        </>
    )
}