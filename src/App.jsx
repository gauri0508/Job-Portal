import { ThemeProvider } from "@/components/theme-provider"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import JobPage from './pages/job'
import JobListing from "./pages/jobListing"
import LandingPage from './pages/landing'
import MyJobs from './pages/my-jobs'
import Onboarding from './pages/onboarding'
import PostJob from './pages/post-job'
import SavedJobs from './pages/saved-jobs'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
            <Onboarding />
        ),
      },
      {
        path: "/jobs",
        element: (
            <JobListing />
        ),
      },
      {
        path: "/post-job",
        element: (
            <PostJob />
        ),
      },
      {
        path: "/my-jobs",
        element: (
            <MyJobs />
        ),
      },
      {
        path: "/saved-jobs",
        element: (
            <SavedJobs />
        ),
      },
      {
        path: "/job/:id",
        element: (
            <JobPage />
        ),
      },
    ],
  },
]);
function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
