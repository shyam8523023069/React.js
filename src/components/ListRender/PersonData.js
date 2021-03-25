import React from 'react'

function PersonData({data}) {
    return (
        <div>
            <div> My Name : {data.name} haveing : {data.age} Years old and doing {data.work} </div>
        </div>
    )
}

export default PersonData;
