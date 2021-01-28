import React from 'react'
import Links from '../../components/Links/Links'
import '../../firebase'
import {ToastContainer} from '../../../node_modules/react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'

const index = () => {
    return (
        <>
            <div>
            <Links/>
            </div>
            <ToastContainer/>
        </>
        
    )
}

export default index
