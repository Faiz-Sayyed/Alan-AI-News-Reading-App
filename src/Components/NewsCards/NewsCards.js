import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles'

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'Categories', info: 'Business, Health, Entertainment, General, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();

    if (!articles.length) {
        return (
            <>
                <Typography variant='h6' className={classes.title}>
                    Search news by:
                </Typography>
                <Grow in>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {
                            infoCards.map((infoCard) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                                    <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                        <Typography variant="h5">{infoCard.title}</Typography>
                                        {(infoCard.info) ? <Typography variant="h6">{infoCard.info}</Typography> : null}
                                        <Typography variant="h6"><b>Try saying: </b><br /> <i>{infoCard.text}</i></Typography>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grow>
            </>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    articles.map((article, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <NewsCard article={article} i={i} activeArticle={activeArticle} length={articles.length}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>
    );
}

export default NewsCards