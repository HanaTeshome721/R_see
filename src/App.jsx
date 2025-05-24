import { use, useEffect, useState } from "react"

const Card=({title})=>{
  const [count,setCount]=useState(0);
  const [ hasliked,sethasliked]=useState(false);

  useEffect(() => {
    console.log(`The card with title "${title}" has been liked:${hasliked}.`);
    
  },[hasliked])

  useEffect(() => {
    console.log(`The card times.`);
  },[])

   
   return(
    < div className="card" onClick={() => setCount((prev) => prev + 1)}>
      <h4>{title}<br/>{count || null}</h4>
      <button onClick={() => sethasliked(!hasliked)}>
       { hasliked ? "Unlike" : "Like"}
      </button>
    </div>
   )
}

const App=() =>{
   
 return (
  <>
 
  <h2>welcome my to the real thing</h2>
   <Card title="Star war"/>
  <Card title="Avater"/>
  <Card title="The lion King"/>
  </>
 )

}

export default App
