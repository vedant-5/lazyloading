/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@material-ui/core';
import React, { useState, useEffect, Suspense } from 'react';
import styled from "styled-components";


import loading from '../images/loading.png';

const ImageComponent = React.lazy(() => import('./image'));

const List = () => {
	const [listItems, setListItems] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetchData();
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		if (
			Math.ceil(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
		console.log(isFetching);
	};

	const fetchData = async () => {
		setTimeout(async () => {
			
			const result = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`);
			const data = await result.json();
			console.log(data);
			setPage(page + 1);
			setListItems(() => {
				return [...listItems, ...data];
			});
		}, 200);
	};

	useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	const fetchMoreListItems = () => {
		fetchData();
		setIsFetching(false);
	};

	return (
		<>
		
			<Container >
			<Body>
				<Title>Profiles</Title>
				{listItems.map((listItem) => (
					<div style={{marginBottom:"20px"}} key={listItem.id}>
						<Suspense fallback={<img src={loading} alt='Avatar' style={{ margin:"auto", width: '50%' }} />}>
							<ImageComponent id={listItem.id} title={listItem.title} src={listItem.url} />
						</Suspense>
					</div>
				))}
				{isFetching && <h1>Loading More Profiles..</h1>}
				</Body>
			</Container>
		
		</>
	);
};

export default List;

const Body = styled.div`
	background-color: rgb(235,253,254);
	border-radius: 10px;
	box-shadow: -7px -4px 20px 0px rgba(0,0,0,0.08);
	box-shadow: 7px 0px 20px 0px rgba(0,0,0,0.08);
	width:70%;
	margin:auto
`

const Title = styled.p`
	margin-left: 20px;
	text-align: center;
	padding-top:10px;
	font-size: 1.7rem;
`
