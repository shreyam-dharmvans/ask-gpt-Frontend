import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const HomeHeading = () => {
    return (
        <div className='mx-auto heading'><TypeAnimation
            sequence={[
                'Chat with Your OWN AI',
                1000,
                'Built with GEMINI AI ', //  Continuing previous Text
                1500,
                'Your Own Customized ChatGPT',
                2000,
                //   'One Two',
                //   500,
                //   'One',
                //   500,
                //   '',
                //   500,
            ]}
            //style={{ fontSize: '23px', margin: 'auto 0px' }}
            repeat={Infinity}
        /></div>
    )
}
