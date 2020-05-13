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
    home: sanityHomePage(_id: {eq: "9f58f2c6-bb45-4e0a-ba6c-dd4d6c325c26"}) {
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
    }
  }
`;

export default Home;
