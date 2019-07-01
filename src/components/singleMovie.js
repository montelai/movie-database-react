import React from 'react'

export default function SingleMovie({match, props}) {

    console.log(match)
    // console.log('Loading Movie Id', match.params.id)


    return (
        <div>
            {match.params.id}
        </div>
    )
}
