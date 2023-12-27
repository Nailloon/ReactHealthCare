import './App.css'
import pic1 from '/pic1.png'
import pic2 from '/pic2.png'
import pic3 from '/pic3.png'
import Button from './Components/Button'
import GridContainer from './Components/GridProps/GridContainerProps'
import Divider from './Components/Divider';

const items = [
  {
    image: 'search.png',
    title: 'Search doctor',
    text: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    image: 'can.png',
    title: 'Online pharmacy',
    text: 'Buy your medicines with our mobile application with a simple delivery system',
  },
  {
    image: 'phone.png',
    title: 'Consultation',
    text: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    image: 'stat.png',
    title: 'Details info',
    text: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    image: 'bag.png',
    title: 'Emergency care',
    text: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    image: 'aid.png',
    title: 'Tracking',
    text: 'Track and save your medical history and health data',
  },
];

function App() {

  return (
    <>
      <div className="container1">
      <div className="column1">
        <h1 className='header0'>Virtual healthcare for you</h1>
        <p className='text0'>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <Button
            borderRadius='55px'
            backgroundColor="#458FF6"
            borderColor="#458FF6"
            textColor="#ffffff"
            children="Consult today" width={'200px'} height={'56px'}      />
      </div>
      <div>
        <img src={pic1} className="Pic1" alt="SelfCareImage" />
      </div>
    </div>
    <div className="container2">
      <p className='headerCenter'>Our services</p>
      <Divider width={'56px'} borderRadius={'5px'} color={'#000000'} height={'2px'} align='center'></Divider>
      <p className='text2'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
        <GridContainer items={items} width={'350px'} height={'354px'} backgroundColor={'#ffffff'} />
          <div className="button-wrapper">
          <Button backgroundColor='#ffffff' borderColor='#458FF6' textColor='#458FF6' width='200px' height='56px' borderRadius='55px' children="Learn more"></Button>
          </div>
        </div>
        <div className="container1">
      <div>
        <img src={pic2} className="Pic2" alt="InjectionImage" />
      </div>
      <div className="column2">
        <h1 className='headerNormal'>Leading healthcare providers</h1>
        <Divider width={'56px'} borderRadius={'10px'} color={'#000000'} height={'2px'} align='left'></Divider>
        <p className='textNormal'>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
        <Button backgroundColor='#ffffff' borderColor='#458FF6' textColor='#458FF6' width='200px' height='56px' borderRadius='55px' children="Learn more"></Button>
      </div>
    </div>
    <div className="container1">
    <div className="column3">
        <h1 className='header3'>Download our mobile app</h1>
        <Divider width={'56px'} borderRadius={'6px'} color={'#000000'} height={'2px'} align='left'></Divider>
        <p className='textNormal'>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
        <Button backgroundColor='#ffffff' borderColor='#458FF6' textColor='#458FF6' width='200px' height='56px' borderRadius='55px' children="Learn more"></Button>
      </div>
      <div>
        <img src={pic3} className="Pic3" alt="ApplicationsImage" />
      </div>
    </div>
    </>
  )
}

export default App
