import React, { version } from 'react'
import Card from './Component/Card'
function App() {
  const DUMMY_DATA = [
    {
      name: 'Kevin Joe',
      descritpion:
        'File system changed fom Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permisions re-design and optimization',
      imgSrc:
        'https://imgs.search.brave.com/uCx-8QlZuv6jCSIdGELPlpTOqIWmGHhEAgog1a3-PCI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/ZWVuYWdlci1ib3kt/cG9ydHJhaXRfMjMt/MjE0ODEwNTY3OC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw',
      btn: 'New',
      version: '3.3.0',
      date: '14/05/2018',
    },
  ]

  return (
    <div className="main">
      <Card
        name={DUMMY_DATA[0].name}
        descritpion={DUMMY_DATA[0].descritpion}
        imgSrc={DUMMY_DATA[0].imgSrc}
        btn={DUMMY_DATA[0].date}
        version={DUMMY_DATA[0].version}
        date={DUMMY_DATA[0].date}
      />
      <Card
        name={DUMMY_DATA[0].name}
        descritpion={DUMMY_DATA[0].descritpion}
        imgSrc={DUMMY_DATA[0].imgSrc}
        btn={DUMMY_DATA[0].date}
        version={DUMMY_DATA[0].version}
        date={DUMMY_DATA[0].date}
      />
      <Card
        name={DUMMY_DATA[0].name}
        descritpion={DUMMY_DATA[0].descritpion}
        imgSrc={DUMMY_DATA[0].imgSrc}
        btn={DUMMY_DATA[0].date}
        version={DUMMY_DATA[0].version}
        date={DUMMY_DATA[0].date}
      />
      <Card
        name={DUMMY_DATA[0].name}
        descritpion={DUMMY_DATA[0].descritpion}
        imgSrc={DUMMY_DATA[0].imgSrc}
        btn={DUMMY_DATA[0].date}
        version={DUMMY_DATA[0].version}
        date={DUMMY_DATA[0].date}
      />
      <Card
        name={DUMMY_DATA[0].name}
        descritpion={DUMMY_DATA[0].descritpion}
        imgSrc={DUMMY_DATA[0].imgSrc}
        btn={DUMMY_DATA[0].date}
        version={DUMMY_DATA[0].version}
        date={DUMMY_DATA[0].date}
      />
      <Card
        name={DUMMY_DATA[0].name}
        descritpion={DUMMY_DATA[0].descritpion}
        imgSrc={DUMMY_DATA[0].imgSrc}
        btn={DUMMY_DATA[0].date}
        version={DUMMY_DATA[0].version}
        date={DUMMY_DATA[0].date}
      />
    </div>
  )
}

export default App
