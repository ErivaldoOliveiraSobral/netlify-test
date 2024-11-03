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

const Image = ({ src, onClick }) => (
  <div class="blackops_terminus_item">
    <img alt="" src={src} onClick={onClick} />
  </div>
)

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
      <pre>{JSON.stringify(result)}</pre>

      <section className='blackops_terminus_section'>
        <span>Selecione o valor de X:</span>
        <div class="blackops_terminus_grid blackops_terminus_grid-template-columns">
          {images.map(({ src, value }, index) => <Image key={index} src={src} onClick={() => setX(value)} />)}
        </div>
      </section>

      <section className='blackops_terminus_section'>
        <span>Selecione o valor de Y:</span>
        <div class="blackops_terminus_grid blackops_terminus_grid-template-columns">
          {images.map(({ src, value }, index) => <Image key={index} src={src} onClick={() => setY(value)} />)}
        </div>
      </section>

      <section className='blackops_terminus_section'>
        <span>Selecione o valor de Z:</span>
        <div class="blackops_terminus_grid blackops_terminus_grid-template-columns">
          {images.map(({ src, value }, index) => <Image key={index} src={src} onClick={() => setZ(value)} />)}
        </div>
      </section>
    </div>
  );
}

export default Terminus;
