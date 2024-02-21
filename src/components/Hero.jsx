import React from 'react';
import { logo } from '../assets';

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img
                    src={logo}
                    alt='logo'
                    className='w-28 object-contain'
                />
                <button
                    type='button'
                    onClick={() => window.open("httphttps://github.com/aanujkhurana/AI_ArticleSummary-React")}
                    className='black_btn'
                >
                    GitHub
                </button>
            </nav>
            <h1
                className='head_text'
            >
                Summarize website using <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify long articles into short summaries with the help of AI Summarize, an open-source tool
                that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    )
}

export default Hero