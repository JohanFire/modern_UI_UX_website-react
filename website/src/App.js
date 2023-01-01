import React from 'react'

import { Footer, Blog, Features, Header, WhatGPT3, Possiblity } from './containers'
import { CTA, Article, Brand, Feature, Navbar } from './components'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Feature />
            <Possiblity />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
