export const LearnLiftingStateUp = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        
       let dt = "Iam child data"
       props.myClick(dt)
    }
  return (
    <>
    <button onClick={handleClick}>Click 1</button>
    </>
  )
}
