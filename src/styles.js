import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '7vh',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3vh',
    },
    logoContainer: {
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
    },
    alanLogo: {
        height: '15vh',
        padding: '0 5%',
        margin: 0,
        marginBottom: 10,
    },
}));

export default styles;