'use client';

import React, { createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

type ScrollStackContextValue = {
    itemIndex: number;
};

const ScrollStackContext = createContext<ScrollStackContextValue | null>(null);

const useScrollStackItemContext = () => {
    const context = useContext(ScrollStackContext);
    if (!context) {
        throw new Error('ScrollStackItem must be used within a ScrollStack');
    }
    return context;
};

export const ScrollStackItem = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const { itemIndex } = useScrollStackItemContext();

    const style = {
        // Each card sticks 8rem from the top, plus a 2rem gap for each previous card.
        top: `calc(8rem + ${itemIndex * 2}rem)`,
        zIndex: itemIndex + 10, // Start z-index from 10
    };

    return (
        <div className={cn('sticky', className)} style={style}>
            {children}
        </div>
    );
};

const ScrollStack = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const childrenArray = React.Children.toArray(children);
    
    // Give enough scroll room for each item to be viewed.
    // And extra room at the end to scroll past the stack.
    const containerStyle = {
        height: `calc(${childrenArray.length} * 50vh + 50vh)`,
    };

    return (
        <div className={cn('relative', className)} style={containerStyle}>
            {childrenArray.map((child, index) => (
                <ScrollStackContext.Provider key={index} value={{ itemIndex: index }}>
                    {child}
                </ScrollStackContext.Provider>
            ))}
        </div>
    );
};

export default ScrollStack;
