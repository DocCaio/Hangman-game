import './_Modal.scss';
import Lost from './img/lost.gif';
//import '../Game/api';

export default function Modal() {
    return (
        <section className='game-modal'>
             <div className='content'>
             <img src={Lost} alt='gif'/>
             <h4>Game over!</h4>
             <p>The correct word was: 
                <strong>rainbow</strong>                
             </p>
             <button className='play-again'>Play Again</button>
             </div>
        </section>
    )   

    }