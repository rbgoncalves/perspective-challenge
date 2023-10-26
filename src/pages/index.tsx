import { FileUploader } from "@/components/FileUploader";
import { FunnelData } from "@/types";
import Head from "next/head";
import { useState } from "react";



export default function FunnelPreviewPage() {
  const [funnelData, setFunnelData] = useState<FunnelData | null>(null);

  const handleFileUpload = (data: FunnelData) => {
    setFunnelData(data);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Head>
        <title>Funnel Preview</title>
      </Head>
      <h1 className="text-2xl font-semibold">Funnel Preview</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      {funnelData && JSON.stringify(funnelData)}
    </div>
  );
}
