import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../config/theme';
import { global, reset } from '../styles';

import Footer from '../components/Footer';
import Header from '../components/Header';

const GlobalStyles = createGlobalStyle`
	${reset};
	${global};
`;

const Main = ({ children }) => {
	const { site } = useStaticQuery(
		graphql`
			{
				site: sanitySiteSettings(id: {eq: "0f217bb5-f7f6-5420-b7c6-58db2c12b8c7"}) {
					title
					logo {
						asset {
							url
						}
					}
				}
			}
		`,
	);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header
				logo={site.logo.asset.url}
			/>
			{ children }

			<Footer />
		</ThemeProvider>
	);
};

export default Main;
