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
                    onClick={() => window.open("http")}
                    className='black_btn'
                >
                    github
                </button>
            </nav>
            <h1
                className='head_text'
            >
                Summarize Articles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Simplify long articles into short summaries with the help of OpenAI's GPT-4 model.
            </h2>
        </header>
    )
}

export default Hero