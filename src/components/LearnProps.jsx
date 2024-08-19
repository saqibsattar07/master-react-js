export const LearnProps = (props) => {
  return (
    <>
    <h1>All Props</h1>
    <h1>{props.name}</h1>
    <h1>{props.rollNo}</h1>
    </>
  )
}


// // Object Destructure 
// export const LearnProps = ({name, rollNo}) => {
//   return (
//     <>
//     <h1>All Props</h1>
//     <h1>{name}</h1>
//     <h1>{rollNo}</h1>
//     </>
//   )
// }