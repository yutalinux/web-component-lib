import { Input } from "../input";
import { Label } from "../label";

export interface PasswordFieldProps {
  label: string;
}

export function PasswordField({ label }: PasswordFieldProps) {
  return (
    <div>
      <Label label={label} />
      <Input type="password" />
    </div>
  );
}
