import { FunnelData } from '@/types';
import React from 'react';

type FileUploaderProps = {
  onFileUpload: (data: FunnelData) => void;
}

export const FileUploader =({ onFileUpload }: FileUploaderProps) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        onFileUpload(JSON.parse(content));
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
};

