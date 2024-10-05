import { MouseEvent } from "react";
interface Handlers {
    onMouseOver: (e: MouseEvent) => void;
    onMouseLeave: (e: MouseEvent) => void;
}
interface UseHover {
    isHovering: boolean;
    handlers: Handlers;
}
export declare const useHover: () => UseHover;
export {};
