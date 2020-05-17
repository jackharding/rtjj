export default `
	.slick-slider {
		/* opacity: 0; */
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-touch-action: pan-y;
		-ms-user-select: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		box-sizing: border-box;
		display: block;
		position: relative;
		touch-action: pan-y;
		user-select: none;
		&.active {
			opacity: 1;
			transition: 1s;
		}
	}
	.slick-list {
		display: block;
		margin: 0;
		overflow: hidden;
		padding: 0;
		position: relative;
		&:focus {
			outline: none;
		}
		&.dragging {
			cursor: hand;
			cursor: pointer;
		}
	}
	.slick-slider .slick-track,
	.slick-slider .slick-list {
		-moz-transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);
		-o-transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	.slick-track {
		display: block;
		left: 0;
		margin-left: auto;
		margin-right: auto;
		position: relative;
		top: 0;
		&:before,
		&:after {
			content: '';
			display: table;
		}
		&:after {
			clear: both;
		}
		.slick-loading & {
			visibility: hidden;
		}
	}
	.slick-slide {
		display: none;
		float: left;
		height: 100%;
		[dir='rtl'] & {
			float: right;
		}
		img {
			display: block;
		}
		&.slick-loading img {
			display: none;
		}
		min-height: 1px;
		&.dragging img {
			pointer-events: none;
		}
		.slick-initialized & {
			display: block;
		}
		.slick-loading & {
			visibility: hidden;
		}
		.slick-vertical & {
			border: 1px solid transparent;
			display: block;
			height: auto;
		}
	}
	.slick-arrow.slick-hidden {
		display: none;
	}
	.slick-arrow {
		position: absolute;
		top: 0;
		height: 100%;
		padding: 0 14px;
		border: 0;
		background: none;
		cursor: pointer;
		color: ${({ theme }) => theme.color.brandDarker};
		z-index: 2;
		svg {
			width: 20px;
			height: auto;
			g {
				fill: currentColor;
			}
		}
		&.slick-prev {
			left: 0;
		}
		&.slick-next {
			right: 0;
		}
		@media (max-width: 519px) {
			svg {
				width: 15px;
			}
			
			&.slick-next {
				right: -15px;
			}
			&.slick-prev {
				left: -15px;
			}
		}
	}
	.slick-dots {
		display: flex !important;
		justify-content: center;
		list-style: none;
		margin-top: 15px;
		padding: 0;
		li {
			button {
				background: ${({ theme }) => theme.color.disabled};
				border: 0;
				border-radius: 50%;
				cursor: pointer;
				height: 0;
				padding: 7px;
				text-indent: -9999px;
				width: 0;
				&:focus {
					box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.color.brandDarker};
					outline: 2px solid transparent;
				}
			}
			&.slick-active {
				button {
					background: ${({ theme }) => theme.color.brandDarker};
				}
			}
			+ * {
				margin-left: 7px;
			}
		}
	}
`;
