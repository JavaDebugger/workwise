import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import JobPostingForm from "./components/JobPostingForm";
// If you have a global CSS file, import it here
// import './index.css'; // Or App.css, etc.

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JobPostingForm />
    </QueryClientProvider>
  );
}

export default App;
