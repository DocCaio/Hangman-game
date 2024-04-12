import './_Main.scss';
import Zero from './img/hangman-0.svg';
import './api';

export default function Game() {  
  
    return   (
        <section className="container">

          <div className="hangman-box">
            <img src={Zero} alt='hangman-img'/>
            <h1>Hangman Game</h1>
          </div>
          <div className='game-box'>
            <ul className='word-display'>     
            </ul>
            <h4 className='hint-text'>
              Hint:
              <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea magni quo officiis nisi voluptatum reprehenderit dolorum alias eius repellendus! Voluptatum in eaque et non similique ab nobis voluptatem rerum.</strong>
            </h4>
            <h4 className='guesses-text'>
              Incorrect guesses:
              <strong>0 / 6</strong>
            </h4>
            <div className='keyboard'>
              <button>a</button> <button>b</button> <button>c</button> <button>d</button>
              <button>e</button> <button>f</button> <button>g</button> <button>h</button>
              <button>i</button> <button>j</button> <button>k</button> <button>l</button>
              <button>m</button> <button>n</button> <button>o</button> <button>p</button>
              <button>q</button> <button>r</button> <button>s</button> <button>t</button>
              <button>u</button> <button>v</button> <button>w</button> <button>x</button>
              <button>y</button> <button>z</button>
            </div>

            
          </div>
        
        </section>
        

    )
       
    

}