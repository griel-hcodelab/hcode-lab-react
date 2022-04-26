type ItemProps = {
    image: string;
    title: string;
    location: string;
}

export const Item = ({image, title, location}: ItemProps) => {
  return (
    <li>
            <img src={image} alt={title} />
            <p className="title">{title}</p>
            <p>{location}</p>
          </li>
  )
}
