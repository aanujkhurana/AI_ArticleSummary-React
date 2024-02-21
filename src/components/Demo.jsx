import React, { useEffect, useState } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {

    const [article, setArticle] = useState(
        {
            url: '',
            summary: '',
        }
    )

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
        if (articlesFromLocalStorage) {
            setAllArticle(articlesFromLocalStorage);
        }
    }, []);

    const [allArticle, setAllArticle] = useState([]);

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [...allArticle, newArticle];

            setArticle(newArticle);
            setAllArticle(updatedAllArticles);

            console.log(newArticle);
            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        }
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
                <div
                    className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
                    {allArticle.map((item, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className='link_card'>
                            <div className='copy_btn'>
                                <img
                                    src={copy}
                                    alt='copyIcon'
                                    className='w-[40%] h-[40%] object-contain'
                                />
                            </div>
                            <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* RESULT */}
            <div className='my-10 max-w-full flex justify-center items-center'>
                {isFetching ? (
                    <img
                        src={loader}
                        alt='loading icon'
                        className='w-20 h-20 object-contain' />
                ) : error ? (
                    <p className='font-inter font-bold text-black text-center'>
                        Well, That wasn't suppose to happen
                        <br />
                        <span className='font-satoshi font-normal text-gray-700'>
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                                Article <span className='blue_gradient'>Summary</span>
                            </h2>
                            <div className='summary_box'>
                                <p className='font-inter font-medium text-sm text-gray-700'>
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </section>
    )
}

export default Demo