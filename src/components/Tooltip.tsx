import * as TooltipRadix from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

interface TooltipProps extends TooltipRadix.TooltipContentProps {
    children: ReactNode
    content: string
    side?: 'top' | 'bottom'| 'left'| 'right'
    delay?: number
}

export function Tooltip({children, content, delay, side, ...rest}: TooltipProps){

    return (
        <TooltipRadix.Provider>
        <TooltipRadix.Root delayDuration={delay}>
        <TooltipRadix.Trigger asChild>
            {children}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
            <TooltipRadix.Content sideOffset={8} side={side} {...rest}>
                {content}
            </TooltipRadix.Content>
        </TooltipRadix.Portal>
        </TooltipRadix.Root>
    </TooltipRadix.Provider>   
    )

   
}