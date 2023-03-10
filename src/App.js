import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import { LanguageProvider } from "./lang/Provider/LanguageProvider";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { WorkboxProvider } from "react-workbox";

function App() {
  return (
    <WorkboxProvider interval={30 * 1000}>
      <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <LanguageProvider>
            <RouterProvider router={router} />
          </LanguageProvider>
        </QueryClientProvider>
      </Provider>
    </WorkboxProvider>
  );
}

export default App;
