import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion/dist/framer-motion.cjs';
import styled from 'styled-components';
import { smallImage } from '../util';
//IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';


const GameDetail = ({pathId}) => {
    const {screen, game, isLoading} = useSelector((state) => state.detail);

    const history = useHistory();

    const exitDetaliHandler = (e) => {
      const elem = e.target;
      if(elem.classList.contains('shadow')) {
        document.body.style.overflow = 'auto';
        history.push('/');
      }
    }

    //get platform images
    const getPlatform = (platform) => {
      switch(platform) {
        case "PlayStation 4":
          return playstation;
        case "Xbox One":
          return xbox;
        case "PC":
          return steam;
        case "Nintendo Switch":
          return nintendo;
        case "iOS":
          return apple;
        default:
          return gamepad;

      }
    }

    const renderRatingAsStars = () => {
      const stars = [];
      const gameRating = Math.floor(game.rating);

      for (let i = 1 ; i <= 5; i++) {
        if(i <= gameRating) {
            stars.push(<img alt="star" key={i} src={starFull}></img>)
        }else {
            stars.push(<img alt="star" key={i} src={starEmpty}></img>)
        }
      }

      return stars;
    }

    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetaliHandler}>
            <Detail layoutId={pathId}>
                <Stats className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        {renderRatingAsStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                                {game.platforms.map(data => (
                                    <img 
                                    alt={data.platform.name}
                                    key={data.platform.id}
                                    src={getPlatform(data.platform.name)}>
                                      </img>
                                ))}
                        </Platforms>
                    </Info>
                </Stats>
               <Media>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image}/>
                </Media>
                <Description><p>{game.description_raw}</p></Description>
                <div className="gallery">
                        {screen.results.map(screen => (
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(screen.image, 1280 )} key={screen.id} alt={screen.image}/>
                        ))}
                </div>
            </Detail>
        </CardShadow> 
        )}
         </>
    )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;