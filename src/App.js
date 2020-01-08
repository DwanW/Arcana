import React from 'react';
import './App.css';

const arcanaCards= [
  {
    number:'0',
    id: 'e0',
    title:'The Fool',
    cardIcon:'0.png',
    imgUrl:'https://www.falcom.co.jp/sen4/assets/character/detail/visual/campanella.png',
    arcanaDescription:'Beginnings, Innocence, A free spirit',
    enforcerName:'Campanella',
    enforcerTitle:'Enforcer No.0 ~ The Fool',
    charDescription:'Campanella is a mysterious individual whose true self can\'t be seen. Due to the ambiguous nature of his gender, he is a hard individual to classify. But, what is known, is that he is a cold individual who likes to have fun by teasing and tormenting people through his taunts.'
  },
  {
    number:'I',
    id: 'e1',
    title:'The Magician',
    cardIcon:'1.png',
    imgUrl:'https://www.falcom.co.jp/sen4/assets/character/detail/visual/mcburn.png',
    arcanaDescription:'Manifestation, Power',
    enforcerName:'McBurn',
    enforcerTitle:'Enforcer No.1 ~ The Blazing Demon',
    charDescription:'He is amongst the strongest fighters within Ouroboros, with only Arianrhod considered his rival for the undisputed title. He has also indicated that he had a fierce rivalry with fellow Enforcer Loewe before the latter\'s demise. Since Loewe\'s death, McBurn has been constantly bored and indifferent with his assignments, only taking part when he believes he may have finally found an interesting fight.'
  },
  {
    number:'II',
    id: 'e2',
    title:'The High Priestess',
    cardIcon:'2.png',
    imgUrl:'a.png',
    arcanaDescription:'Intuition, The subconscious mind',
    enforcerName:'Leonhardt',
    enforcerTitle:'Enforcer No.2 ~ The Bladelord',
    charDescription:'Leonhardt is a cool yet serious individual who maintains an emotionless mask.In his youth, Leonhardt was a kind individual who maintained a strong belief in justice. He acted like a brother to Joshua and was deeply in love with Karin Astray. However, when the Tragedy of Hamel occurred, Leonhardt became betrayed by his beliefs and the world.'
  },
  {
    number:'III',
    id: 'e3',
    title:'The Empress',
    cardIcon:'3.png',
    imgUrl:'a.png',
    arcanaDescription:'Femininity, Beauty, Nature',
    enforcerName:'Unknown',
    enforcerTitle:'Enforcer No.3 ~ Golden Butterfly',
    charDescription:''
  },
  {
    number:'IV',
    id: 'e4',
    title:'The Emperor',
    cardIcon:'4.png',
    imgUrl:'a.png',
    arcanaDescription:'Authority, A father figure',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'V',
    id: 'e5',
    title:'The Hierohant',
    cardIcon:'5.png',
    imgUrl:'a.png',
    arcanaDescription:'Spiritual wisdom, Tradition',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'VI',
    id: 'e6',
    title:'The Lovers',
    cardIcon:'6.png',
    imgUrl:'a.png',
    arcanaDescription:'Relationships, Choices',
    enforcerName:'Luciola',
    enforcerTitle:'Enforcer No.6 ~ Bewitching Bell',
    charDescription:'She tends not to reveal her true self and hides her emotions behind a veil. Despite this, she does care about people and hates the idea of a country being destroyed by the Glorious. She also suffers from guilt over killing the man she loved'
  },
  {
    number:'VII',
    id: 'e7',
    title:'The Chariot',
    cardIcon:'7.png',
    imgUrl:'a.png',
    arcanaDescription:'Action, Determination',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'VIII',
    id: 'e8',
    title:'Strength',
    cardIcon:'8.png',
    imgUrl:'a.png',
    arcanaDescription:'Strength, Influence',
    enforcerName:'Walter',
    enforcerTitle:'Enforcer No.8 ~ Direwolf',
    charDescription:'Walter is a hardcore fighter who loves to battle with challenging opponents. He is attracted to thrills and power and maintains the sharp predatory instincts and brutality of a wild animal. He will show no mercy to anyone regardless of whether they are women or children which earned him the nickname -Direwolf. Walter was originally a good person, however, he soon fell for the allure of the "Murderous Fist" path of the Taito Style and began to lose himself.'
  },
  {
    number:'IX',
    id: 'e9',
    title:'The Hermit',
    cardIcon:'9.png',
    imgUrl:'https://www.falcom.co.jp/sen4/assets/character/detail/visual/kluger.png',
    arcanaDescription:'Soul-searching, Inner guidance',
    enforcerName:'Sharon Kreuger',
    enforcerTitle:'Enforcer No.8 ~ Severing Chains',
    charDescription:'At the age of 13, she was part of the assassination organisation Order of the Moonlight Horse, where she inherited the name \'Severing Chains\' and was identified as \'Kreuger\'. Around that time, continuation of the organisation became uncertain due to collisions with Ouroboros, an emerging force in that time.'
  },
  {
    number:'X',
    id: 'e10',
    title:'Wheel of Fortune',
    cardIcon:'10.png',
    imgUrl:'a.png',
    arcanaDescription:'Karma, Destiny,',
    enforcerName:'Bleublanc',
    enforcerTitle:'Enforcer No.8 ~ Phantom Thief',
    charDescription:'Bleublanc is a notorious phantom thief who operates across Zemuria. In Ouroboros, he is ranked as Enforcer No. X: The mysterious, gentlemanly phantom thief, Bleublanc. He has a flamboyant and theatrical personality.'
  },
  {
    number:'XI',
    id: 'e11',
    title:'Justice',
    cardIcon:'11.png',
    imgUrl:'a.png',
    arcanaDescription:'Justice, Truth',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XII',
    id: 'e12',
    title:'The Hanged Man',
    cardIcon:'12.png',
    imgUrl:'a.png',
    arcanaDescription:'Surrender, Letting go',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XIII',
    id: 'e13',
    title:'Death',
    cardIcon:'13.png',
    imgUrl:'https://www.falcom.co.jp/sen4/assets/character/detail/visual/joshua.png',
    arcanaDescription:'Endings, Transformation',
    enforcerName:'Joshua',
    enforcerTitle:'Enforcer No.13 ~ Black Fang',
    charDescription:'Joshua Bright is a kind-hearted and intelligent introvert. He also tends to conformity and is sometimes fearful. In his childhood, these traits express themselves as shyness and passivity. Later in life he describes his childhood self as a "weakling and liar".'
  },
  {
    number:'XIV',
    id: 'e14',
    title:'Temperance',
    cardIcon:'14.png',
    imgUrl:'a.png',
    arcanaDescription:' Balance, Patience,',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XV',
    id: 'e15',
    title:'The Devil',
    cardIcon:'15.png',
    imgUrl:'https://www.falcom.co.jp/sen4/assets/character/detail/visual/renne.png',
    arcanaDescription:'Shadow self, Restriction',
    enforcerName:'Renne',
    enforcerTitle:'Enforcer No.15 ~ Angel of Slaughter',
    charDescription:'Renne is the innocent, mischievous, cheeky type of girl who likes to have lots of fun. While she may sometimes act spoiled in her lady-like mannerisms, she is secretly very lonely and wishes for a family of her own. However, because of the trauma that she endured at the brothel, she finds it hard to trust people until Estelle and Joshua come along and make her a part of their family.'
  },
  {
    number:'XVI',
    id: 'e16',
    title:'The Tower',
    cardIcon:'16.png',
    imgUrl:'a.png',
    arcanaDescription:'Chaos, Revelation',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XVII',
    id: 'e17',
    title:'The Star',
    cardIcon:'17.png',
    imgUrl:'https://www.falcom.co.jp/sen4/assets/character/detail/visual/shirley.png',
    arcanaDescription:'Purpose, Renewal,',
    enforcerName:'Shirley',
    enforcerTitle:'Enforcer No.17 ~ Sanguine Ogre',
    charDescription:'Following the conclusion of the Azure-Zero Project, she and Mariabell Crois are brought to the Celestial Globe, where they formally become members of Ouroboros.'
  },
  {
    number:'XVIII',
    id: 'e18',
    title:'The Moon',
    cardIcon:'18.png',
    imgUrl:'a.png',
    arcanaDescription:'Illusion, Subconscious',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XIX',
    id: 'e19',
    title:'The Sun',
    cardIcon:'19.png',
    imgUrl:'a.png',
    arcanaDescription:'Warmth, Vitality',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XX',
    id: 'e20',
    title:'Judgement',
    cardIcon:'20.png',
    imgUrl:'a.png',
    arcanaDescription:'Rebirth, Absolution',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  },
  {
    number:'XXI',
    id: 'e21',
    title:'The World',
    cardIcon:'21.png',
    imgUrl:'a.png',
    arcanaDescription:'Completion, Integration',
    enforcerName:'Unknown',
    enforcerTitle:'',
    charDescription:''
  }
]
function App() {
  return (
    <div className="App">
      <a id="button" href="#navlist">Go to list</a>
      <nav id="navlist">
      <header className="App-header">
        Arcana List
      </header>
      <ul>
        {arcanaCards.map((post,idx)=>(
                <a href={'#'+ post.id} key={idx} target=""><li><img width="44" height="66" src={post.cardIcon} alt="" ></img><div id="number">{post.number}.</div><div id="title">{post.title}</div></li></a>
        ))}
      </ul>
      <div id="footer">Written by Dwan W.</div>
      </nav>
      <main>
        {arcanaCards.map((post,idx)=>(
        <div className="main-container" key={idx} id={post.id}>
          <header className="main-header">{post.number} - {post.title}</header>
          <div className="main-content">
            <div className='content-img'><img src={post.imgUrl} alt="n/a"></img><div><q>{post.arcanaDescription}</q></div></div>
            <div className="content-container">
              <header className="content-header">{post.enforcerName}<br/>{post.enforcerTitle}</header>
              <hr/>
              <div className='content'> {post.charDescription}</div>
            </div>
          </div>
        </div>
        ))}
      </main>
    </div>
  );
}

export default App;
