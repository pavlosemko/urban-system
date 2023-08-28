// import logo from "./logo.svg";
import "./App.css";
import Contacts from "./components/Contacts";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: "50px" }}>
        <Contacts />
      </Container>
    </ThemeProvider>
  );
}

export default App;
