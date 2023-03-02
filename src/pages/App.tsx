import { Title } from "@/components/ui/Typography/Title";
import { Text } from "@/components/ui/Typography/Text";
import Dropzone, { useDropzone } from "react-dropzone";
import React, { useEffect, useState } from "react";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import Papa from "papaparse";
import { BasicTable } from "@/components/Table/BasicTable";

type TTableData = {
  [key: string]: string | number;
};

function App() {
  const [files, setFiles] = useState<File[]>();
  const [headers, setHeaders] = useState<Array<string>>([]);
  const [data, setData] = useState<Array<TTableData>>([]);
  const [render, setRender] = useState<boolean>(false);

  const parseCsv = () => {
    Papa.parse(files[0], {
      header: true,
      complete: (results: any) => {
        setHeaders(results.meta.fields);
        setData(results.data);
        setRender(true);
      },
    });
  };

  return (
    <div className="flex h-full flex-col bg-white px-1 pt-3 text-xs">
      <div className="grid grid-rows-3 items-center justify-center gap-3 p-3">
        <Select label="Choose your table configuration:" />
        <div>
          <Dropzone
            onDrop={(acceptedFiles) => setFiles(acceptedFiles)}
            accept={{ "text/csv": [".csv"] }}
          >
            {({ getRootProps, getInputProps }) => (
              <section className="h-40 w-80 rounded-md border border-dashed border-primary hover:cursor-pointer">
                <div
                  {...getRootProps()}
                  className="flex h-full w-full items-center justify-center bg-indigo-100 text-center"
                >
                  <input {...getInputProps()} />
                  <p className="text-base text-primary">
                    Drag 'n' drop some files here, or click to select files
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
          {files !== undefined && (
            <Text text={`${files[0].name}.${files[0].type}`} />
          )}
        </div>
        <div className="flex justify-center">
          <Button
            disabled={files === undefined}
            intent="primary"
            onClick={parseCsv}
          >
            Generate table
          </Button>
        </div>
      </div>
      {render && <BasicTable headers={headers ?? []} data={data} />}
    </div>
  );
}

export default App;
