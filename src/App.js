import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./Components/Characters";

const queryClient = new QueryClient();

export function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
