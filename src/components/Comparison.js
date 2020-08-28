import React from 'react';
import './Comparison.css';
import ship10 from '../images/10.png';
import ship12 from '../images/12.png';
import ship22 from '../images/22.png';

function Comparison(props) {

  const {data1, data2, id1, id2} = props;

  let image1;
  let image2;

  if (Number(id1) === 10) {
    image1 = ship10;
  } else if (Number(id1) === 12) {
    image1 = ship12;
  } else {image1 = ship22;}

  if (Number(id2) === 10) {
    image2 = ship10;
  } else if (Number(id2) === 12) {
    image2 = ship12;
  } else {image2 = ship22;}

  const starhipsSpec = [
    {
      name: 'Cost is Credits',
      ship1: data1.cost_in_credits,
      ship2: data2.cost_in_credits,
    },
    {
      name: 'Max atmosphering speed',
      ship1: data1.max_atmosphering_speed,
      ship2: data2.max_atmosphering_speed,
    },
    {
      name: 'Length',
      ship1: data1.length,
      ship2: data2.length,
    },
    {
      name: 'Cargo capacity',
      ship1: data1.cargo_capacity,
      ship2: data2.cargo_capacity,
    },
    {
      name: 'Crew',
      ship1: data1.crew,
      ship2: data2.crew,
    },
  ]

   return (
    <div className="comparison">
        <div className="comparison__wrapper">
            <div className="comparison__name">{data1.name}</div>
            <div className="comparison__name">{data2.name}</div>
        </div>
        <div className="comparison__wrapper">
            <div className="comparison__image" style={{backgroundImage: `url(${image1})`}}></div>
            <div className="comparison__image" style={{backgroundImage: `url(${image2})`}}></div>
        </div>
        {starhipsSpec.map((item, index) => {

          let specColor1 = '';
          let specColor2 = '';

          if (Number(item.ship1) > Number(item.ship2)) {
            specColor1 = 'color-green';
            specColor2 = 'color-red'
          } else {
            specColor2 = 'color-green';
            specColor1 = 'color-red'
          }

          if (Number(item.ship1) === Number(item.ship2)) {
            specColor1 = specColor2 = 'color-yellow';
          }

          return (
            <div key={index}>
            <div className="comparison__title">{item.name}</div>
            <div className="comparison__wrapper">
                <p className={`comparison__item ${specColor1}`}>{item.ship1}</p>
                <p className={`comparison__item ${specColor2}`}>{item.ship2}</p>
            </div>
            </div>
          )
        })}
    </div>
  );
}

export default Comparison;