import DisplayList from "./components/DisplayList"

export default function App(){
  const lists=['1','2','3','4','5','6','7','8','9','10']
  const lists2=[1,2,3,4,5,6,7,8,9,10,11,12]
  
  return(
    <>
      <DisplayList lists={lists} Maxcount={6}/>
      <DisplayList lists={lists2} Maxcount={7}/>
    </>
  )
}