import React, { useEffect, useState } from "react";
import { IStepProps } from "../../../app/interfaces/hooks";
import Input from "../../common/input";

const FirstStep = ({
  handleOnChange,
  values,
  errors,
}: IStepProps & { errors?: { [x: string]: any } }) => {
  const [ierrors, setIErrors] = useState<{ [x: string]: string }>(errors || {});
  useEffect(() => {
    if (errors) setIErrors(errors);
  }, [errors]);

  return (
    <div className="mt-[30px]">
      <Input
        label="Team name"
        type="text"
        placeholder="Please enter your team name"
        required={true}
        name="team"
        value={values.team}
        onChange={handleOnChange}
      />
      {ierrors["team"] && (
        <span className="text-sm text-red-600 font-medium">
          {ierrors["team"]}
        </span>
      )}
    </div>
  );
};

export default FirstStep;
