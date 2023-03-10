import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import { LanguageProvider } from "./lang/Provider/LanguageProvider";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import { WorkBoxProvider } from "react-workbox";

function App() {
  return (
    <WorkBoxProvider interval={30 * 1000}>
      <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <LanguageProvider>
            <RouterProvider router={router} />
          </LanguageProvider>
        </QueryClientProvider>
      </Provider>
    </WorkBoxProvider>
  );
}

export default App;
