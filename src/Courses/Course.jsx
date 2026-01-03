import styles from './Course.module.css'

const course1="HTML"

function Course(){
    return (
        <div className={styles.cour}>
            <img src="https://via.placeholder.com/150" alt="Course Image" />
            <h3>{course1}</h3>
            <p>This is html course</p>
        </div>
    );
}
export default Course