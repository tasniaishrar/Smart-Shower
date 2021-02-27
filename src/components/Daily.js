import React from 'react';
import Image from 'react-image-resizer';
import "./daily.css";
import con_rep from './insights.png';

function Daily() {

    return (
      <div>
        <Image
          src={con_rep} alt="consumption report" className="center"
          height={350}
          width={700}
        />
      </div>
    );

}

export default Daily;