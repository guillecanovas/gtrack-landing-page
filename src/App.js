import React from 'react';
import { Download, SectionWrapper, Features } from './components';
import assets from './assets';
import styles from './styles/Global';

//banner y banner02 vienen del CSS

const App = () => {
    return (
        <>
            <SectionWrapper
                title="Unlock Your Full Potential: Track Your Gains!"
                description="Track every lift, set, and rep. Visualize your fitness journey."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />
            <SectionWrapper
                title="Get Started Today"
                description="Start your fitness journey. Sign up now to experience the ultimate workout tracking and progress monitoring app."
                mockupImg={assets.homeCards}
                reverse
            />
            
            <SectionWrapper
                title="Easy Workout Logging"
                description="Log your workouts effortlessly. Keep track of your exercises, weights, and repetitions seamlessly."
                mockupImg={assets.feature}
                banner="banner02"
            />
            <Download />

        
        </>
    )
}

export default App
