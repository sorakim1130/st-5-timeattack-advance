import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryProvider = ({children}) => {
  return (
    <QueryClientProvider queryClient={queryClient}>{children}</QueryClientProvider>
  )
}

export const QueryProvider;