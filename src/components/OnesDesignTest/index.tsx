
import React, { useCallback, useState } from 'react';
// import { Button } from '@ones-design/core';

const OnesDesignTest: React.FunctionComponent<{}> = function (props) {
	const [loading, setLoading] = useState(false)
	const handleClick = useCallback(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 5000)
	}, [])
	return (
		<div style={{fontFamily: 'PingFang SC,"微软雅黑",Arial'}}>
			<button onClick={handleClick}>123</button>
			<button disabled={false} onClick={handleClick}>123</button>
		</div>
	)
}

export default OnesDesignTest

