import { Button } from "@core-ui/button";
import { Card } from "@core-ui/card";
import { DropFileInput } from "@core-ui/drop-file-input";
import { DashboardLayout } from "@crowdmetrix-ui/layout";
import { ImportApi } from "@crowdmetrix/import";
import showToast from "@crowdmetrix/toast";
import { XMarkIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { Nullable } from "custom-types";
import { useState } from "react";

const AppImport = () => {
  const [selectedFile, setSelectedFile] = useState<Nullable<File>>(null);

  const onChangeSelectedFile = (file: File) => {
    setSelectedFile(file);
  };

  const onClickRemoveFile = () => {
    setSelectedFile(null);
  };

  const onClickUploadFile = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("importFile", selectedFile);

    ImportApi.importFootfall(formData)
      .then(({ data }) => showToast(data.message, "success"))
      .catch(({ response }) => showToast(response.data.error.message, "error"))
      .finally(() => setSelectedFile(null));
  };

  return (
    <DashboardLayout>
      <Card>
        <p className="text-xl font-semibold mb-4">Footfall data import</p>
        <div className="max-w-max mx-auto grid gap-4">
          <DropFileInput
            onChange={onChangeSelectedFile}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
          {selectedFile && (
            <>
              <div
                className={cn(
                  "px-4 py-2 rounded-lg flex justify-between items-center",
                  "bg-slate-100 dark:bg-slate-700 border dark:border-slate-500"
                )}
              >
                <span>{selectedFile.name}</span>
                <button onClick={onClickRemoveFile}>
                  <XMarkIcon className="h-5 text-rose-500" />
                </button>
              </div>
              <hr className="my-4 dark:border-slate-600" />
              <Button onClick={onClickUploadFile}>Upload</Button>
            </>
          )}
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default AppImport;
