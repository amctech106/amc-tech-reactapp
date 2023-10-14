import Styles from './styles.module.css'
import React from 'react'

const Spinner = () => {
  return (
    <>
    <div className={Styles.spinner}>
      <div className={Styles.firstCircle}>
        <div className={Styles.secondCircle}></div>
      </div>
      <h2 className={Styles.status}>تھوڑا سا انتظار کریں ...</h2>
      <p className={Styles.statusText}>ممکن ہے آپ کا کچھ ٹائم لگے گا لیکن اس کو بند نہ  کریں شکریہ .</p>
    </div>
    </>

  )
}

export default Spinner