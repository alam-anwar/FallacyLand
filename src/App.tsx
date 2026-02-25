// import { Suspense, useState } from 'react'
// import { Canvas, useLoader } from '@react-three/fiber'
// import { OBJLoader, MTLLoader, GLTFLoader } from 'three/addons'
// import { Center, OrbitControls } from '@react-three/drei'
import { randInt } from 'three/src/math/MathUtils.js'
import './App.css'

const celebrities = [
  "Markiplier", 
  "Bang Chan", 
  "Jim Carrey", 
  "Ryan Reynolds", 
  "Ryan Gosling", 
  "Matpat", 
  "Kasane Teto", 
  "Chikawa", 
  "Mr. Karlson", 
  "Tuxedo Sam", 
  "Hachiwara",
  "Professor O'Connor",
  "Billie Eilish"
]

function App() {
  return (
    <>
      <div id="main-text">
        <video style={{top: 0, left: 0 }} width={window.innerWidth} autoPlay muted loop>
          <source src="/i18Backdrop.mp4" type="video/mp4" />
        </video>
        <div style={{ display: "block", position: "absolute", left: "30px", width: "30%", height: "100%", top: 0, fontSize: "30px"}}>
          <h1 style={{ fontWeight: "normal", padding: 0, margin: 0}}>{celebrities.at(randInt(0, celebrities.length - 1))}'s phone doesn't have a screen.</h1>
          <h1>Why should yours?</h1>
        </div>
      </div>
      <div style={{textAlign: 'center', width: '50%', margin: "0 auto"}}>
        <h1>The iPhone 18. Better in every single way.</h1>
        <p className='explanatory-text'>At Apple, we're committed to efficiency and minimalism in everything we do. Which is why we cut out one of the biggest distractions on our earlier models: <strong>the screen.</strong></p>

        <p className="explanatory-text"> This brand new phone will significantly improve your day-to-day life, even though there is absolutely nothing new about this phone other than a glaring lack of several core components. A large 2.26" camera unit can take photos in a mind-shattering 360p, better than any other cell phone on the market. On top of that, the removal of the screen enables you to return to smartphone's roots, back when no one cared about bevel sizes and OLED vs. LCD.</p>

        <p className="explanatory-text">Don't even bother looking at what our competitors have to offer. They're so busy running pedestrians over with their Vauxhalls and Chevys that they don't have the time to come up with anything original. And anyway, no real smartphone user would use anything other than an iPhone.</p>

        <p className='explanatory-text'>Hitler didn't have an iPhone. You know what happened to him.</p>

        <button style={{color: "black", backgroundColor: "white", borderRadius: "500px", width: "500px", fontSize: "24px", margin: '5px'}}>Learn more</button>
        <button style={{color: "black", backgroundColor: "white", borderRadius: "500px", width: "500px", fontSize: "24px", margin: '5px'}}>Buy now<span style={{ fontSize: '8px'}}><sup>*</sup></span></button>

        <p style={{fontSize: '8px'}}>* $1499 without shipping, tax, and 20% gratuity. By buying the iPhone 18, you agree to Apple's terms and conditions which include selling all personal information to the highest bidder. You also agree to receiving emails from us regarding service updates and promotiones with no way to unsubscribe.</p>
      </div>
    </>
  )
}

export default App
