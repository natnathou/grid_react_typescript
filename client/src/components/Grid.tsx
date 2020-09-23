import React, { useEffect, MouseEvent } from 'react';
import _ from 'lodash';
import { useDispatch, useGlobalState } from '../state/StateContext';
import { fetchData, Data } from '../state/actions';
import { ReactComponent as ReactLogo } from '../logo/next.svg';
import '../style/Grid.css';

export const Grid = () => {
	const dispatch = useDispatch();
	const data = _.toArray(useGlobalState().data);
	useEffect(() => {
		fetchData(dispatch);
	}, [dispatch]);

	let subRowCounter = 0;
	let rowCounter = -1;

	const resetCounter = () => {
		subRowCounter = 0;
	};

	const subLineCreator = (data: Data, index: number) => {
		subRowCounter++;
		return lineCreator(data, index, false, true);
	};

	const handle_Arrow_Click = (e: MouseEvent<HTMLDivElement>): void => {
		const rowIndex = parseInt(
			e.currentTarget.getAttribute('row-number') as string
		);

		const row = document.getElementsByClassName('row')[rowIndex + 1];

		if (e.currentTarget.getAttribute('display-div') === 'none') {
			row.className = 'row';
			e.currentTarget.setAttribute('display-div', 'display');
		} else {
			row.className = 'row subRow';
			e.currentTarget.setAttribute('display-div', 'none');
		}
	};

	const lineCreator = (
		data: Data,
		rowIndex: number,
		ownSubRow: boolean = false,
		isSubrow: boolean = false
	) => {
		if (data.subLine) {
			ownSubRow = true;
		}
		rowCounter++;

		return (
			<React.Fragment key={rowIndex}>
				<div></div>
				<div className={`row ${subRowCounter ? `subRow` : ``}`}>
					{_.toArray(data.line).map((item, index) => {
						return (
							<React.Fragment key={index}>
								{!index ? (
									<React.Fragment>
										<span
											style={{
												marginLeft: `${
													subRowCounter * 10
												}px`
											}}
											row-number={rowCounter}
											display-div={'none'}
											onClick={handle_Arrow_Click}
										>
											{ownSubRow ? (
												<ReactLogo
													style={{ height: `15px` }}
												/>
											) : null}
										</span>
										<div
											style={{
												marginLeft: `${
													subRowCounter * 10
												}px`
											}}
										></div>

										<div
											className={`cel`}
											style={{
												marginLeft: `${
													subRowCounter * 10
												}px`
											}}
										>
											{isSubrow ? (
												<span
													style={{
														background: 'black',
														position: 'absolute',
														bottom: '29px',
														height: '1px',
														width: '10px',
														left: `${
															(subRowCounter -
																1) *
															10
														}px`
													}}
												></span>
											) : null}

											{item}
										</div>
										<div></div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<div className='cel'>{item}</div>
										<div></div>
									</React.Fragment>
								)}
							</React.Fragment>
						);
					})}
				</div>

				{ownSubRow
					? subLineCreator(data.subLine as Data, rowIndex)
					: resetCounter()}
			</React.Fragment>
		);
	};

	const rows = (): JSX.Element => {
		return (
			<React.Fragment>
				{data.map((datas, index) => {
					return lineCreator(datas, index);
				})}
				<div></div>
			</React.Fragment>
		);
	};

	return <div className='table'>{rows()}</div>;
};
