import React from 'react'
import VirtualTour from '../../components/virtual-tour/VirtualTour'
import ExploreMore from '../../components/virtual-tour/ExploreMore'
import VirtualTourInfo from '../../components/virtual-tour/VirtualTourInfo'

const VirtualTourPage = () => {
    return (
        <>
            <VirtualTour />
            <VirtualTourInfo/>
            <ExploreMore />
        </>
    )
}

export default VirtualTourPage