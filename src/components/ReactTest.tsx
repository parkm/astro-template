import { useState } from "react";
import { Button } from "@/ui/button";
import { Drawer, DrawerContent, DrawerTitle } from "@/ui/drawer";
import { DisplayModeToggle } from "@/ui/display-mode-toggle";

export function ReactTest() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
      <p>{count}</p>
      <DisplayModeToggle />
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerTitle>Hello</DrawerTitle>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
