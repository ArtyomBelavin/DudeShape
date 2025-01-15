const AdventagesItem = ({ img, title, description }) => {
  return (
    <div className="flex items-start gap-[28px]">
      <img src={img} alt="123" />
      <div>
        <h4> {title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AdventagesItem;
