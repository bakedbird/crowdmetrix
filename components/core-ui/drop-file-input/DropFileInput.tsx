import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { FormEvent, useState } from "react";

type Props = {
  onChange: (file: File) => void;
  accept?: string;
};

const DropFileInput = ({ onChange, accept }: Props) => {
  const [isDragOverActive, setIsDragOverActive] = useState(false);

  const onDragOverHandler = (event: FormEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragOverActive(event.type === "dragenter");
  };

  const onChangeFileDropped = ({
    currentTarget,
  }: FormEvent<HTMLInputElement>) => {
    let { files } = currentTarget;

    if (files?.length) {
      onChange(files[0]);
    }

    setIsDragOverActive(false);

    // This line may look ambiguous but is necessary.
    // It is to force empty the value of the input file
    // The reason this is needed is because when selecting
    // the same file the imput doesn't fire an onChange event
    // We need to override this because we store the file data
    // on the component state to upload, instead of submitting a form
    currentTarget.value = "";
  };

  return (
    <label
      className={cn(
        "relative w-full md:max-w-md aspect-video inline-block rounded-xl mx-auto",
        "border-4 border-dashed border-teal-500 bg-teal-50 transition duration-200",
        "dark:border-teal-200 dark:bg-teal-600 flex flex-col items-center justify-center",
        "hover:bg-teal-100 hover:dark:bg-teal-700 p-4",
        {
          "bg-teal-100 dark:bg-teal-700": isDragOverActive,
        }
      )}
      onDragEnter={onDragOverHandler}
      onDragLeave={onDragOverHandler}
    >
      <ArrowUpOnSquareIcon className="h-10" />
      <span className="text-2xl font-medium">
        Drag & drop or{" "}
        <span className="text-teal-500 dark:text-teal-300">choose file</span> to
        upload
      </span>
      <span className="font-medium">CSV with footfall data</span>

      <input
        className="opacity-0 absolute inset-0"
        type="file"
        onChange={onChangeFileDropped}
        accept={accept}
      />
    </label>
  );
};
export default DropFileInput;
