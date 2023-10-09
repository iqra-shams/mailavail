import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Frame1 from './frame1';
import Frame2 from './frame2';
import Frame3 from './Frame3';
import Frame4 from './Frame4';
import Frame5 from './Frame5';
import clp from './assest/circle.svg'
import tag from './assest/pot.svg'
import pink from './assest/pink.svg'
import ar from './assest/arrow.svg'
import Capreg from './capreg';
import Frame6 from './Frame6';


function App() {
  return (
    <div >
    <Header />
    <Frame1/>
    <Frame2/>
    <Frame3/>
    <Frame4 offer="Extremely affordable" title="Unlock Unbeatable Savings" desc="Enjoy the best prices in town with a bonus of 500 free credits upon registration." butn="Register Now"
     img1={tag}  img2={clp} />
    
          <Frame5  />
          <Frame6 offer="500 Free Credits" title="Try it today, no credit card required!" desc="Totally free for first 500 Emails. Just sign up and start Verifying Email" icon={pink} butn="Get started for free" symbol={ar}
     />

   <Capreg/>
   
    </div>
  );
}

export default App;
