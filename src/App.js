import { CriptoCardContainer, NavBar } from "./components/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import { LanguageProvider } from "./lang/Provider/LanguageProvider";

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <LanguageProvider>
          <NavBar />
          <CriptoCardContainer />
        </LanguageProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
