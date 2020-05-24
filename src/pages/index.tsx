import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Main';

import About from '../components/About';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Pricing from '../components/Pricing';
import ScheduleSwitcher from '../components/Schedule/ScheduleSwitcher';

interface HomeProps {
	data: any;
}

const Home = ({ data }: HomeProps) => {
	console.log('home props', data);

	const {
		settings,
		home: {
			hero,
			about,
			_rawAbout,
			_rawIntro,
			pricing,
			banner,
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

			<Intro
				title={_rawIntro.title}
				text={_rawIntro.text}
			/>

			<ScheduleSwitcher />

			<About
				title={_rawAbout.title}
				text={_rawAbout.text}
				image={about.image.image.asset.url}
			/>

			<Pricing
				title={pricing.title}
				text={pricing.text}
				tiers={pricing.tiers}
			/>

			<CallToAction
				title={banner.title}
				text={banner.text}
				image={banner.image.image.asset.url}
				link={banner.link}
				linkText={banner.linkText}
			/>

			<Contact
				text={settings.contactText}
				address={settings.address}
				email={settings.email}
				phone={settings.phone}
				mapIframe={settings.mapIframe}
				facebookUrl={settings.facebookUrl}
				instagramUrl={settings.instagramUrl}
			/>
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
	  about {
		image {
		  image {
			asset {
			  url
			}
		  }
		}
	  }
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
