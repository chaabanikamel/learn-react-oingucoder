 
export default function MyFirstComponent() {


  const person ={
    name:"pingucoder",
    email:"pingucoder@gmail.com"  };
    const elemnStyle = {
      backgroundcolor: "cyan",
      fontsize:"20px",
      boxShadow: "0px 20px 10px"
    }
  return (
    <div>
      <h1 style={elemnStyle}>{person.name}</h1>
      <h3>{person.email}</h3>
      <h2 style ={elemnStyle}>hi</h2>
      <button onClick={saySalem}>Click me</button> 
    </div>
  );
}

