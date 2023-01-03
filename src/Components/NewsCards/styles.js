import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5vh',
        fontSize: '5vh',
        color: 'white',
        textAlign: 'center',
    },
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '55vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
})

export default styles;