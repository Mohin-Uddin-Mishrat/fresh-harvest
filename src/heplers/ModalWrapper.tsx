import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalWrapperProps {
  trigger?: ReactNode;
  title: string;
  children: ReactNode;
  open?: boolean; // ✅ Add this
  onOpenChange?: (open: boolean) => void; // ✅ Add this
}

export default function ModalWrapper({
  trigger,
  title,
  children,
  open,
  onOpenChange,
}: ModalWrapperProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}> {/* ✅ Controlled */}
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
