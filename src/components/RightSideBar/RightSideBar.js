import React from 'react'
import HeaderSearch from './HeaderSearch'
import Trends from './Trends'
import Follow from './Follow'
import RightSideFooter from './RightSideFooter'
function RightSideBar() {
    return (
        <div>
            <HeaderSearch/>
            <Trends/>
            <Follow/>
            <RightSideFooter/>
        </div>
    )
}

export default RightSideBar