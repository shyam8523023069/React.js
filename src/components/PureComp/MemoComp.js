
import React from 'react'

function MemoComp(props) {
    console.log('memoComponent')
    return (
        <div>
            memo : {props.names}
        </div>
    )
}

export default React.memo(MemoComp);
