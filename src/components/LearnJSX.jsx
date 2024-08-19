export const LearnJSX = () => {
    let model = "G11234"
  return (
    <>
    {/* react.createElement("h1", null, "Learn JavaScript XML")  */}
    <h1>Learn JavaScript XML</h1>
    {/* react.createElement("h1", null, "Learn JavaScript XML 2")  */}
    <h1>Learn JavaScript XML 2</h1>

    {/* JavaScript Expression in JSX */}
    <h1>price: {10 + 20}</h1>
    <h1>LG: {model}</h1>

    {/* Attribute in JSX */}
    <h1 className="bg-primary">Learn JSX</h1>
    <h1 className={model}>Learn JSX</h1> 
    </>
  )
}
