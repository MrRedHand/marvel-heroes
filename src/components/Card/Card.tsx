import avatar from '../../images/spider.png';
import './Card.scss';

export const Card = () => {
  return (
    <div className='card'>
      <div className='card-avatar'>
        <img src={avatar} />
      </div>
      <div className='card-description'>
        Spider-Man is one of the most popular and commercially successful superheroes. He has
        appeared in countless forms of media, including several animated TV series, a live-action
        television series, syndicated newspaper comic strips, and multiple series of films.
      </div>
    </div>
  );
};
