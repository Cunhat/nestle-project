import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { BasicTable } from "@/components/Table/BasicTable";
import { UploadFile } from "@/components/UploadFile";

type TTableData = {
  [key: string]: string | number;
};

function App() {
  const [headers, setHeaders] = useState<Array<string>>([]);
  const [data, setData] = useState<Array<TTableData>>([]);
  const [render, setRender] = useState<boolean>(false);

  const parseCsv = (file: File) => {
    Papa.parse(file, {
      header: true,
      complete: (results: any) => {
        setHeaders(results.meta.fields);
        setData(results.data);
        setRender(true);
      },
    });
  };

  return (
    <div className="flex h-full flex-col items-center bg-white px-5 pt-3 text-xs">
      {!render && <UploadFile onFileUpload={parseCsv} />}
      {render && <BasicTable headers={headers ?? []} data={data} />}
    </div>
  );
}

export default App;
