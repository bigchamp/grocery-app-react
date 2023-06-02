"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryWrapper = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )};

export default QueryWrapper;