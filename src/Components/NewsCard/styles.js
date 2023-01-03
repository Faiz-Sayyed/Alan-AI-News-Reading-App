import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    media: {
        height: 250,
    },
    border: {
        border: 'solid',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '3px solid #BFEAF5',
        backgroundColor: '#BFEAF5',
    },
    activeCard: {
        borderTop: '10px solid #3C79F5',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
    },
    title: {
        padding: '0 12px',
    },
    cardActions: {
        padding: '0 10px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default styles