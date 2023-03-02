type TitleProps = {
  title: string;
};

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="text-lg">{title}</h1>;
};
