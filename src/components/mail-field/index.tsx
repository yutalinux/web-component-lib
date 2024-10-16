import { Input } from "../input";
import { Label } from "../label";

export interface MailFieldProps {
  label: string;
}

export function MailField({ label }: MailFieldProps) {
  return (
    <div>
      <Label label={label} />
      <Input type="email" />
    </div>
  );
}
