type CardProps = {
  imageUrl: string;
  githubLink: string;
  webLink: string;
  title: string;
  description: string;
  tags: string[];
};

const Card = ({
  imageUrl,
  githubLink,
  webLink,
  title,
  description,
  tags,
}: CardProps) => {
  return (
    <div className="flex flex-col h-full rounded-3xl p-2 tablet:p-2.5 laptop:p-3  shadow-lg  bg-bg-dark hover:bg-transparent hover:border hover:border-primary-dark group">
      {/* Image Section */}
      <div className="mb-4 relative group-hover:opacity-85 transition-opacity duration-300">
        <img
          src={imageUrl}
          alt="Card Image"
          className="w-full h-auto rounded-3xl"
        />
        <div className="hidden absolute inset-0 group-hover:flex justify-center items-center space-x-4">
          <a
            href={githubLink}
            className="px-3 py-1 bg-bg-light  rounded-2xl text-sm font-semibold hover:bg-transparent hover:border hover:border-primary hover:backdrop-brightness-50"
          >
            Github Link
          </a>
          <a
            href={webLink}
            className="px-3 py-1 bg-bg-light rounded-2xl text-sm font-semibold hover:bg-transparent hover:border hover:border-primary hover:backdrop-brightness-50"
          >
            Visit Site
          </a>
        </div>
      </div>
      {/* Description Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      {/* Footer Section */}
      <div className="flex flex-wrap mt-auto">
        {tags.map((tag, i) => (
          <p key={i} className="text-primary text-sm px-2">
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
