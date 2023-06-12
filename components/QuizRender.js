
import { useEffect } from 'react';

import { InitGame as startBeef } from '../lib/quizBeef.js'
import { InitGame as startBeef2 } from '../lib/quizBeef2.js'

import { InitGame as startChicken } from '../lib/quizChicken.js'
import { InitGame as startChicken2 } from '../lib/quizChicken2.js'

import { InitGame as startFish } from '../lib/quizFishTest.js'
import { InitGame as startFish2 } from '../lib/quizFishTest2.js'

import { InitGame as startLamb } from '../lib/quizLamb.js'
import { InitGame as startLamb2 } from '../lib/quizLamb2.js'

import { InitGame as startPork } from '../lib/quizPork.js'
import { InitGame as startPork2 } from '../lib/quizPork2.js'

import { InitGame as startKitchen } from '../lib/quizKitchen.js'
import { InitGame as startKitchen2 } from '../lib/quizKitchen2.js'

import { InitGame as startGame } from '../lib/quizGame.js'
import { InitGame as startGame2 } from '../lib/quizGame2.js'

import styles from '../styles/QuizRender.module.css';

export default function QuizRender(props) {
    const{
        type,
        score
    } = props

    useEffect(() => {
        switch(type){
            case "beef1":
                startBeef(score);
                break;
            case "beef2":
                startBeef2(score);
                break;

            case "chicken1":
                startChicken(score);
                break;
            case "chicken2":
                startChicken2(score);
                break;

            case "fish1":
                startFish(score);
                break;
            case "fish2":
                startFish2(score);
                break;

            case "lamb1":
                startLamb(score);
                break;
            case "lamb2":
                startLamb2(score);
                break;

            case "pork1":
                startPork(score);
                break;
            case "pork2":
                startPork2(score);
                break;

            case "kitchen1":
                startKitchen(score);
                break;
            case "kitchen2":
                startKitchen2(score);
                break;

            case "game1":
                startGame(score);
                break;
            case "game2":
                startGame2(score);
                break;
                
            default:
                startBeef2(score);
                break;
        }
        //InitGame();
    }, []);

    return <div className={styles.webGlEmbed} id='webGLembed'></div>
}
