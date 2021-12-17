import css from './UserCard.module.css'

function UserCard({name, age, email, password}){

    return(
        <div className={css.card}>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Email: {email}</h2>
            <h2>Password: {password}</h2>

            {/*<div className={css.cardFooter}>*/}
            {/*    <Icon icon='fa-eye' yellow/>*/}
            {/*    <Icon icon='fa-pencil' green/>*/}
            {/*    <Icon icon='fa-times' red/>*/}
            {/*</div>*/}

        </div>
    )
}

export default UserCard;