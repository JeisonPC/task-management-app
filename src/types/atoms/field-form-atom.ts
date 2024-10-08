import { ChangeEvent } from "react";

export interface FieldFormAtomProps {
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  idInput: string;
  name: string;
  value: string;
}
