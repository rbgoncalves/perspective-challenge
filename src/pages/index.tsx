import { FileUploader } from "@/components/FileUploader";
import { Header } from "@/components/Header";
import { MobileFunnelPreview } from "@/components/MobileFunnelPreview";
import { FunnelData } from "@/types";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";



export default function FunnelPreviewPage() {
  const [funnelData, setFunnelData] = useState<FunnelData | null>(null);

  const handleFileUpload = (data: FunnelData) => {
    setFunnelData(data);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Head>
        <title>Mobile Funnel Preview</title>
      </Head>
      <Header />
      <FileUploader onFileUpload={handleFileUpload} />
      {funnelData && <MobileFunnelPreview funnelData={funnelData} />}
    </div>
  );
}
