import React, {useState} from 'react'
import mergeImages from 'merge-images';
import logo from '../assets/body.png';
import { Divider, Card, Button, Image, Space  } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' //To be imported for using ant design.
const { Meta } = Card;

import img1 from '../assets/body.png';
import img2 from '../assets/mouth.png';
import img3 from '../assets/eyes.png';

const Test = () => {

    const [img, setimg] = useState(logo)
    // var pics = {
        // "genre1":["1.jpg", "2.jpg", "3.jpg"],
        // "genre2":["pic4.jpg", "pic5.jpg", "pic6.jpg"],
        // "genre3":["pic7.jpg", "pic8.jpg", "pic9.jpg"]
    // };
    const arr = [img1, img2, img3];

    const image = () => {
        mergeImages(arr)
        .then(b64 => setimg(b64));
    }



    return (
        <div>
            <Space>
                <Button type="primary" onClick={image}>Merge</Button>
                <Button type="primary" onClick={()=>setimg(img1)}>Separate</Button>            
            </Space>
            <Divider />
            <Space>
                <Image width={100} src={img1} style={{border:'1px dotted black', padding: '5px'}} />
                <Image width={100} src={img2} style={{border:'1px dotted black', padding: '5px'}} />
                <Image width={100} src={img3} style={{border:'1px dotted black', padding: '5px'}} />            
            </Space>
            <Divider />
            
            <Card
                hoverable
                style={{ width: 240, padding: '10px',}}
                cover={<Image alt="example" src={img} />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            {/* <img src={img} alt="" /> */}

        </div>
    )
}

export default Test