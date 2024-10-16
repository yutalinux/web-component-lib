import { Input } from "../input";
import { Label } from "../label";

export interface PasswordFieldProps {
  label: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
}

export function PasswordField({ label, autoComplete }: PasswordFieldProps) {
  return (
    <div>
      <Label label={label} />
      <Input autoComplete={autoComplete} type="password" />
    </div>
  );
}
