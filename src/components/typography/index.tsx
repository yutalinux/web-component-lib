export interface TypographyProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  label: string;
}

export function Typography({ type, label }: TypographyProps) {
  switch (type) {
    case "h1":
      return <h1>{label}</h1>;
    case "h2":
      return <h2>{label}</h2>;
    case "h3":
      return <h3>{label}</h3>;
    case "h4":
      return <h4>{label}</h4>;
    case "h5":
      return <h5>{label}</h5>;
    case "h6":
      return <h6>{label}</h6>;
    case "p":
      return <p>{label}</p>;
  }
}
