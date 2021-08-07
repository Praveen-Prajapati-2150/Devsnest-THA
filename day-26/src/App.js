import "./App.css";
import Display from "./Display";
import Input from "./Input";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Input />
        {/* <Display /> */}
        <UserList/>
      </div>
    </UserProvider>
  );
}

export default App;
