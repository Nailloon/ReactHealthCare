import './App.css'
import pic1 from '/pic1.png'
import Button from './Components'

function App() {

  return (
    <>
      <div className="container1">
      <div className="column1">
        <h1>Virtual healthcare for you</h1>
        <p>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <Button
        size="medium"
        backgroundColor="#458FF6"
        borderColor="#458FF6"
        textColor="#ffffff"
        children="Нажми меня"
      />
      </div>
      <div className="column1">
        <img src={pic1} className="Pic1" alt="SelfCareImage" />
      </div>
    </div>
    </>
  )
}

export default App
