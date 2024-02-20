import React, { useEffect, useState } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {

    const [article, setArticle] = useState(
        {
            url: '',
            summary: '',
        }
    )

    const handleSubmit = async (e) => {
        alert('submitted');

    }

    return (
        <section className='mt-16 w-full max-w-xl'>
            {/* {SEARCH} */}
            <div className='flex flex-col w-full gap-3'>
                <form className='relative flex justify-center items-center'
                    onSubmit={handleSubmit}
                >
                    <img
                        src={linkIcon}
                        alt='linkIcon'
                        className='absolute left-0 my-2 ml-3 w-5' />
                    <input
                        type='url'
                        placeholder='Enter the URL of the article'
                        value={article.url}
                        required
                        onChange={(e) => { setArticle({ ...article, url: e.target.value }) }}
                        className='url_input peer' />
                    <button type='submit'
                        className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                        ↩
                    </button>
                </form>
                {/* BROSWER URL HISTORY */}
                <div></div>
            </div>
            {/* RESULT */}
        </section>
    )
}

export default Demo