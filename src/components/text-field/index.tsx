import { Input } from "../input";
import { Label } from "../label";

export interface TextFieldProps {
  label: string;
}

export function TextField({ label }: TextFieldProps) {
  return (
    <div>
      <Label label={label} />
      <Input type="text" />
    </div>
  );
}
