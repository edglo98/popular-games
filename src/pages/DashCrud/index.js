import React from 'react'
import Links from '../../components/Links/Links'
import LinkForm from '../../components/LinkForm/LinkForm'
import '../../firebase'

const index = () => {
    return (
        <>
            <LinkForm/>
            <Links/>
        </>
    )
}

export default index
