import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>Task Tracker {title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Jo',
}

Header.propTypes = {
    // Definiendo el tipo de objeto que debe venir en props
    title: PropTypes.string.isRequired,
}


export default Header;