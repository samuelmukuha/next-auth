"use client"

import {SessionProvider} from "next-auth/react";

export const NexthAuthProvider = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
} 