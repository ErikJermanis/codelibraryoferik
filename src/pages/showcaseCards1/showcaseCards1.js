import React from 'react';
import './showcaseCards1.scss';
import { ReactComponent as Arrow } from './arrow.svg';

class ShowcaseCards1 extends React.Component {

  constructor(props) {
    super();

    this.state = {
      contents: [
        {
          header: 'Tim vrhunskih entuzijasta',
          content: 'Mercury Digital tim sastoji se od 3 developera spremnih za nove izazove. Koristimo se mnogim tehnologijama i alatima te smo uvijek spremni proširiti naše znanje kada je to potrebno.'
        },
        {
          header: 'Nema više neispunjenih projekata',
          content: 'Web development firme često razvijaju više projekata istovremeno što dovodi do preopterećenja te potencijalnih kašnjenja. Mercury je tu da vam pomogne te da preuzme dio ili cijeli projekt.'
        },
        {
          header: 'Stvaramo dugotrajno partnerstvo',
          content: 'Djeleći projekte stvaramo partnerstvo na vašu i našu korist. Udruživanjem snaga otvaramo si mogućnosti za ostvarivanje većih ciljeva što pridonosi napretku oba tima.'
        }
      ],
      contentNumber: 0
    };
  }

  shiftContent = (action) => {
    if(action === 'increment') {
      this.state.contentNumber < this.state.contents.length - 1 ?
        this.setState(state => ({ contentNumber: state.contentNumber + 1 }))
      :
      this.setState({ contentNumber: 0 });
    } else {
      this.state.contentNumber > 0 ?
        this.setState(state => ({ contentNumber: state.contentNumber - 1 }))
      :
        this.setState(state => ({ contentNumber: state.contents.length - 1 }));
    }
  };

  render() {
    return (
      <div className="showcaseCards1-wrapper">
        <div className="container">
          <Arrow onClick={() => this.shiftContent('decrement')} className="arrUp" />
          <Arrow onClick={() => this.shiftContent('increment')} className="arrDown" />
          <span className="numLabel">{this.state.contentNumber + 1}</span>
          <h6 key={this.state.contentNumber} className="cardHeader">{this.state.contents[this.state.contentNumber].header}</h6>
          <hr className="cardLine"/>
          <p key={this.state.contentNumber + 1} className="cardParagraph">{this.state.contents[this.state.contentNumber].content}</p>
        </div>
      </div>
    )
  }
}

export default ShowcaseCards1;