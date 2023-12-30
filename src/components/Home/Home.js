import SpentList from "../SpentList/SpentList";
import AddSpent from "../AddSpent/AddSpent";

function Home() {
  return (
    <div className="home">
      <AddSpent></AddSpent>
      <SpentList></SpentList>
    </div>
  )
}

export default Home;