import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Main';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import ScheduleSwitcher from '../components/Schedule/ScheduleSwitcher';

interface HomeProps {
	data: any;
}

const Home = ({ data }: HomeProps) => {
	console.log('home props', data);

	const {
		home: {
			hero,
		},
	} = data;

	return (
		<Layout>
			<Hero
				image={hero.image.asset.url}
				titleParts={hero.text}
				link={hero.link}
				linkText={hero.linkText}
			/>

			<Intro />

			<ScheduleSwitcher />
		</Layout>
	);
};

export const query = graphql`
{
	home: sanityHomePage(id: {eq: "f5eb4dd0-87df-59ba-a4c9-a6342099c723"}) {
	  hero {
		text
		link
		linkText
		image {
		  asset {
			url
			fluid {
			  srcSet
			  sizes
			}
		  }
		}
	  }
	  _rawIntro
	  _rawAbout
	  coaches {
		title
		coaches {
		  name
		  role
		  _rawBio
		  image {
			asset {
			  url
			}
		  }
		}
	  }
	  pricing {
		title
		text
		tiers {
		  title
		  description
		  price
		  priceSuffix
		  link
		}
	  }
	  banner {
		title
		text
		link
		linkText
		image {
		  alt
		  image {
			asset {
			  url
			}
		  }
		}
	  }
	}
	settings: sanitySiteSettings(id: { eq: "0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }) {
	  email
	  phone
	  address
	  mapIframe
	  contactText
	  facebookUrl
	  instagramUrl
	}
  }  
`;

export default Home;
