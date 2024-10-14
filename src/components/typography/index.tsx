export interface TypographyProps {
  type: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
}

export default function Typography({ type, label }: TypographyProps) {
  switch (type) {
    case 1:
      return <h1>{label}</h1>;
    case 2:
      return <h2>{label}</h2>;
    case 3:
      return <h3>{label}</h3>;
    case 4:
      return <h4>{label}</h4>;
    case 5:
      return <h5>{label}</h5>;
    case 6:
      return <h6>{label}</h6>;
  }
}
