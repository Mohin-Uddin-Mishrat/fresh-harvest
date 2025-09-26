import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalWrapperProps {
  trigger?: ReactNode;
  title: string;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function ModalWrapper({
  trigger,
  title,
  children,
  open,
  onOpenChange,
}: ModalWrapperProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}> 
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className="modaleOverlay" />
        <Dialog.Content className="modalContent space-y-3">
          <div className="flex justify-between items-center gap-5">
            <Dialog.Title className="modalTitle">{title}</Dialog.Title>

            <Dialog.Close asChild className="cursor-pointer">
              &times;
            </Dialog.Close>
          </div>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
