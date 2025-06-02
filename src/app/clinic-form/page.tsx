import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClincForm from "./components/form";

export default function ClinicFormPage() {
  return (
    <div>
      <Dialog open>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Clínica</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <ClincForm />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
