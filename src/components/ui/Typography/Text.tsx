type TitleProps = {
  text: string;
};

export const Text: React.FC<TitleProps> = ({ text }) => {
  return <p className="text-base">{text}</p>;
};
