import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { LanguageProvider } from "./context/LanguageContext";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </>
  );
}

export default App;
