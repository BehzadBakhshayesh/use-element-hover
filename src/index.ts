import { useState, MouseEvent } from "react";

interface Handlers {
  onMouseOver: (e: MouseEvent) => void;
  onMouseLeave: (e: MouseEvent) => void;
}
interface UseHover {
  isHovering: boolean;
  handlers: Handlers;
}

export const useHover = (): UseHover => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onMouseOver = (e: MouseEvent) => {
    e.stopPropagation();
    setIsHovering(true);
  };

  const onMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    setIsHovering(false);
  };

  const handlers: Handlers = {
    onMouseOver,
    onMouseLeave,
  };

  return { isHovering, handlers };
};
