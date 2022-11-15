import { useState } from 'react'

import greyOk from '../../../assets/icons/grey-ok.svg'
import whiteOk from '../../../assets/icons/white-ok.svg'

export function LessonCheckIcon(props) {
    const[lessonAttended, setLessonAttended] = useState(props.lesson.attended)

    const toogleCheckLesson = () => {
		setLessonAttended(!lessonAttended)
	}

    if(lessonAttended) {
        return(
            <div onClick={toogleCheckLesson} className='nav-index lesson'>
                <div className="inner-grey-circle">
                    <img src={greyOk} alt="Ícone de ok" />
                </div>
            </div>
        )
    } else {
        return(
            <div onClick={toogleCheckLesson} className='nav-index not-seen lesson'>
                <img src={whiteOk} alt="Ícone de ok" />
            </div>
        )
    }
}
