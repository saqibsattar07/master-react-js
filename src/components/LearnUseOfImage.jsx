import Guitar from '/images/guitar.jpg'
import Vocalist from '../assets/images/vocalist.jpg'


export const LearnUseOfImage = () => {
  return (
    <>
    <h1>Images</h1>
    <img src={Guitar} alt="" width="500px" />
    <br />
    <img src={Vocalist} alt="" width="500px"/>
    </>
  )
}
