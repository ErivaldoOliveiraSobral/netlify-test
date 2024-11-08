import { useEffect, useState } from 'react';

import zero from './img/0.png';
import ten from './img/10.png';
import eleven from './img/11.png';
import twenty from './img/20.png';
import twentyOne from './img/21.png';
import twentyTwo from './img/22.png';

import './styles.css';

const images = [
  { src: zero, value: 0 },
  { src: ten, value: 10 },
  { src: eleven, value: 11 },
  { src: twenty, value: 20 },
  { src: twentyOne, value: 21 },
  { src: twentyTwo, value: 22 },
]

const Image = ({ src, onClick, className }) => (
  <div className="blackops_terminus_item">
    <img className={className} alt="" src={src} onClick={onClick} />
  </div>
)

const ImageSection = ({ onClick }) => {
  const [selected, setSelected] = useState(0)

  const handleClick = (value, index) => {
    setSelected(index);
    
    onClick(value)
  }

  return images.map((args, index) => (
    <Image key={index} 
      { ...args }
      onClick={() => handleClick(args.value, index)}
      className={
        selected === index && 'blackops_terminus_item_selected'}
      />
  ))
}

function Terminus() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const [result, setResult] = useState([x, y, z]) 

  useEffect(() => {
    setResult([2*x+11, (2*z+y)-5, (y+z)-x])
  }, [x, y, z])

  return (
    <div className="blackops_terminus_container">
      <pre>{String(result).replaceAll('-', '')}</pre>

      <section className='blackops_terminus_section'>
        <span>Selecione o valor de X:</span>
        <div className="blackops_terminus_grid blackops_terminus_grid-template-columns one-sixth">
          <ImageSection onClick={setX}/>
        </div>
      </section>

      <section className='blackops_terminus_section'>
        <span>Selecione o valor de Y:</span>
        <div className="blackops_terminus_grid blackops_terminus_grid-template-columns">
          <ImageSection onClick={setY}/>
        </div>
      </section>

      <section className='blackops_terminus_section'>
        <span>Selecione o valor de Z:</span>
        <div className="blackops_terminus_grid blackops_terminus_grid-template-columns">
          <ImageSection onClick={setZ}/>
        </div>
      </section>
    </div>
  );
}

export default Terminus;
