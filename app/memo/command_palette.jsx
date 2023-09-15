import { useState } from "react";
import { Dialog, Combobox } from "@headlessui/react";

const CommandPalette = ({ commands }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 p-4 pt-[15vh] overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 backdrop-blur-[1px]" />
      <Combobox
         as="div"
         className="bg-accent-dark max-w-2xl mx-auto rounded-lg shadow-2xl relative flex flex-col"
         onChange={(command) => {
            // we have access to the selected command
            // a redirect can happen here or any action can be executed
            setIsOpen(false);
         }}
      >
         <div className="mx-4 mt-4 px-2 h-[25px] text-xs text-slate-100 bg-primary/30 rounded self-start flex items-center flex-shrink-0">
            Issue
         </div>
         <div className="flex items-center text-lg font-medium border-b border-slate-500">
            <Combobox.Input
               className="p-5 text-white placeholder-gray-200 w-full bg-transparent border-0 outline-none"
               placeholder="Type a command or search..."
            />
         </div>
         <Combobox.Options
            className="max-h-72 overflow-y-auto flex flex-col"
            static
         ></Combobox.Options>
      </Combobox>
   </Dialog>
  );
};

export default CommandPalette;
