import { Input } from "../input";
import { Label } from "../label";

export interface MailFieldProps {
  label: string;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
}

export function MailField({ label, autoComplete }: MailFieldProps) {
  return (
    <div>
      <Label label={label} />
      <Input autoComplete={autoComplete} type="email" />
    </div>
  );
}
