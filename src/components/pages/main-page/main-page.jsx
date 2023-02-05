import Main from "../../layout/main/main.jsx";
import Advantages from "../../layout/advantges/advantages"

export default function MainPage({features}) {
  return (
    <>
      <Main></Main>
      <Advantages features={features}></Advantages>
    </>
  )
}