
import './App.css'
import ContactList from "./components/ContactList"
import SelectedContact from "./components/SelectedContact"
 
export default function App() {
  const [setSelectedContactId, setSelectedContactId] = useState(null);
const [firstname, setFirstName] = useState(``);

    return (
      <>
      <form>
        <label>Name</label><input name = "firstname" onChange={(event) => setFirstName(event.target.value)}></input>
      </form>

      {setSelectedContactId ? (
        <SelectedContact
        selectedContactId={selectedContactId}
        setSelectedContactId={setSelectedContactId}
        />
      ):(
        <ContactList selectedContactId ={setSelectedContactId}/>
      )}
        </>
    );
  }
