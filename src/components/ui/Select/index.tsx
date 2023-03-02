import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "@/components/ui/Typography/Text";

const data = ["Metric", "Imperial"];

export const Select: React.FC<{ label: string }> = ({ label }) => {
  const [selectedData, setSelectedData] = useState(data[0]);

  return (
    <Listbox
      as="div"
      className="max-w-xs"
      value={selectedData}
      onChange={setSelectedData}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="pb-3">
            <Text text={label} />
          </Listbox.Label>
          <div className="relative">
            <span className="inline-block w-full rounded-md">
              <Listbox.Button className="focus:shadow-outline-blue relative w-full cursor-default rounded-md border border-neutral-300 bg-white py-1 px-2 pr-6 text-left text-sm text-text-primary transition duration-150 ease-in-out focus:border-primary focus:outline-none">
                <span className="block truncate">{selectedData}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="pointer-events-none absolute inset-y-0 right-0 top-1/2 flex -translate-y-1/2 transform items-center pr-2"
                />
              </Listbox.Button>
            </span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <Listbox.Options
                static
                className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-sm leading-6 focus:outline-none"
              >
                {data.map((elem) => (
                  <Listbox.Option key={elem} value={elem}>
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? "bg-primary text-white" : "text-neutral-500"
                        } relative cursor-default select-none py-1 pl-3 pr-4`}
                      >
                        <span
                          className={`${
                            selected
                              ? active
                                ? "text-white"
                                : "text-primary"
                              : ""
                          } block truncate`}
                        >
                          {elem}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
