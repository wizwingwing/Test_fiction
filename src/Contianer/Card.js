import React from 'react';

export default function Card() {
    
  let data = [
    {
      name: 'สาวงามตัวร้าย',
      category: 'โรแมนติก',
      type: 'ebook',
      price: 179.0,
      discountPersen: 10,
      image: 'image1.jpeg',
    },
    {
      name: 'สักวันฉันจะเป็นนางเอก',
      category: 'โรแมนติก',
      type: 'ebook',
      price: 275.0,
      discountPersen: 25,
      image: 'image2.jpeg',
    },
    {
      name: 'ปรปักษ์จำนน 4',
      category: 'โรแมนติก',
      type: 'ebook',
      price: 325.0,
      discountPersen: 20,
      image: 'image3.jpeg',
    },
    {
      name: 'ยอกเชฟเทพนักปรุง 1',
      category: 'โรแมนติก',
      type: 'ebook',
      price: 315.0,
      discountPersen: 20,
      image: 'image4.jpeg',
    },
    {
      name: 'มีอะไรในสวนหลังบ้าน',
      category: 'โรแมนติก',
      type: 'ebook',
      price: 249.0,
      discountPersen: 25,
      image: 'image5.jpeg',
    },
    {
      name: 'ยอดเชฟเทพนักปรุง 2000000000000000000000000000',
      category: 'โรแมนติก',
      type: 'ebook',
      price: 299.0,
      discountPersen: 20,
      image: 'image6.jpeg',
    },
  ];

  data.forEach(item => {
    item.price2 = (((item.price * item.discountPersen) / 100) - item.price) * -1
    
  });

  return (
    <div className="Card Container">
      {data.map( (item, i) => (
        <div className="card-contain" key={i}>
          <div className="card-image">
            <img src={`img/${item.image}`} alt="" />
          </div>
          <div className="card-discount">
            <p>{`-${item.discountPersen}%`}</p>
          </div>
          <div className="text-card">
            <div className="card-header">
              {/* <p>{`${item.name}`}</p> */}
              <p>{`${item.name.length > 21 ? item.name.substr(0,21)+"..." : item.name}`}</p>
            </div>
            <div className="card-body">
              <p>ebook</p>
              <p>โรแมนติก</p>
            </div>
            <div className="card-price">
              <p>{item.price.toFixed(2)}</p>
            </div>
            <div className="card-coat">
              <p>{item.price2.toFixed(2) }</p>
            </div>
            <div className="card-buy">
              <button>ซื้อ</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
