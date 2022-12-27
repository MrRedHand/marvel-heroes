import spiderUrl from '../../images/spider.png';
import wolverineUrl from '../../images/wolverine.png';
import captainUrl from '../../images/capatain.png';
import hulkUrl from '../../images/hulk.png';
import thorUrl from '../../images/thor.png';

interface IinitialHeroes {
  img: string;
  name: string;
  text: string;
}

export const initialHeroes: IinitialHeroes[] = [
  {
    img: spiderUrl,
    name: 'Spider-Man',
    text: 'Spider-Man is one of the most popular and commercially successful superheroes. He has appeared in countless forms of media, including several animated TV series, a live-action television series, syndicated newspaper comic strips, and multiple series of films.'
  },
  {
    img: wolverineUrl,
    name: 'Wolverine',
    text: 'asdsad'
  },
  {
    img: hulkUrl,
    name: 'Hulk',
    text: 'asdadadadasasd'
  },
  {
    img: thorUrl,
    name: 'Thor',
    text: 'asdadadadasasd'
  },
  {
    img: 'gdfgdfg',
    name: 'Iron man',
    text: 'asdadadadasasd'
  },
  {
    img: captainUrl,
    name: 'Captain America',
    text: 'asdadadadasasd'
  }
];
