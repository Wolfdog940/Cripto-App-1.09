
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import { LanguageProvider } from "./lang/Provider/LanguageProvider";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";



function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <LanguageProvider>
        <RouterProvider router={router} />
        </LanguageProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
