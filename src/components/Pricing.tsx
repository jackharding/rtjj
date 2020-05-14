import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';

import Button from './Button';
import Container from './Container';
import T from './Title';

const PricingStyles = styled(motion.div)``;
const Title = motion.custom(T);

const PriceTiers = styled.div``;
const PriceTier = styled.div``;

const Pricing = ({ title, text, tiers }) => (
	<PricingStyles>
		<Container size="sm">
			<Title as="h2">{ title }</Title>
			<motion.p>{ text }</motion.p>

			<PriceTiers>
				{ tiers.map(({
					title, description, price, priceSuffix, link,
				}) => (
					<PriceTier key={`priceTier-${price}`}>
						<Title as="h4">{ title }</Title>
						<p className="desc">{ description }</p>
						<p className="price">
							{ price }
							<small>{ priceSuffix || '/mo' }</small>
						</p>
						<Button>Sign up</Button>
					</PriceTier>
				)) }
			</PriceTiers>
		</Container>
	</PricingStyles>
);

export default Pricing;
