import { ThemeProvider } from "@mui/material";
import AlignButtons from "./components/1-AlignedButtons/AlignedButtons";
import RegisterForm from "./components/2-GridTextFields/GridTextFields";
import customTheme from "./components/3-customTheme/theme";
import ColorBoxes from "./components/3-customTheme/ColorBoxes";

export default function App() {
  return (
    <div>
      <AlignButtons />
      <RegisterForm />
      <ThemeProvider theme={customTheme}>
        <ColorBoxes />
      </ThemeProvider>
    </div>
  );
}
