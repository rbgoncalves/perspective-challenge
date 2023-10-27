import { FunnelData } from "@/types";
import React from "react";

type FileUploaderProps = {
  onFileUpload: (data: FunnelData) => void;
};

export const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
  const handleFileChange = (file: File | undefined) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileUpload(JSON.parse(content));
      };
      reader.readAsText(file);
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    handleFileChange(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (!file.name.endsWith(".json")) return;
    handleFileChange(file);
  };

  return (
    <div
      className="w-1/2 h-32 flex flex-col justify-between items-center m-6 p-3 bg-gray-50 border-dashed border-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <span className="text-gray-400 text-lg font-medium">
        Drag and drop the funnel JSON here
      </span>
      <span className="text-gray-400 text-xs font-medium">OR</span>
      <input
        type="file"
        accept=".json"
        onChange={handleUpload}
        className="hidden"
        id="file-input"
      />
      <label
        htmlFor="file-input"
        className="hover:bg-gray-100 text-gray-500 border-2 border-gray-400 text-s font-medium py-1 px-4 rounded-lg cursor-pointer"
      >
        Browse file
      </label>
    </div>
  );
};
