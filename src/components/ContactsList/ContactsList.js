import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './ContactsList.module.css';
import defImg from './defAvaCir.png';
import { deleteContact } from '../../redux/phonebook/phonebookOperations';
import { getVisibleConatacts } from 'redux/phonebook/phonebookSelectors';

function ContactsList({ contacts, onDelete }) {
  return (
    <>
      {contacts.length > 0 && (
        <TransitionGroup component="ul" className={s.list}>
          {contacts.map(({ name, number, id }) => (
            <CSSTransition key={id} timeout={250} classNames={s}>
              <li className={s.contact}>
                <img src={defImg} className={s.avatar} alt="avatar" />
                <div className={s.discription}>
                  <span className={s.name}>{name} </span>
                  <span className={s.number}> {number} </span>
                </div>
                <button
                  type="button"
                  onClick={() => onDelete(id)}
                  className={s.button}
                >
                  <p className={s.delete}>&#9940;</p>
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  contacts: getVisibleConatacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  filter: PropTypes.string,
};
