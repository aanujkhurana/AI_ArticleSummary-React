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
                    onClick={() => window.open("https://github.com/aanujkhurana/AI_ArticleSummary-React")}
                    className='black_btn'
                >
                    Source code
                </button>
            </nav>
            <h1
                className='head_text'
            >
                Summarize websites using <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify long articles with the help of AI Summarize,
                An open-source tool that transforms lengthy web pages into clear and concise summaries.
            </h2>
        </header>
    )
}

export default Hero