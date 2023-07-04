import './homePage.css'
import { useState } from 'react';
import { useEffect } from 'react';
export default function HomePage() {
    const [showSubTitle, setShowSubTitle] = useState(false)
    const [showLetterO, setShowLetterO] = useState(false)

    const [showWord, setShowWord] = useState(false)
    const [showPoint1, setshowPoint1] = useState(false)
    const [showPoint2, setShowPoint2] = useState(false)
    const [showPoint3, setShowPoint3] = useState(false)



    useEffect(() => {

        //O 
        setTimeout(() => {
            setShowLetterO(true)
        }, 1300)
        //O no
        setTimeout(() => {
            setShowWord(true)
        }, 1600)
        //primer punto
        setTimeout(() => {
            setshowPoint1(true)
        }, 1900)
        //segundo punto
        setTimeout(() => {
            setShowPoint2(true)
        }, 2200)
        //tercer punto
        setTimeout(() => {
            setShowPoint3(true)
        }, 2500)
    }, [])





    return (
        <section id='section-home-page'>
            <div id='container-home-titles'>
                <h1 id='home-page-title'>Web Pokemon</h1>
                <h2 id='home-page-sub-title'><span className={`initial-show  ${showLetterO ? 'show' : ''}`}>0</span> <span className={`initial-show  ${showWord ? 'show' : ''}`}>no</span> <span className={`initial-show  ${showPoint1 ? 'show' : ''}`}>.</span> <span className={`initial-show  ${showPoint2 ? 'show' : ''}`}>.</span> <span className={`initial-show  ${showPoint3 ? 'show' : ''}`}>.</span></h2>
            </div>
        </section>
    );
};