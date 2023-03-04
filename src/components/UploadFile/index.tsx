import { Title } from "@/components/ui/Typography/Title";
import { Text } from "@/components/ui/Typography/Text";
import Dropzone, { useDropzone } from "react-dropzone";
import React, { useEffect, useState } from "react";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

type UploadFileProps = {
  onFileUpload: (file: File) => void;
};

export const UploadFile: React.FC<UploadFileProps> = ({ onFileUpload }) => {
  const [files, setFiles] = useState<File[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const uploadFile = () => {
    setLoading(true);
    if (files !== undefined && files?.length > 0) onFileUpload(files[0]);
  };

  return (
    <div className="flex w-fit flex-col items-center gap-10 rounded-lg border p-3 shadow-md">
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
          disabled={files === undefined || files?.length === 0 || loading}
          intent="primary"
          onClick={() => uploadFile()}
        >
          {loading ? "Loading..." : "Upload"}
        </Button>
      </div>
    </div>
  );
};
