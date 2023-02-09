interface TraitProps {
  color: string;
  name: string;
}

const TraitBadge = ({ color, name }: TraitProps): JSX.Element => {
  return <span className={`badge m-1 bg-${color}`}>{name}</span>;
};

export default TraitBadge;
