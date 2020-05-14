require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	plugins: [
		'gatsby-plugin-styled-components',
		// {
		//     resolve: `gatsby-plugin-google-analytics`,
		//     options: {
		//         // replace "UA-XXXXXXXXX-X" with your own Tracking ID
		//         trackingId: "UA-XXXXXXXXX-X",
		//     },
		// },
		{
			resolve: 'gatsby-plugin-typescript',
			options: {
				isTSX: true,
				allExtensions: true,
			},
		},
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: process.env.SANITY_PROJECTID,
				dataset: process.env.SANITY_DATASET,

				// a token with read permissions is required
				// if you have a private dataset
				token: process.env.SANITY_TOKEN,
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'squada one',
					'work sans\:400,400i,600,700',
				],
				display: 'swap',
			},
		},
	],
};
