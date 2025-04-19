// src/components/ChangeNameModal.tsx

import { useState } from "react";

type ChangeNameModalProps = {
  onClose: () => void;
  title: string;
  onSubmit?: (newName: string) => void; // optional callback
};

export default function Modal({
  onClose,
  title,
  onSubmit,
}: ChangeNameModalProps) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (onSubmit) onSubmit(name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-zinc-800 rounded-xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg hover:bg-zinc-900 border border-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
