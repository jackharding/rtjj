import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import theme from '../config/theme';
import { global, slick } from '../styles';

import Footer from '../components/Footer';
import Header from '../components/Header';

const GlobalStyles = createGlobalStyle`
	${slick};
	${global};
`;

const Main = ({ children }) => {
	const [ menuOpen, setMenuOpen ] = useState(false);

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
					facebookUrl
					instagramUrl
				}
			}
		`,
	);

	return (
		<ThemeProvider theme={theme}>
			<Helmet
				bodyAttributes={{
					class: menuOpen ? 'menu-open' : '',
				}}
			>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="manifest"
					href="/site.webmanifest"
				/>
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta
					name="msapplication-TileColor"
					content="#da532c"
				/>
				<meta
					name="theme-color"
					content="#ffffff"
				/>

				<title>
					{ site.title }
					{' '}
					| Brazilian Jiu Jitsu, MMA and wrestling | Cardiff
				</title>
			</Helmet>

			<GlobalStyles />
			<Header
				logo={site.logo.asset.url}
				instagramUrl={site.instagramUrl}
				facebookUrl={site.facebookUrl}
				menuOpen={menuOpen}
				onMenuToggle={() => setMenuOpen((prev) => !prev)}
			/>
			{ children }

			<Footer />
		</ThemeProvider>
	);
};

export default Main;
