import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlockContent from '@sanity/block-content-to-react';

import useInView from '../hooks/useInView';

import Button from './Button';
import Container from './Container';
import Slider from './Slider';
import T from './Title';

const PricingStyles = styled(motion.div)`
	text-align: center;

	+* {
		margin-top: 75px;
	}

	${T} +* {
		max-width: 734px;
		margin-right: auto;
		margin-left: auto;
	}
`;

const Title = motion.custom(T);

const PriceTiers = styled(motion.div)`
	margin: 35px -8px 0;

	@media (min-width: 848px) {
		.slick-track {
			width: 100%!important;
			transform: none!important;
			display: flex!important;
			justify-content: center!important;
			align-items: flex-start!important;
			flex-wrap: wrap!important;
			padding-bottom: 20px!important;
		}

		.slick-dots.slick-dots {
			display: none!important;
		}

		.slick-slide {
			flex: 1;
			margin: 0 8px;
		}
	}
`;

const PriceTier = styled.div`
	max-width: 332px;
	padding: 30px 22px 33px;
	border: 1px solid rgba(100,100,100, 0.2);
	box-shadow: ${({ theme }) => theme.shadow.card};

	h4 {
		font-family: ${({ theme }) => theme.font.body};
		color: ${({ theme }) => theme.color.text};
		font-size: 1.375rem;
		font-weight: 700;
		text-transform: uppercase;

		+* {
			margin-top: 12px;
		}
	}

	.desc {
		font-size: 0.875rem;
	}

	.price {
		margin-top: 10px;
		margin-bottom: ${(props) => (props.main ? '15px' : 0)};
		font-size: 3.5rem;
		font-weight: 700;

		small {
			font-size: 1.125rem;
			font-weight: 400;
		}
	}

	${Button} {
		margin-top: 12px;
		width: 100%;
	}
`;

const animation = {
	title: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	},
	text: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 0.25,
			},
		},
	},
	tiers: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				delay: 0.5,
			},
		},
	},
};

const Pricing = ({ title, text, tiers }) => {
	const [ ref, visible ] = useInView();

	return (
		<PricingStyles ref={ref}>
			<Container size="sm">
				<Title
					as="h2"
					variants={animation.title}
					animate={visible ? 'show' : 'hidden'}
				>
					{ title }
				</Title>

				<motion.p
					variants={animation.text}
					animate={visible ? 'show' : 'hidden'}
				>
					{ text }
				</motion.p>

				<PriceTiers
					variants={animation.tiers}
					animate={visible ? 'show' : 'hidden'}
				>
					<Slider
						settings={{
							infinite: false,
							mobileFirst: true,
							dots: true,
							arrows: false,
						}}
					>
						{ tiers.map(({
							title, description, price, priceSuffix, link,
						}, i) => (
							<PriceTier
								key={`priceTier-${price}`}
								main={i === 1}
							>
								<h4>{ title }</h4>
								<p className="desc">{ description }</p>
								<p className="price">
									&pound;
									{ price }
									<small>{ priceSuffix || '/mo' }</small>
								</p>
								<Button>Sign up</Button>
							</PriceTier>
						)) }
					</Slider>
				</PriceTiers>
			</Container>
		</PricingStyles>
	);
};

export default Pricing;
