'use client';

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledDialog = styled.dialog`
  &::backdrop {
    background-image: linear-gradient(
      45deg,
      magenta,
      rebeccapurple,
      dodgerblue,
      green
    );
    opacity: 0.75;
  }
`;

type Props = {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function Dialog({ children, open, setOpen }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Listen for open change
  useEffect(() => {
    if (!dialogRef.current) return;
    if (open) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [open]);

  // Listen for click out
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Don't close on initial open/click
      if (!open || !dialogRef.current) return;

      // Bounding box as checking target wont work
      // if the dialog has padding (default browser behavior)
      const rect = dialogRef.current.getBoundingClientRect();
      const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener('click', onClick);
    else document.removeEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [open, setOpen]);

  return <StyledDialog ref={dialogRef}>{children}</StyledDialog>;
}
