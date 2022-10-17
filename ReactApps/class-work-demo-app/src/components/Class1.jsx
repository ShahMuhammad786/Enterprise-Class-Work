import { useState } from 'react'
import { MinusOutlined, 
  PlusOutlined, 
  CloseCircleOutlined, 
  SortAscendingOutlined,
  SortDescendingOutlined,
  InfoCircleOutlined,
  SearchOutlined,

} from '@ant-design/icons';
import { Button, Progress, Space, Tooltip, Input, Divider, Card } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' //To be imported for using ant design.

function FirstClassWork() {
  const [count, setCount] = useState(30)
  const [search, setSearch] = useState('')
  const [flowers, setFlowers] = useState([
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ])
  // const [flag, setflag] = useState(false)

  // const increase = () => {
  //   let newCount = count + 10 ;
  //   if(newCount>100){
  //     newCount=100;
  //   }

  //   setCount(newCount)
  // }

  // const decrease = () => {
  //   let newCount = count - 10 ;
  //   if(newCount<0){
  //     newCount=0;
  //   }

  //   setCount(newCount)
  // }

  // let arr = ['Rose', 'Sunflower', 'Jasmine', 'Daffodals', 'Tulip']

  // const lItems = arr.map((element) => {
  //   return <li>{element}</li>
  // })

  // const srch = arr.filter((element)=>{
  //   return element == search
  // })

  const sortByName = () => {
    let sortArr = flowers.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })
    setFlowers([...sortArr])
  }

  const sortByValue = () => {
    let sortArr = flowers.sort((a, b) => a.value - b.value)
    setFlowers([...sortArr])
  }


  return (
    <div className="App" >
      {/* <Progress type="circle" percent={count} />
      <br />
      <br />
      <Button.Group >
        <Button onClick={decrease} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group> */}
      <Space size={10}>
        <Input type="text"
          placeholder="Enter flower name"
          prefix={<SearchOutlined  />}
          suffix={
            <Tooltip title="Search from the following list">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }

          onKeyDown={(e)=>{
            if(e.key == "Enter"){
              setSearch(e.target.value)
            }else{
              setSearch('')
            }
          }}
        /> 
        <Tooltip title="Sort by Value">
          <Button type="primary" shape="circle" icon={<SortAscendingOutlined />} onClick={sortByValue}/>
        </Tooltip>
        <Tooltip title="Sort by Name">
          <Button type="primary" shape="circle" icon={<SortDescendingOutlined />} onClick={sortByName} />
        </Tooltip>
      </Space>
      
      <br/>
      <Divider />
      
      <Card style={{width: 300, 
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100% ' }}>
        <div style={{textAlign: 'start'}}>
        <ul> 
            {flowers.filter((element)=> element.name.includes(search)).map(({name, value}, idx)=><li key={idx}>{name + " ($"+value+")"} {
              <CloseCircleOutlined style={{color:'red'}} onClick={
                () => {setFlowers(flowers.filter(flower => flower.name!=name))}
              } />            
            }</li>) } 
        </ul>
        </div>
      </Card>
      
    </div>
  )
}

export default FirstClassWork
