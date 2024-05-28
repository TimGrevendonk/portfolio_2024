import { createContext, useRef, useState } from 'react';

export const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
        const worksRef = useRef(null);
        const aboutRef = useRef(null);
        const skillsRef = useRef(null);
    
        return (
            <NavigationContext.Provider value={{worksRef, aboutRef, skillsRef}}>
                {children}
            </NavigationContext.Provider>
        );
    };
