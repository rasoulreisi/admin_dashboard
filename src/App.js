import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppRouter from "./routes/AppRouter";
import {Theme} from "./components";

function App() {
  return (
      <Theme>
        <AppRouter/>
      </Theme>
  );
}

export default App;
