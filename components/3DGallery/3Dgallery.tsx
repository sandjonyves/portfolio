// components/Banner.js
import Image from 'next/image';
import './3d.css'
const Gallery = () => {
  return (
    <div className='banner'>
      <div className={'slider'} style={{ '--quantity': 10 }}>
        {Array.from({ length: 10 }, (_, index) => (
          <div className={'item'} style={{ '--position': index + 1 }} key={index}>
            <Image
              src={`/images/b${index + 1}.jpg`} 
              alt={`Dragon ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className={'content'}>
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className={'author'}>
          <h2>LUN DEV</h2>
          <p><b>Web Design</b></p>
          <p>Subscribe to the channel to watch many interesting videos</p>
        </div>
        <div className={'model'}></div>
      </div>
    </div>
  );
};

export default Gallery;