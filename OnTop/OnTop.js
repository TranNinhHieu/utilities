import React, { useState } from 'react'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './OnTopButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(styles)
function OnTopButton() {
    const [show, setShow] = useState(false)
    const toggleOnTopButton = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 200) {
            setShow(true)
        } else setShow(false)
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    window.addEventListener('scroll', toggleOnTopButton)
    return (
        <div onClick={scrollToTop} style={{ display: show ? 'inline' : 'none' }} className={cx('ontop')}>
            <FontAwesomeIcon icon={faAngleUp} className={cx('fa-angle-up')} />
        </div>
    )
}

export default OnTopButton
