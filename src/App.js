import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards'
import useStyles from './styles'

const alanKey = '0b936f4b2856b4982996fd67fb008c4d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        var alanBtnInstance = alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                    // console.log(articles);
                } else if (command === 'read') {
                    if (number > 0 && number <= articles.length) {
                        // console.log(number);
                        setActiveArticle(number - 1);
                        alanBtnInstance.playText(articles[number - 1].title);
                        alanBtnInstance.playText(articles[number - 1].description);
                    }
                    else {
                        alanBtnInstance.playText('Please try that again...');
                    }
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    if (number > 0 && number <= articles.length) {
                        // console.log(number);
                        setActiveArticle(number - 1);
                        const article = articles[number - 1];
                        window.open(article.url, '_blank');
                        alanBtnInstance.playText('Opening...');
                    }
                    else {
                        alanBtnInstance.playText('Please try that again...');
                    }
                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='https://avatars.githubusercontent.com/u/54960780?s=200&v=4' className={classes.alanLogo} alt='Alan Logo' />
            </div>
            <div className={classes.title}>News Reader App</div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App;